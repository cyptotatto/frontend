import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import AppBar from "../src/components/layouts/AppBar";
import styled from "styled-components";
import {
  createClient,
  configureChains,
  defaultChains,
  WagmiConfig,
} from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { InjectedConnector } from "wagmi/connectors/injected";

const { chains, provider, webSocketProvider } = configureChains(defaultChains, [
  alchemyProvider({
    apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY
      ? process.env.NEXT_PUBLIC_ALCHEMY_API_KEY
      : "default",
  }),
  publicProvider(),
]);

const client = createClient({
  provider,
  connectors: [new InjectedConnector({ chains })],
  webSocketProvider,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <WagmiConfig client={client}>
        <AppBarWrap>
          <AppBar />
        </AppBarWrap>
        <ComponentWrap>
          <Component {...pageProps} />
        </ComponentWrap>
      </WagmiConfig>
    </RecoilRoot>
  );
}

export default MyApp;

const AppBarWrap = styled.div`
  position: relative;
  z-index: 15;
`;

const ComponentWrap = styled.div`
  position: relative;
  top: -80px;
`;
