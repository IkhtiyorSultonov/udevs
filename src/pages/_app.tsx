import "@/styles/globals.css";
import'animate.css'
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Client, HydrationProvider } from "react-hydration-provider";
import NextNProgress from "nextjs-progressbar";
import { theme } from "@/config/theme";
import { I18nextProvider } from "react-i18next";
import i18n from '../i18n/index'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HydrationProvider >
      <I18nextProvider i18n={i18n}>
        <ChakraProvider theme={theme}>
         <Client>
         <NextNProgress options={{ showSpinner: false }} />
         <Component {...pageProps} />
         </Client>
        </ChakraProvider>
      </I18nextProvider>
    </HydrationProvider>
  );
}
