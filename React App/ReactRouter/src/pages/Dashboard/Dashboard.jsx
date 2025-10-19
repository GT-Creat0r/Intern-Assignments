import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import "../Dashboard/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="app-layout">
      <Navbar />
      <div className="main-container">
        <Sidebar />
        <main className="content">
          <section>
            <h2>Dashboard</h2>
            <p>Welcome back! Dashboard overview.</p>
          </section>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
