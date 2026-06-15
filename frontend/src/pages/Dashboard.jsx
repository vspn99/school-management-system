import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Dashboard() {
  const [studentCount, setStudentCount] = useState(0);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get(
        "https://school-management-system-z30p.onrender.com/api/students"
      );

      setStudentCount(response.data.length);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h1
  className="text-center mb-5"
  style={{
    fontWeight: "500",
    fontSize: "2.8rem"
  }}
>
  School Management System
</h1>

      <div className="row justify-content-center">

        <div className="col-md-4 mb-4">
          <div className="card shadow text-center p-4">
            <h4>Total Students</h4>

            <h1
              className="text-primary fw-bold"
              style={{ fontSize: "4rem" }}
            >
              {studentCount}
            </h1>

            <p className="text-muted">
              Students currently registered
            </p>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow text-center p-4">
            <h4>Manage Students</h4>

            <h1>📚</h1>

            <p className="text-muted">
              View, edit and delete students
            </p>

            <Link
              to="/students"
              className="btn btn-primary"
            >
              Open
            </Link>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow text-center p-4">
            <h4>Add Student</h4>

            <h1>➕</h1>

            <p className="text-muted">
              Register a new student
            </p>

            <Link
              to="/add-student"
              className="btn btn-success"
            >
              Add Student
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;