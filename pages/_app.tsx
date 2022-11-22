import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import styled from "styled-components";
import {
  WagmiConfig,
  createClient,
  defaultChains,
  configureChains,
} from "wagmi";

import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { InjectedConnector } from "wagmi/connectors/injected";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import dynamic from "next/dynamic";

const { chains, provider, webSocketProvider } = configureChains(defaultChains, [
  alchemyProvider({
    apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY
      ? process.env.NEXT_PUBLIC_ALCHEMY_API_KEY
      : "default",
  }),
  publicProvider(),
]);

const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    // new CoinbaseWalletConnector({
    //   chains,
    //   options: {
    //     appName: "wagmi",
    //   },
    // }),
    // new WalletConnectConnector({
    //   chains,
    //   options: {
    //     qrcode: true,
    //   },
    // }),
    // new InjectedConnector({
    //   chains,
    //   options: {
    //     name: "Injected",
    //     shimDisconnect: true,
    //   },
    // }),
  ],
  provider,
  webSocketProvider,
});

const AppBar = dynamic(
  () => import("../src/components/layouts/template/AppBar"),
  { ssr: false }
);

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
