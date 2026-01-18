# 🚀 TechVault - SCIC Job Task

> **A modern full-stack e-commerce web application built with Next.js 16 and Express.js**

## 📋 Project Overview

This is a **SCIC (Saimon Global IT) Job Task** - A comprehensive full-stack web application featuring a premium tech product showcase with modern UI/UX, authentication system, and CRUD operations.

### 🎯 Task Requirements Completed
- ✅ **Landing Page** with 7 sections (Hero, Categories, About, Features, Stats, Testimonials, Newsletter)
- ✅ **Authentication System** with cookie-based login
- ✅ **Product Listing** with detailed view
- ✅ **Protected Routes** for authenticated users
- ✅ **Add Product** functionality (Admin only)
- ✅ **Responsive Design** for all devices
- ✅ **Modern UI/UX** with animations and interactions

---

## 🛠️ Technologies Used

### **Frontend Technologies**
| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 16.1.2 | React framework with App Router |
| **React** | 19.2.3 | UI library |
| **Tailwind CSS** | 3.4.17 | Utility-first CSS framework |
| **DaisyUI** | 4.12.14 | Tailwind CSS components |
| **Framer Motion** | 12.26.2 | Animation library |
| **Lucide React** | 0.562.0 | Modern icon library |

### **Backend Technologies**
| Technology | Version | Purpose |
|------------|---------|---------|
| **Express.js** | 5.2.1 | Node.js web framework |
| **CORS** | 2.8.5 | Cross-origin resource sharing |
| **Body Parser** | 2.2.2 | Request body parsing |

### **State Management & Utils**
| Package | Version | Purpose |
|---------|---------|---------|
| **js-cookie** | 3.0.5 | Cookie management |
| **react-countup** | 6.5.3 | Animated counters |

### **Development Tools**
| Tool | Version | Purpose |
|------|---------|---------|
| **ESLint** | 9.x | Code linting |
| **PostCSS** | 8.4.49 | CSS processing |
| **Autoprefixer** | 10.4.20 | CSS vendor prefixes |

---

## 🎨 Key Features

### **🏠 Landing Page Sections**
1. **Hero Section** - Premium product showcase with CTA
2. **Categories** - Product categories with hover effects
3. **About Us** - Company information with animations
4. **Features** - Service highlights (Fast delivery, Security, etc.)
5. **Stats** - Animated counters (Customers, Products, Brands)
6. **Testimonials** - Customer reviews with ratings
7. **Newsletter** - Email subscription with validation

### **🔐 Authentication System**
- Cookie-based authentication
- Protected routes with middleware
- Login/Logout functionality
- Session persistence

### **🛍️ Product Management**
- Product listing with grid layout
- Detailed product view
- Add new products (Admin only)
- Image upload support
- Price and description management

### **🎯 Modern UI/UX Features**
- **Dark/Light Mode** toggle
- **Custom Toast Notifications** (Success, Error, Warning, Info)
- **Smooth Animations** with Framer Motion
- **Responsive Design** for all screen sizes
- **Loading States** and error handling
- **Hover Effects** and micro-interactions

---

## 📦 NPM Packages Used

### **Production Dependencies**
```json
{
  "next": "16.1.2",
  "react": "19.2.3",
  "react-dom": "19.2.3",
  "framer-motion": "12.26.2",
  "js-cookie": "3.0.5",
  "lucide-react": "0.562.0",
  "react-countup": "6.5.3",
  "express": "5.2.1",
  "cors": "2.8.5",
  "body-parser": "2.2.2"
}
```

### **Development Dependencies**
```json
{
  "tailwindcss": "3.4.17",
  "daisyui": "4.12.14",
  "autoprefixer": "10.4.20",
  "postcss": "8.4.49",
  "eslint": "9.x",
  "eslint-config-next": "16.1.2",
  "babel-plugin-react-compiler": "1.0.0"
}
```

---

## 🖥️ Backend Architecture

### **Server Structure**
```
server/
├── index.js          # Main server file
├── package.json       # Backend dependencies
└── .gitignore        # Git ignore rules
```

### **API Endpoints**
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/items` | Get all products |
| `GET` | `/items/:id` | Get single product |
| `POST` | `/items` | Add new product |

### **Backend Features**
- **Express.js Server** running on port 5000
- **CORS enabled** for cross-origin requests
- **JSON data storage** (in-memory)
- **RESTful API** design
- **Error handling** middleware

---

## 🚀 Installation & Setup

### **Prerequisites**
- Node.js (v18 or higher)
- npm or yarn package manager

### **1. Clone Repository**
```bash
git clone <repository-url>
cd scic-job-task
```

### **2. Backend Setup**
```bash
cd server
npm install
node index.js
```
**Backend runs on:** `http://localhost:5000`

### **3. Frontend Setup**
```bash
cd ..
npm install
npm run dev
```
**Frontend runs on:** `http://localhost:3000`

### **4. Environment Variables**
Create `.env.local` in root directory:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

---

## 🔑 Login Credentials

```
Email: admin@test.com
Password: 123456
```

---

## 📱 Project Structure

```
scic-job-task/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── add-item/          # Add product page
│   │   ├── items/             # Product listing
│   │   │   └── [id]/          # Product details
│   │   ├── login/             # Login page
│   │   ├── layout.js          # Root layout
│   │   ├── page.jsx           # Home page
│   │   └── globals.css        # Global styles
│   ├── components/            # Reusable components
│   │   ├── Navbar.jsx         # Navigation
│   │   ├── Hero.jsx           # Hero section
│   │   ├── Categories.jsx     # Categories section
│   │   ├── AboutUs.jsx        # About section
│   │   ├── Features.jsx       # Features section
│   │   ├── Stats.jsx          # Statistics section
│   │   ├── Testimonials.jsx   # Reviews section
│   │   ├── Newsletter.jsx     # Email subscription
│   │   ├── Footer.jsx         # Footer
│   │   └── Toast.jsx          # Toast notifications
│   ├── hooks/                 # Custom React hooks
│   │   ├── useAuth.js         # Authentication hook
│   │   └── useSimpleToast.js  # Toast hook
│   ├── contexts/              # React contexts
│   │   └── ToastContext.jsx   # Toast context
│   └── middleware.js          # Route protection
├── server/                    # Backend server
│   ├── index.js              # Express server
│   └── package.json          # Backend dependencies
├── public/                   # Static assets
├── tailwind.config.js        # Tailwind configuration
├── next.config.mjs          # Next.js configuration
└── package.json             # Frontend dependencies
```

---

## 🎯 SCIC Job Task Specifications

### **Completed Requirements**
- [x] **Next.js 15/16** application
- [x] **7-section landing page** with modern design
- [x] **Authentication system** with cookies
- [x] **Product listing** from Express server
- [x] **Protected routes** with middleware
- [x] **Add item functionality** for authenticated users
- [x] **Responsive design** for all devices
- [x] **Modern UI/UX** with animations

### **Additional Features Added**
- [x] **Dark/Light mode** toggle
- [x] **Custom toast notifications**
- [x] **Advanced animations** with Framer Motion
- [x] **Form validations** with error handling
- [x] **Loading states** and user feedback
- [x] **Professional design** with DaisyUI components

---

## 🌟 Live Demo

**Frontend:** `http://localhost:3000`  
**Backend API:** `http://localhost:5000`

---

## 👨‍💻 Developer

**Name:** Asif Al Fattha Fahim 
**Task:** SCIC Job Task    
**Date:** January 2025

---

## 📄 License

This project is created as a job task for **SCIC** and is for evaluation purposes only.

---

## 🤝 Support

For any questions or issues, please contact the development team.

**Happy Coding! 🚀**