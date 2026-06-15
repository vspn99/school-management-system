import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const response = await axios.post(
        "https://school-management-system-z30p.onrender.com/api/login",
        {
          email,
          password,
        }
      );

      if (response.data.success) {
        navigate("/dashboard");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Login Failed");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100 bg-light"
    >
      <div
        className="card shadow p-4"
        style={{ width: "400px" }}
      >
        <h2 className="text-center mb-4">
          School Management System
        </h2>

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">
              Email
            </label>

            <input
              type="email"
              className="form-control rounded-3"
              placeholder="Enter Email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              Password
            </label>

            <input
              type="password"
              className="form-control rounded-3"
              placeholder="Enter Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 rounded-3"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;