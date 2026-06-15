# 📌 Student Management System

A full-stack Student Management System built using **React (Frontend)** and **FastAPI (Backend)** with REST API integration and cloud deployment.

---

## 🚀 Live Demo

- Frontend: https://school-management-system-amber-five.vercel.app  
- Backend: https://school-management-system-z30p.onrender.com  

---

## 🧠 Tech Stack

### Frontend
- React.js
- React Hooks
- Axios
- React Router DOM
- Bootstrap / CSS

### Backend
- FastAPI
- SQLAlchemy ORM
- Pydantic
- CORS Middleware

### Database
- SQLite (via SQLAlchemy ORM)

---

## ✨ Features

- User Login Authentication
- Add Student
- View Student List
- Edit Student
- Delete Student
- REST API Integration
- Responsive UI
- Fully Deployed Application

---

## 📡 API Endpoints

- POST `/api/login`
- GET `/api/students`
- POST `/api/students`
- PUT `/api/students/{id}`
- DELETE `/api/students/{id}`

---

## ⚙️ Setup Instructions

### Frontend

```bash
cd frontend
npm install
npm run dev
```
### Frontend runs at:
http://localhost:5173

### Backend
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```
##  Backend

Backend runs at:  
http://127.0.0.1:8000  

---

## 🗄️ Database

The project uses **SQLAlchemy ORM** for database management.

Tables are automatically created using:

```python
models.Base.metadata.create_all(bind=engine)
```
---
## 🌍 Deployment

- Frontend hosted on Vercel  
- Backend hosted on Render  

---

## 📁 Project Structure

```text id="structfix2"
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
```
---

## 👨‍💻 Author

**Vishnu Priya**  
B.Tech AI & Data Science  




# School Management System

## Overview

A full-stack School Management System developed using React, FastAPI, SQLite, and SQLAlchemy. The application allows users to manage student records through a responsive web interface.

## Features

* User Login
* Dashboard
* Student List Management
* Add Student
* Edit Student
* Delete Student
* Search Students
* REST API Integration
* SQLite Database Integration

## Tech Stack

### Frontend

* React
* React Router
* Axios
* Bootstrap

### Backend

* FastAPI
* SQLAlchemy
* SQLite
* Pydantic

## API Endpoints

* POST /api/login
* GET /api/students
* POST /api/students
* PUT /api/students/{id}
* DELETE /api/students/{id}

## Test Credentials

Email: [admin@gmail.com](mailto:admin@gmail.com)

Password: admin123

## Setup Instructions

### Backend

1. Create and activate virtual environment
2. Install dependencies
3. Run FastAPI server

```bash
uvicorn main:app --reload
```

### Frontend

1. Install dependencies

```bash
npm install
```

2. Start React application

```bash
npm run dev
```

## Project Structure

```text
SchoolManagementSystem/
│
├── backend/
│   ├── main.py
│   ├── models.py
│   ├── database.py
│
├── frontend/
│
└── README.md
```

## Future Enhancements

* Authentication with JWT
* AI Student Assistant
* Student Performance Analytics
* Teacher Management Module

## Author

Vishnu Priya

