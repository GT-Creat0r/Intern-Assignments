import React from "react";

const SSGPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  const time = new Date().toLocaleTimeString();

  return (
    <div>
      <h1>Static Site Generation</h1>
      <p>Rendered at: {time}</p>

      <ol style={{ padding: "32px" }}>
        {posts.slice(0, 5).map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default SSGPage;
