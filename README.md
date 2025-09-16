# 👥 User Management Dashboard (FullStack)

A full-stack **User Management Dashboard** built with **React (Vite + TailwindCSS)** and **Node.js (Express + SQLite)**.  
This app supports **CRUD operations** (Create, Read, Update, Delete), with a clean UI and REST API integration.

---

## ✨ Features

### Frontend

- 📋 View all users in **cards/grid format**
- 🔍 **Search** users by name or email
- ➕ Add new users
- ✏️ Edit existing users
- 🗑️ Delete users
- 🎨 Responsive UI using **TailwindCSS**
- ⚡ Built with **Vite** for fast development

### Backend

- 🚀 REST API with **Express.js**
- 🗄️ SQLite database (`users.db`) with schema:
  - `id` (PK, auto increment)
  - `name`, `email`, `phone`, `company`, `street`, `city`, `zipcode`, `lat`, `lng`
- 🔒 Validation (name & email required, unique email)
- 🌐 CORS enabled (for frontend integration)
- 🔧 Nodemon for auto-restart in dev mode

---

## 🛠️ Tech Stack

- **Frontend:** React, Vite, TailwindCSS, Axios, React Router
- **Backend:** Node.js, Express.js, SQLite, CORS, Nodemon
- **Tools:** Postman (API testing), GitHub for version control

---

## Backend Configuration

This project's backend has been configured with hardcoded values for simplicity and to work across local and online environments without requiring `.env` files.

- **Port:** The backend server runs on port `8080`.
- **Database:** The SQLite database file is named `users.db`.
- **CORS (Cross-Origin Resource Sharing):** The backend is configured to accept requests from:
  - `http://localhost:5173` (for local frontend development)
  - `https://your-online-frontend.com` (for your deployed online frontend)

**Important:** If your online frontend is hosted at a different URL, you **must** update `https://your-online-frontend.com` in `backend/server.js` to your actual online frontend URL.

## Project Structure

This project is organized into two main directories: `backend` and `frontend`.

```
C:\Users\sande\OneDrive\Desktop\user-management-dashboard\
├───backend\
│   ├───.env.example
│   ├───.gitignore
│   ├───database.js
│   ├───package-lock.json
│   ├───package.json
│   ├───seed.js
│   ├───server.js
│   ├───users.db
│   ├───node_modules\...
│   └───routes\
│       └───users.js
└───frontend\
    ├───.gitignore
    ├───eslint.config.js
    ├───index.html
    ├───package-lock.json
    ├───package.json
    ├───postcss.config.js
    ├───README.md
    ├───tailwind.config.js
    ├───vite.config.js
    ├───node_modules\...
    ├───public\
    │   └───vite.svg
    └───src\
        ├───App.css
        ├───App.jsx
        ├───index.css
        ├───main.jsx
        ├───api\
        │   └───userService.js
        ├───assets\
        │   └───react.svg
        ├───components\
        │   ├───Header.jsx
        │   ├───UserCard.jsx
        │   └───UserDetails.jsx
        └───pages\
            ├───UserForm.jsx
            └───UserList.jsx
```

---

## ⚙️ Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/user-management-dashboard.git
cd user-management-dashboard
```

### 2️⃣ Backend Setup

cd backend
npm install
cp .env.example .env # configure PORT and DB file if needed
npm run dev # starts server with nodemon

Server will run at: http://localhost:8080

### 3️⃣ Frontend Setup

cd frontend
npm install
npm run dev

Frontend will run at: http://localhost:5173

### 🧪 API Endpoints

Method Endpoint Description
GET /api/users Get all users
GET /api/users/:id Get single user
POST /api/users Create new user
PUT /api/users/:id Update user
DELETE /api/users/:id Delete user

Example: Create User

POST /api/users
Content-Type: application/json

{
"name": "Alice Johnson",
"email": "alice@example.com",
"phone": "123-456-7890",
"company": "TechCorp"
}
