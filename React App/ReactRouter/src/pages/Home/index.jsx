import { Link } from "react-router-dom";
import "../Home/styles.css";
import { useQuery } from "@tanstack/react-query";
import createTodoQueryOptions from "../../queryOptions/createTodoQueryOptions";

const Home = () => {
  const { data } = useQuery(createTodoQueryOptions());
  const todos = JSON.stringify(data?.slice(0, 10));
  // console.log(data)

  return (
    <div className="home-container">
      <h1>Welcome to the Home Page </h1>

      <div className="data-fetched">
        <h3>Data Fetching using React Query </h3>

        {todos}
      </div>

      <button>
        <Link className="link" to="login">
          Go to Login
        </Link>
      </button>
    </div>
  );
};

export default Home;
