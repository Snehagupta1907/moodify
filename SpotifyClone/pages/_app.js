import { useState } from "react";
import Head from "next/head";
import Header from "../components/header.js";
import Sidebar from "../components/sidebar.js";
import "../styles/globals.css";
import { WagmiConfig, createClient } from "wagmi";
import {
  avalanche,
  bsc,
  mainnet,
  localhost,
  polygonMumbai,
} from "@wagmi/chains";
import {
  ConnectKitProvider,
  ConnectKitButton,
  getDefaultClient,
} from "connectkit";
import DataContextProvider from "../utils/context.js";
const alchemyId = "iSoLFoQDND_y0a4IOLotRoJ-ZPy2r5it";
const chains = [avalanche, bsc, mainnet, localhost, polygonMumbai];
const client = createClient(
  getDefaultClient({
    appName: "MOODI-FY",
    alchemyId,
    chains: chains,
  })
);

function MyApp({ Component, pageProps }) {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <Head>
        <title>Moodi-FY</title>
        <meta name="description" content="Moodi-FY" />
        <link
          rel="icon"
          href="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/800px-Spotify_logo_without_text.svg.png"
        />
      </Head>
      <WagmiConfig client={client}>
        <ConnectKitProvider>
          <DataContextProvider>
            <div className="bg-main-gray min-h-screen text-gray-300">
              <Header setShowSidebar={setShowSidebar} />
              <Sidebar
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
              />
              <main>
                <Component {...pageProps} />
              </main>
            </div>
          </DataContextProvider>
        </ConnectKitProvider>
      </WagmiConfig>
    </>
  );
}

export default MyApp;
