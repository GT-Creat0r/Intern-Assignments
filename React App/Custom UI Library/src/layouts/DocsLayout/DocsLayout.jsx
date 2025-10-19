import { Link, useLocation } from "react-router-dom";
import "../DocsLayout/DocsLayout.css";

const DocsLayout = ({ children, navigation }) => {
  const location = useLocation();
  return (
    <div className="docs-layout">
      <aside className="docs-sidebar">
        <div className="docs-sidebar-header">
          <h2>UI components</h2>
        </div>
        <nav className="docs-nav">
          {navigation.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className={`docs-nav-item ${
                location.pathname === item.path ? "docs-nav-item-active" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="docs-main">{children}</main>
    </div>
  );
};

export default DocsLayout;
