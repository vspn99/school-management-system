📌 Student Management System

A full-stack Student Management System built using React (Frontend) and FastAPI (Backend) with REST API integration and cloud deployment.

🚀 Live Demo
Frontend: https://school-management-system-amber-five.vercel.app
Backend: https://school-management-system-z30p.onrender.com

🧠 Tech Stack
Frontend:
React.js
React Hooks
Axios
React Router DOM
Bootstrap / CSS
Backend:
FastAPI
SQLAlchemy ORM
Pydantic
CORS Middleware
Database:
SQLite (handled via SQLAlchemy ORM)

✨ Features
User Login Authentication
Add Student
View Student List
Edit Student
Delete Student
REST API Integration
Responsive UI
Fully Deployed Application

📡 API Endpoints
Authentication
POST /api/login
Students
GET /api/students
POST /api/students
PUT /api/students/{id}
DELETE /api/students/{id}

🗄️ Database
The project uses SQLAlchemy ORM for database management.
Tables are automatically created using:
models.Base.metadata.create_all(bind=engine)
No manual SQL scripts are required.

⚙️ Setup Instructions
Backend
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
Frontend
cd frontend
npm install
npm run dev

🌍 Deployment
Frontend hosted on Vercel
Backend hosted on Render

📁 Project Structure
school-management-system/
│
├── frontend/
│   ├── src/
│   └── pages/
│
├── backend/
│   ├── main.py
│   ├── models.py
│   ├── database.py
│
└── README.md

👨‍💻 Author
Vishnu Priya
B.Tech AI & Data Science

