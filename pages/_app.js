import Cards from "@/components/Cards";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Headerad from "@/components/Headerad";
import "@/styles/globals.css";
import Head from "next/head";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Headerad/>
      <Component {...pageProps} />
      <Cards/>
      <Footer />

    </>
  );
}
