//SSR- Server Side Rendering

import Layout from "@/layout";

export async function getServerSideProps(params) {
  const data = {
    time: new Date().toISOString(),
  };
  return {
    props: { data },
  };
}

export default function SSRPage({ data }) {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Server Side Rendering (SSR)</h1>
      <p>Rendered at: {data.time}</p>
      <p>Refresh the page - time updates every request.</p>
    </div>
  );
}

SSRPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
