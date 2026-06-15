# School Management System

## Overview

A full-stack School Management System developed using React, FastAPI, SQLite, and SQLAlchemy. The application allows users to manage student records through a responsive web interface.

## 🚀 Live Demo

- Frontend: https://school-management-system-amber-five.vercel.app  
- Backend: https://school-management-system-z30p.onrender.com  


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

