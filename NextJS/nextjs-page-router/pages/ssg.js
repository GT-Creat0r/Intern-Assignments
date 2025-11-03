import Layout from "@/layout";

//SSG- Static Site Generation
export async function getStaticProps() {
  const data = { time: new Date().toISOString() };
  return {
    props: { data },
  };
}

const SSGPage = ({ data }) => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Static Site Generation(SSG)</h1>
      <p>Built at : {data.time}</p>
      <p>Refresh the page - time won't change (until rebuild).</p>
    </div>
  );
};

export default SSGPage;

SSGPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
