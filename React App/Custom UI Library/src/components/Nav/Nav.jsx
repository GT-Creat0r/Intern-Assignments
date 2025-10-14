import '../Nav/Nav.css';
const Nav = ({ children, className = "" }) => {
  return <nav className={`nav ${className}`}>{children}</nav>;
};

const NavBrand = ({ children, href = "/", className = "" }) => {
  return (
    <a href={href} className={`nav-brand ${className}`}>
      {children}
    </a>
  );
};

const NavLink = ({ children, href = "#", className = "", active = false }) => {
  const classNames = ["nav-link", className, active ? "nav-link-active" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <a href={href} className={classNames}>
      {children}
    </a>
  );
};

export { Nav, NavBrand, NavLink };
