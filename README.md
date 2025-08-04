# 📝 Notes App – MERN Stack

A full-stack **Note Taking Application** built using the **MERN** (MongoDB, Express, React, Node.js) stack. Users can sign up, log in, and manage their notes with real-time CRUD operations using JWT-based authentication.

---

## 🚀 Features

- User authentication (Signup/Login) using **JWT**
- Create, Read, Update, and Delete (CRUD) Notes
- Protected routes (client and server side)
- Alert system for user feedback
- Token-based authorization
- Responsive UI using React and Bootstrap

---

## 🛠️ Technologies Used

### Frontend:
- React.js (with Hooks)
- React Router DOM
- Bootstrap

### Backend:
- Node.js
- Express.js
- MongoDB & Mongoose
- JWT for Authentication
- Bcrypt for Password Hashing

---

## 🧩 Folder Structure

notebook/
├── Backend/
│ ├── Routes/
│ │ ├── auth.js
│ │ └── notes.js
│ ├── Schemas/
│ │ ├── User.js
│ │ └── Note.js
│ ├── middleware/
│ │ └── fetchUser.js
│ ├── database.js
│ ├── index.js
│ ├── package.json
│ └── package-lock.json
│
├── src/
│ ├── Components/
│ │ ├── About.js
│ │ ├── Addnote.js
│ │ ├── Alert.js
│ │ ├── Home.js
│ │ ├── Login.js
│ │ ├── Navbar.js
│ │ ├── Notedem.js
│ │ ├── Noteitem.js
│ │ ├── Notes.js
│ │ ├── ProtectedRoute.js
│ │ └── Signup.js
│ ├── context/
│ │ └── notes/
│ │ ├── NoteContext.js
│ │ └── NoteState.js
│ ├── App.js
│ ├── App.css
│ ├── index.js
│ └── index.css
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md



---

## ⚙️ How to Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/krishnasairayavaram/Notes.git
cd Notes


cd Backend
npm install
# Make sure MongoDB is running locally or set MONGO_URI in database.js
node index.js


cd ..
npm install
npm start


npm run both



🔐 API Endpoints (JWT Protected)
Auth (/api/auth)
POST /CreateUser – Register a new user

POST /login – Log in existing user

POST /getUser – Get authenticated user info

Notes (/api/notes)
GET /fetchNotes – Fetch user’s notes

POST /addNote – Add new note

PUT /updateNote/:id – Update a note

DELETE /deleteNote/:id – Delete a note


 Dependencies
Frontend: React, React Router DOM, Bootstrap

Backend: Express, Mongoose, JWT, Bcrypt, CORS

Dev Tools: Nodemon, Concurrently