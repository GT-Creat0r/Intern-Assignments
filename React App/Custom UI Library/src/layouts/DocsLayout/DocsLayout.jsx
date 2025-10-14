import '../DocsLayout/DocsLayout.css'

const DocsLayout = ({ children, navigation, currentPage, onNavigate }) => {
  return (
    <div className="docs-layout">
      <aside className="docs-sidebar">
        <div className="docs-sidebar-header">
          <h2>UI components</h2>
        </div>
        <nav className="docs-nav">
          {navigation.map((item) => (
            <button
              key={item.id}
              className={`docs-nav-item ${
                currentPage === item.id ? "docs-nav-item-active" : ""
              }`}
              onClick={() => onNavigate(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </aside>
      <main className="docs-main">{children}</main>
    </div>
  );
};

export default DocsLayout;
