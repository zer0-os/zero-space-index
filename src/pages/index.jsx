import Head from "next/head";

import HUD from "components/Layout/HUD";
import Hero from "components/Sections/Hero";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Head>
        <title>ZERO SPACE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HUD>
        <Hero />
      </HUD>
    </div>
  );
}
