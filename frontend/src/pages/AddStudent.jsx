import { useState } from "react";
import axios from "axios";

function AddStudent() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [grade, setGrade] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !age || !grade) {
      alert("Please fill all fields");
      return;
    }

    try {
      await axios.post(
        "http://school-management-system-z30p.onrender.com/api/students",
        {
          name,
          age: Number(age),
          grade,
        }
      );

      alert("Student Added Successfully");

      setName("");
      setAge("");
      setGrade("");
    } catch (error) {
      console.error(error);
      alert("Error adding student");
    }
  };

  return (
    <div className="container mt-5">

      <div className="row justify-content-center">

        <div className="col-md-6">

          <div className="card shadow p-4">

            <h2 className="text-center mb-4">
              Add Student
            </h2>

            <form onSubmit={handleSubmit}>

              <div className="mb-3">
                <label className="form-label">
                  Student Name
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Student Name"
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
                  placeholder="Enter Age"
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
                  placeholder="Enter Grade"
                  value={grade}
                  onChange={(e) =>
                    setGrade(e.target.value)
                  }
                />
              </div>

              <button
                type="submit"
                className="btn btn-success w-100"
              >
                Add Student
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AddStudent;