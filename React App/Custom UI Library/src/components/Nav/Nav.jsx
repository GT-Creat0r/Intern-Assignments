import "../Nav/Nav.css";

const Nav = ({ children, className = "", ...props }) => {
  return (
    <nav className={`nav ${className}`} {...props}>
      {children}
    </nav>
  );
};

const NavBrand = ({ children, href = "/", className = "", ...props }) => {
  return (
    <a href={href} className={`nav-brand ${className}`} {...props}>
      {children}
    </a>
  );
};

const NavLink = ({
  children,
  href = "#",
  className = "",
  active = false,
  ...props
}) => {
  const classNames = ["nav-link", className, active ? "nav-link-active" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <a href={href} className={classNames} {...props}>
      {children}
    </a>
  );
};

export { Nav, NavBrand, NavLink };
