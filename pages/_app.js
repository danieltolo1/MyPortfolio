import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import Head from "next/head";
import dynamic from "next/dynamic";

import Header from "./Components/Organisms/Header/Header";
import Footer from "./Components/Organisms/Footer/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />

      <Head>
        <title>Potafolio Daniel Torres</title>
        <meta name="description" content="Portafolio Daniel Torres L" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default dynamic(() => Promise.resolve(MyApp), { ssr: false });
