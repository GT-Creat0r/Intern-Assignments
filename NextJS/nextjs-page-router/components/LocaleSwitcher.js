import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const LocaleSwitcher = () => {
  const { locales, locale, asPath } = useRouter();

  return (
    <div>
      {locales.map((loc) => (
        <Link key={loc} href={asPath} locale={loc}>
          {loc === locale ? <b>{loc.toUpperCase()}</b> : loc.toUpperCase()}
        </Link>
      ))}
    </div>
  );
};

export default LocaleSwitcher;
