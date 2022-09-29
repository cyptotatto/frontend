import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import AppBar from "../src/components/layouts/AppBar";
import styled from "styled-components";

declare global {
  interface Window {
    ethereum: any;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <AppBar />
      <ComponentWrap>
        <Component {...pageProps} />
      </ComponentWrap>
    </RecoilRoot>
  );
}

export default MyApp;

const ComponentWrap = styled.div`
  position: relative;
  top: -80px;
  //z-index: -1;
`;
