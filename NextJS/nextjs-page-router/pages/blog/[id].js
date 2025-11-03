import { useRouter } from "next/router";

const Blog = () => {

  const router = useRouter();
  const { id } = router.query;
  console.log(router);

  return (
    <div>
      <h1>Dynamic Routing for id:{id}</h1>
    </div>
  );
};

export default Blog;
