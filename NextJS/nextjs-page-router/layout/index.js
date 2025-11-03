import Link from "next/link";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <nav
        style={{
          padding: "12px",
          display: "flex",
          gap: "12px",
          background: "#f1f1f1",
        }}
      >
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>

      <main style={{ padding: "24px" }}>{children}</main>

      <footer
        style={{ textAlign: "center", padding: "12px", background: "#f9f9f9" }}
      >
        2024 My Next.js App
      </footer>
    </div>
  );
};

export default Layout;
