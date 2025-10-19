// import { RouterProvider } from "./components/RouterProvider";
// import { Route } from "./components/Route";
// import { Link } from "./components/Link";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
import "./App.css";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Outlet />
    </div>

    // // without using react router dom
    // <RouterProvider>
    //   <nav className="navbar">
    //     <Link to="/" className="nav-link">
    //       Home
    //     </Link>
    //     <Link to="/about" className="nav-link">
    //       About
    //     </Link>
    //     <Link to="/contact" className="nav-link">
    //       Contact
    //     </Link>
    //   </nav>

    //   <Route path="/" component={Home} />
    //   <Route path="/about" component={About} />
    //   <Route path="/contact" component={Contact} />
    // </RouterProvider>
  );
};

export default App;
