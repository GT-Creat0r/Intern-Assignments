import { useTranslations } from "next-intl";
import Link from "next/link";

const Home = () => {
  const t =useTranslations("HomePage")
  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('content')}</p>
      <nav style={{ padding: "16px", display: "flex", gap: "16px", background:"#f1f1f1"}}>
        <Link href="/ssg">SSG</Link>
        <Link href="/ssr">SSR</Link>
        <Link href="/isr">IRG</Link>
      </nav>
    </div>
  );
};

export default Home;
