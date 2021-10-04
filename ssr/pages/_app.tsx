import '../styles/globals.css';
import type { AppProps } from 'next/app';

import Head from 'next/head';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <meta name="description" content="Official Chris Airline Website" />
        <title>크리스 항공사</title>
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
