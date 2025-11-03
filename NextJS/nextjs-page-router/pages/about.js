import Layout from "@/layout";
import React from "react";

const about = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is about page.</p>
    </div>
  );
};

export default about;

about.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
