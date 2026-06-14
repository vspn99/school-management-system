import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [grade, setGrade] = useState("");

  useEffect(() => {
    loadStudent();
  }, []);

  const loadStudent = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/students"
      );

      const student = response.data.find(
        (s) => s.id === Number(id)
      );

      if (student) {
        setName(student.name);
        setAge(student.age);
        setGrade(student.grade);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `http://127.0.0.1:8000/api/students/${id}`,
        {
          name,
          age: Number(age),
          grade,
        }
      );

      alert("Student Updated Successfully");

      navigate("/students");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Edit Student</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />
        </div>

        <br />

        <div>
          <input
            type="number"
            value={age}
            onChange={(e) =>
              setAge(e.target.value)
            }
          />
        </div>

        <br />

        <div>
          <input
            type="text"
            value={grade}
            onChange={(e) =>
              setGrade(e.target.value)
            }
          />
        </div>

        <br />

        <button type="submit">
          Update Student
        </button>
      </form>
    </div>
  );
}

export default EditStudent;