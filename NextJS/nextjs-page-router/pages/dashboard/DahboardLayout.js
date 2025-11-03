import Link from "next/link";

const DahboardLayout = ({ children }) => {
  return (
    <div>
      <nav
        style={{
          padding: "12px",
          display: "flex",
          gap: "8px",
          background: "#f1f1f1",
        }}
      >
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/dashboard/settings">Settings</Link>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default DahboardLayout;
