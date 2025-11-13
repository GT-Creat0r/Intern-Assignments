export const revalidate = 10; // regenerate every 10s

const ISRPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const comments = await res.json();
  const time = new Date().toLocaleTimeString();

  return (
    <div>
      <h1>ISR</h1>
      <p>Rendered at: {time}</p>

      <ol style={{ padding: "32px" }}>
        {comments.slice(0, 5).map((c) => (
          <li key={c.id}>{c.name}</li>
        ))}
      </ol>
    </div>
  );
};
export default ISRPage;
