import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100 bg-light"
    >
      <div
        className="card shadow p-4"
        style={{ width: "400px" }}
      >
        <h2
            className="text-center fw-bold mb-4"
        >
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
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              Password
            </label>

            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
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