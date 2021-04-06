import "../css/index.css";
import Head from "next/head";
import Layout from "@components/layout";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>MUD Test</title>
        <meta
          name="Description"
          content="Mud Test"
        />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
