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
        "http://school-management-system-z30p.onrender.com/api/students"
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

    if (!name || !age || !grade) {
      alert("Please fill all fields");
      return;
    }

    try {
      await axios.put(
        `http://school-management-system-z30p.onrender.com/api/students/${id}`,
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
      alert("Error updating student");
    }
  };

  return (
    <div className="container mt-5">

      <div className="row justify-content-center">

        <div className="col-md-6">

          <div className="card shadow p-4">

            <h2 className="text-center mb-4">
              Edit Student
            </h2>

            <form onSubmit={handleSubmit}>

              <div className="mb-3">
                <label className="form-label">
                  Student Name
                </label>

                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Age
                </label>

                <input
                  type="number"
                  className="form-control"
                  value={age}
                  onChange={(e) =>
                    setAge(e.target.value)
                  }
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Grade
                </label>

                <input
                  type="text"
                  className="form-control"
                  value={grade}
                  onChange={(e) =>
                    setGrade(e.target.value)
                  }
                />
              </div>

              <button
                type="submit"
                className="btn btn-warning w-100"
              >
                Update Student
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
}

export default EditStudent;