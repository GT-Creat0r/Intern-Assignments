import Link from "next/link";

const BlogList=()=> {
  const posts = [
    { id: 1, title: "Getting Started with Next.js" },
    { id: 2, title: "Understanding Dynamic Routing" },
  ];

  return (
    <div style={{padding:'20px'}}>
      <h1>Blog List</h1>
      <ol>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default BlogList;

