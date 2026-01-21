import { NextRequest, NextResponse } from 'next/server'
import { getCurrentUser } from '@/lib/auth'
import { uploadToCloudinary } from '@/lib/cloudinary'
import { supabaseAdmin } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const user = await getCurrentUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    
    const formData = await request.formData()
    const file = formData.get('file') as File
    const category = formData.get('category') as string
    
    if (!file || !category) {
      return NextResponse.json(
        { error: 'File and category are required' },
        { status: 400 }
      )
    }
    
    // Upload to Cloudinary
    const uploadResult: any = await uploadToCloudinary(file, `suguru-weddings/${category}`)
    
    // Save metadata to Supabase
    const { data, error } = await supabaseAdmin
      .from('gallery_images')
      .insert({
        public_id: uploadResult.public_id,
        url: uploadResult.secure_url,
        category,
        title: formData.get('title') as string || null,
        description: formData.get('description') as string || null,
        alt_text: formData.get('alt_text') as string || null,
        width: uploadResult.width,
        height: uploadResult.height,
        format: uploadResult.format,
        uploaded_by: user.id,
      })
      .select()
    
    if (error) throw error
    
    return NextResponse.json({
      success: true,
      image: data[0]
    })
    
  } catch (error: any) {
    console.error('Upload error:', error)
    return NextResponse.json(
      { error: error.message || 'Upload failed' },
      { status: 500 }
    )
  }
}
