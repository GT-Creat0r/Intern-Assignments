import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProtectedRoute from "./ProtectedRoute";
import Orders from "../pages/Orders/Orders";
import Dashboard from "../pages/Dashboard/Dashboard.jsx";
import Reservations from "../pages/Reservations/Reservations";
import Menu from "../pages/Menu/Menu";
import Settings from "../pages/Settings/Settings";
import Staffs from "../pages/Staffs/Staffs";
import Customers from "../pages/Customers/Customers";
import Analytics from "../pages/Analytics/Analytics";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      {
        path: "dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
        children: [
          { path: "orders", element: <Orders /> },
          { path: "menu", element: <Menu /> },
          { path: "reservations", element: <Reservations /> },
          { path: "settings", element: <Settings /> },
          { path: "staffs", element: <Staffs /> },
          { path: "customers", element: <Customers /> },
          { path: "analytics", element: <Analytics /> },
        ],
      },
    ],
  },
]);
