import DahboardLayout from "./DahboardLayout";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to Dashboard.</p>
    </div>
  );
};

Dashboard.getLayout = function getLayout(page) {
  return <DahboardLayout>{page}</DahboardLayout>;
};

export default Dashboard;
