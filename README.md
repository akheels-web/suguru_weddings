# Suguru Weddings - Premium Wedding Photography Website

A modern, responsive website for a premium wedding photography business based in Hyderabad, India. Built with Next.js 14, TypeScript, and Tailwind CSS.

![Website Preview](https://img.shields.io/badge/Status-Ready-green)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC)
![License](https://img.shields.io/badge/License-MIT-green)

## 🌟 Features

### Frontend
- **Modern Design**: Premium gold & cream theme with elegant typography
- **Fully Responsive**: Mobile-first design works on all devices
- **High Performance**: Optimized with Next.js Image component
- **SEO Optimized**: Proper meta tags, Open Graph, and schema markup
- **Interactive Gallery**: Filterable image gallery with categories
- **Contact Form**: With WhatsApp integration for instant communication
- **Admin Dashboard**: Secure admin panel for content management

### Backend (Admin Features)
- **Secure Authentication**: JWT-based admin login system
- **Image Management**: Upload, categorize, and delete images
- **Cloud Storage**: Integrated with Cloudinary for image hosting
- **Database**: Supabase for storing image metadata
- **API Routes**: RESTful API for managing content

## 🚀 Live Demo

Website: [https://suguruweddings.com](https://suguruweddings.com)  
Admin Dashboard: [https://suguruweddings.com/admin](https://suguruweddings.com/admin)

## 📁 Project Structure
suguru-weddings/
├── public/ # Static assets
├── src/
│ ├── app/ # Next.js app router pages
│ │ ├── api/ # API routes
│ │ ├── admin/ # Admin dashboard pages
│ │ └── [pages]/ # Public pages
│ ├── components/ # React components
│ │ └── admin/ # Admin components
│ ├── lib/ # Utility functions
│ └── styles/ # Global styles
├── uploads/ # Local uploads (development only)
└── [config files] # Configuration files

text

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, JWT Authentication
- **Database**: Supabase (PostgreSQL)
- **Storage**: Cloudinary (Image CDN)
- **Hosting**: Vercel
- **Icons**: React Icons
- **Styling**: Tailwind CSS with custom design system

## 🚀 Quick Start

### Prerequisites
- Node.js 18.17 or later
- npm, yarn, or pnpm
- GitHub account
- Vercel account
- Supabase account
- Cloudinary account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/suguru-weddings.git
   cd suguru-weddings
Install dependencies

bash
npm install
# or
yarn install
# or
pnpm install
Set up environment variables

bash
cp .env.example .env.local
Update .env.local with your credentials.

Run development server

bash
npm run dev
# or
yarn dev
# or
pnpm dev
Open http://localhost:3000

🔧 Configuration
1. Supabase Setup
Create a project at supabase.com

Run the SQL from supabase-setup.sql in the SQL editor

Get your API keys from Settings > API

Update environment variables:

text
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
2. Cloudinary Setup
Sign up at cloudinary.com

Get API keys from Dashboard

Update environment variables:

text
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
3. JWT Secret
Generate a secure JWT secret:

bash
openssl rand -base64 32
Add to .env.local:

text
JWT_SECRET=your_generated_secret
📦 Deployment
Deploy to Vercel
The easiest way to deploy is using Vercel:

https://vercel.com/button

Push your code to GitHub

Import project in Vercel dashboard

Add all environment variables

Deploy!

Manual Deployment
Build the project:

bash
npm run build
Start production server:

bash
npm start
👥 Admin Access
Default admin credentials:

Username: admin

Password: admin123

⚠️ Important: Change the default password after first login!

Admin dashboard: /admin

Upload and manage gallery images

View uploaded images

Delete images

Manage categories

🔒 Environment Variables
See .env.example for all required variables:

env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

# Authentication
JWT_SECRET=

# Optional: Email service (for contact form)
EMAIL_SERVER_USER=
EMAIL_SERVER_PASSWORD=
EMAIL_SERVER_HOST=
EMAIL_SERVER_PORT=
EMAIL_FROM=
📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

🤝 Contributing
Fork the repository

Create a feature branch (git checkout -b feature/AmazingFeature)

Commit changes (git commit -m 'Add some AmazingFeature')

Push to branch (git push origin feature/AmazingFeature)

Open a Pull Request

📞 Support
For support:

Email: support@suguruweddings.com

Website: suguruweddings.com/contact

Create an issue

🙏 Acknowledgments
Next.js

Tailwind CSS

Supabase

Cloudinary

React Icons

Vercel

<p align="center"> Made with ❤️ for Suguru Weddings | © 2024 Suguru Weddings. All rights reserved. </p> ```
