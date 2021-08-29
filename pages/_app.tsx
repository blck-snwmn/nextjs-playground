import "../styles/globals.css";
import { Box, ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Box>AAA</Box>
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
