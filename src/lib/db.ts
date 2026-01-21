import sqlite3 from 'sqlite3'
import { Database, open } from 'sqlite'

let db: Database | null = null

export async function getDb() {
  if (!db) {
    db = await open({
      filename: './database.db',
      driver: sqlite3.Database
    })

    // Create tables
    await db.exec(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        password_hash TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS gallery_images (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        filename TEXT NOT NULL,
        original_name TEXT NOT NULL,
        category TEXT NOT NULL,
        title TEXT,
        description TEXT,
        alt_text TEXT,
        size INTEGER,
        mime_type TEXT,
        uploaded_by INTEGER,
        uploaded_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (uploaded_by) REFERENCES users(id)
      );

      CREATE TABLE IF NOT EXISTS hero_images (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        filename TEXT NOT NULL,
        order_position INTEGER DEFAULT 0,
        is_active BOOLEAN DEFAULT 1,
        uploaded_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `)

    // Create default admin user (password: admin123)
    const adminExists = await db.get('SELECT id FROM users WHERE username = ?', ['admin'])
    if (!adminExists) {
      const bcrypt = require('bcryptjs')
      const hashedPassword = await bcrypt.hash('admin123', 10)
      await db.run(
        'INSERT INTO users (username, password_hash) VALUES (?, ?)',
        ['admin', hashedPassword]
      )
    }
  }
  return db
}
