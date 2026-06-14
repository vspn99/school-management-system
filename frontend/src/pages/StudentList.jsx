import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/students"
      );

      setStudents(response.data);
    } catch (error) {
      console.error("API Error:", error);
    }
  };
  const deleteStudent = async (id) => {
  try {
    await axios.delete(
      `http://127.0.0.1:8000/api/students/${id}`
    );

    fetchStudents();
  } catch (error) {
    console.error(error);
  }
};

  return (
    <div style={{ padding: "20px" }}>
      <h1>Student List</h1>

      <br />

      <Link to="/add-student">
        <button>Add Student</button>
      </Link>

      <br />
      <br />

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Grade</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.grade}</td>

              <td>
                <Link to={`/edit-student/${student.id}`}>
  <button>Edit</button>
</Link>

                {" "}

                <button
  onClick={() => deleteStudent(student.id)}
>
  Delete
</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;