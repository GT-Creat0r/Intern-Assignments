import LocaleSwitcher from "@/components/LocaleSwitcher";
import Layout from "@/layout";
// import { useTranslations } from "next-intl";
import Link from "next/link";

const Home = () => {
  // const t = useTranslations("home");
  return (
    <div>
      {/* <LocaleSwitcher /> */}

      <nav style={{ padding: "20px", display: "flex", gap: "10px" }}>
        <Link href="/ssg">SSG</Link>
        <Link href="/ssr">SSR</Link>
        <Link href="/isr">ISR</Link>
      </nav>

      {/* <h1>{t("title")}</h1>
      <p>{t("description")}</p>
      <Link href="/about">{t("aboutLink")}</Link> */}
    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// export async function getStaticProps({ locale }) {
//   return {
//     props: {
//       messages: (await import(`../messages/${locale}.json`)).default,
//     },
//   };
// }
