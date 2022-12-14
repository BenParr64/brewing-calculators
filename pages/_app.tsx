import "../assets/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import { SSRProvider } from "@react-aria/ssr";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>
  );
}

export default MyApp;
