import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import Head from "next/head";
import dynamic from "next/dynamic";

import Footer from "./Components/Organisms/Footer/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Portafolio Daniel Torres</title>
        <meta name="description" content="Portafolio Daniel Torres L" />
        <link rel="icon" href="/LogoPequeno.ico" />
      </Head>

      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default dynamic(() => Promise.resolve(MyApp), { ssr: false });
