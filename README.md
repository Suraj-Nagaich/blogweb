# 📝 Blog Website

A full-stack blog platform where users can create, read, update, and manage blog posts.
The application provides a simple and responsive interface for sharing knowledge and publishing articles.

---

## 📌 Features

* User Authentication (Signup / Login)
* Create, Edit, and Delete Blog Posts
* View All Blogs
* User-specific blog management
* Responsive UI
* REST API based communication
* Cloud Deployment

---

## 🏗️ System Architecture

User (Browser) → Frontend (React.js) → Backend (Node.js + Express.js) → Database (MongoDB)

---

## 🛠️ Tech Stack

### Frontend

* React.js
* HTML5
* CSS3
* JavaScript (ES6)

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose ORM

### Tools

* Git & GitHub
* Postman (API Testing)
* GitHub Actions (CI/CD)

### Deployment

* Frontend: Vercel / Netlify
* Backend: Render / Heroku

---

## 📂 Project Structure

blog-website
│
├── client
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   └── App.js
│
├── server
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   └── server.js
│
├── package.json
└── README.md

---

## 🔑 API Endpoints

### Authentication

* POST /api/auth/register → Register User
* POST /api/auth/login → Login User

### Blog Posts

* GET /api/posts → Get all blogs
* GET /api/posts/:id → Get single blog
* POST /api/posts → Create blog
* PUT /api/posts/:id → Update blog
* DELETE /api/posts/:id → Delete blog

---

## ⚙️ Installation & Setup

### 1. Clone Repository

git clone https://github.com/Suraj-Nagaich/blogweb
cd blog-website

### 2. Install Dependencies

Frontend

cd client
npm install

Backend

cd server
npm install

---

### 3. Setup Environment Variables

Create `.env` file in server folder

PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key

---

### 4. Run Project

Start Backend

npm start

Start Frontend

npm start

---

## 🔒 Security

* JWT based authentication
* Password hashing
* Protected routes for blog creation and editing

---

## 🧪 Testing

* API testing using Postman
* Manual testing for authentication and blog operations
* CI/CD integration for automated build and deployment

---

## 🚀 Future Improvements

* Comment system
* Blog categories and tags
* Search functionality
* Image upload support
* User profiles
* Like and share feature

---

## 👨‍💻 Author

Suraj Nagaich

