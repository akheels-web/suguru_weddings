import { NextRequest, NextResponse } from 'next/server'
import { getCurrentUser } from '@/lib/auth'
import { getDb } from '@/lib/db'
import { saveUploadedFile } from '@/lib/storage'

export async function POST(request: NextRequest) {
  try {
    const user = await getCurrentUser()
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }
    
    const formData = await request.formData()
    const file = formData.get('file') as File
    const category = formData.get('category') as string
    const title = formData.get('title') as string
    const description = formData.get('description') as string
    const altText = formData.get('alt_text') as string
    
    if (!file || !category) {
      return NextResponse.json(
        { error: 'File and category are required' },
        { status: 400 }
      )
    }
    
    // Save file to disk
    const uploadResult = await saveUploadedFile(file)
    
    // Save to database
    const db = await getDb()
    const result = await db.run(
      `INSERT INTO gallery_images 
       (filename, original_name, category, title, description, alt_text, size, mime_type, uploaded_by)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        uploadResult.filename,
        uploadResult.originalName,
        category,
        title || null,
        description || null,
        altText || null,
        uploadResult.size,
        uploadResult.mimeType,
        user.id
      ]
    )
    
    return NextResponse.json({
      success: true,
      image: {
        id: result.lastID,
        ...uploadResult
      }
    })
    
  } catch (error: any) {
    console.error('Upload error:', error)
    return NextResponse.json(
      { error: error.message || 'Upload failed' },
      { status: 500 }
    )
  }
}
