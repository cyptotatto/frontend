import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import AppBar from "../src/components/layouts/AppBar";

declare global {
  interface Window {
    ethereum: any;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <AppBar />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
