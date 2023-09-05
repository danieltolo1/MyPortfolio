import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import "semantic-ui-css/semantic.min.css";

import { ToastContainer } from "react-toastify";
import Head from "next/head";
import dynamic from "next/dynamic";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Portafolio Daniel Torres</title>
        <meta name="description" content="Portafolio Daniel Torres L" />
        <link rel="icon" href="/LogoPequeno.ico" />
      </Head>

      <Component {...pageProps} />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={true}
        pauseOnHover={true}
        theme="dark"
      />
    </>
  );
}

export default dynamic(() => Promise.resolve(MyApp), { ssr: false });
