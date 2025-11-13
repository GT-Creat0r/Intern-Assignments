const SSRPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const users = await res.json();
    const time = new Date().toLocaleTimeString();


  return (
    <main>
      <h1>Server-Side Rendering</h1>
      <p>Rendered at: {time}</p>

      <ol style={{ padding: "24px" }}>
        {users.slice(0, 3).map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> — {user.email}
          </li>
        ))}
      </ol>
    </main>
  );
};
export default SSRPage;

export const dynamic = "force-dynamic"; // ensures SSR on each request
