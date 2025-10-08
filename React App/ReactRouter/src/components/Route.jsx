import { useContext } from "react";
import { RouterContext } from "./RouterProvider";

export const Route = ({ path, component }) => {
  const { path: currentPath } = useContext(RouterContext);
  if (currentPath === path) {
    const Component = component;
    return <Component />;
  }
  return null;
};
