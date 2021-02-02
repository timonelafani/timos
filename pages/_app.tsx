import Head from "next/head";
import { ThemeProvider } from "theme-ui";
import theme from "../utils/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Timo's Guest House</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="/fonts/style.css" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
