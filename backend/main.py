from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from sqlalchemy.orm import Session

from database import SessionLocal, engine
from models import StudentDB
import models


models.Base.metadata.create_all(bind=engine)

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # for deployment (you can restrict later)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


class Student(BaseModel):
    name: str
    age: int
    grade: str

class LoginRequest(BaseModel):
    email: str
    password: str



@app.get("/")
def home():
    return {"message": "School Management System Backend Running"}


@app.post("/api/login")
def login(data: LoginRequest):

    if data.email == "admin@gmail.com" and data.password == "admin123":
        return {
            "success": True,
            "message": "Login Successful"
        }

    return {
        "success": False,
        "message": "Invalid Credentials"
    }


@app.get("/api/students")
def get_students(db: Session = Depends(get_db)):
    return db.query(StudentDB).all()


@app.post("/api/students")
def add_student(student: Student, db: Session = Depends(get_db)):

    new_student = StudentDB(
        name=student.name,
        age=student.age,
        grade=student.grade
    )

    db.add(new_student)
    db.commit()
    db.refresh(new_student)

    return {
        "message": "Student added successfully",
        "student": new_student
    }


@app.put("/api/students/{student_id}")
def update_student(student_id: int, student: Student, db: Session = Depends(get_db)):

    db_student = db.query(StudentDB).filter(StudentDB.id == student_id).first()

    if not db_student:
        return {"message": "Student not found"}

    db_student.name = student.name
    db_student.age = student.age
    db_student.grade = student.grade

    db.commit()

    return {
        "message": "Student updated successfully",
        "student": db_student
    }


@app.delete("/api/students/{student_id}")
def delete_student(student_id: int, db: Session = Depends(get_db)):

    db_student = db.query(StudentDB).filter(StudentDB.id == student_id).first()

    if not db_student:
        return {"message": "Student not found"}

    db.delete(db_student)
    db.commit()

    return {
        "message": "Student deleted successfully"
    }