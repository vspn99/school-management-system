import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>School Management System</h1>

      <br />

      <Link to="/students">
        <button>Manage Students</button>
      </Link>

      <br />
      <br />

      <Link to="/add-student">
        <button>Add Student</button>
      </Link>
    </div>
  );
}

export default Dashboard;