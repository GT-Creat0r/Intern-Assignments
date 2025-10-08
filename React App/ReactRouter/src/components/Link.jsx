import { useContext } from "react";
import { RouterContext } from "./RouterProvider";

export const Link = ({ to, children, className }) => {
  const { navigate } = useContext(RouterContext);

  const handleClick = (e) => {
    e.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};
