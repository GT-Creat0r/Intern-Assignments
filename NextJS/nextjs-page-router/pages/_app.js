import "@/styles/globals.css";
// import { NextIntlClientProvider } from "next-intl";

//its like the outlet in react router; if we add some elements in the return before the <component>, those element will be shown in every page and below them the components shows up.
//in page router, it acts as a global layout wrapper for all the pages.

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    // <NextIntlClientProvider messages={pageProps.messages || {}}>
    <Component {...pageProps} />
    // </NextIntlClientProvider>
  );
}
