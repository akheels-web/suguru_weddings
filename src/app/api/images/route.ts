import { NextRequest, NextResponse } from 'next/server'
import { getCurrentUser } from '@/lib/auth'
import { getDb } from '@/lib/db'
import { deleteFile } from '@/lib/storage'

// GET all images
export async function GET(request: NextRequest) {
  try {
    const user = await getCurrentUser()
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }
    
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    
    const db = await getDb()
    
    let query = `
      SELECT gi.*, u.username as uploaded_by_name
      FROM gallery_images gi
      LEFT JOIN users u ON gi.uploaded_by = u.id
      ORDER BY gi.uploaded_at DESC
    `
    const params: any[] = []
    
    if (category && category !== 'all') {
      query = query.replace('ORDER BY', 'WHERE category = ? ORDER BY')
      params.push(category)
    }
    
    const images = await db.all(query, params)
    
    return NextResponse.json({ images })
    
  } catch (error) {
    console.error('Get images error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// DELETE image
export async function DELETE(request: NextRequest) {
  try {
    const user = await getCurrentUser()
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }
    
    const { id } = await request.json()
    
    if (!id) {
      return NextResponse.json(
        { error: 'Image ID is required' },
        { status: 400 }
      )
    }
    
    const db = await getDb()
    
    // Get image info before deleting
    const image = await db.get('SELECT * FROM gallery_images WHERE id = ?', [id])
    
    if (!image) {
      return NextResponse.json(
        { error: 'Image not found' },
        { status: 404 }
      )
    }
    
    // Delete from database
    await db.run('DELETE FROM gallery_images WHERE id = ?', [id])
    
    // Delete file from disk
    await deleteFile(image.filename)
    
    return NextResponse.json({ success: true })
    
  } catch (error) {
    console.error('Delete image error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
