import Layout from "@/layout";

export async function getStaticProps() {
  const data = { time: new Date().toISOString() };

  return {
    props: { data },
    revalidate: 10, // regenerate page every 10 seconds
  };
}

export default function ISRPage({ data }) {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Incremental Static Regeneration (ISR)</h1>
      <p>Built at: {data.time}</p>
      <p>Refresh within 10s (same time) </p>
      <p>Refresh after 10s (new time)</p>
    </div>
  );
}


ISRPage.getLayout = function getLayout(page) {
return <Layout>{page}</Layout>;
}