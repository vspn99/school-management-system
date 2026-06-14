from fastapi import FastAPI
from pydantic import BaseModel
from sqlalchemy.orm import Session
from fastapi import Depends
from database import SessionLocal, engine
from models import StudentDB
import models

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

models.Base.metadata.create_all(bind=engine)

class Student(BaseModel):
    name: str
    age: int
    grade: str

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
def home():
    return {"message": "School Management System Backend Running"}

@app.get("/api/students")
def get_students(db: Session = Depends(get_db)):
    return db.query(StudentDB).all()

@app.post("/api/students")
def add_student(
    student: Student,
    db: Session = Depends(get_db)
):
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
def update_student(
    student_id: int,
    student: Student,
    db: Session = Depends(get_db)
):
    db_student = (
        db.query(StudentDB)
        .filter(StudentDB.id == student_id)
        .first()
    )

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
def delete_student(
    student_id: int,
    db: Session = Depends(get_db)
):
    db_student = (
        db.query(StudentDB)
        .filter(StudentDB.id == student_id)
        .first()
    )

    if not db_student:
        return {"message": "Student not found"}

    db.delete(db_student)
    db.commit()

    return {
        "message": "Student deleted successfully"
    }

