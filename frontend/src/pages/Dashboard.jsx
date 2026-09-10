import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-4xl mx-auto">

        <div className="bg-white rounded-2xl shadow p-8">
          <h1 className="text-3xl font-bold text-slate-900">
            Welcome, {user?.name}
          </h1>

          <p className="text-slate-500 mt-2">
            AI Resume Analyzer Dashboard
          </p>

          <button
            onClick={handleLogout}
            className="mt-6 px-5 py-3 bg-red-600 text-white
            rounded-lg font-semibold hover:bg-red-700"
          >
            Logout
          </button>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;