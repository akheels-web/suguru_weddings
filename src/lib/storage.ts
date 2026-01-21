import fs from 'fs/promises'
import path from 'path'
import { v4 as uuidv4 } from 'uuid'

const UPLOAD_DIR = process.env.UPLOAD_DIR || './public/images/uploaded'
const ALLOWED_MIME_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif']
const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10MB

export async function ensureUploadDir() {
  await fs.mkdir(UPLOAD_DIR, { recursive: true })
}

export interface UploadResult {
  filename: string
  originalName: string
  size: number
  mimeType: string
  path: string
}

export async function saveUploadedFile(file: File): Promise<UploadResult> {
  await ensureUploadDir()
  
  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)
  
  // Validate file size
  if (buffer.length > MAX_FILE_SIZE) {
    throw new Error('File too large. Maximum size is 10MB')
  }
  
  // Generate unique filename
  const ext = path.extname(file.name)
  const filename = `${uuidv4()}${ext}`
  const filepath = path.join(UPLOAD_DIR, filename)
  
  // Save file
  await fs.writeFile(filepath, buffer)
  
  return {
    filename,
    originalName: file.name,
    size: buffer.length,
    mimeType: file.type,
    path: `/images/uploaded/${filename}`
  }
}

export async function deleteFile(filename: string): Promise<void> {
  const filepath = path.join(UPLOAD_DIR, filename)
  try {
    await fs.unlink(filepath)
  } catch (error) {
    console.error('Error deleting file:', error)
  }
}
