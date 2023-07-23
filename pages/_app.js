import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import 'katex/dist/katex.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
