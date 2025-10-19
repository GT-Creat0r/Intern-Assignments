import { queryOptions } from "@tanstack/react-query";

const createTodoQueryOptions = () => {
  return queryOptions({ queryKey: ["todos"], queryFn: getTodos });
};

export default createTodoQueryOptions;

const getTodos = async () => {
  // const response =await fetch('https://dummyjson.com/products');
  
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return response.json();
};
