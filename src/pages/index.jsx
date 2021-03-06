import Head from "next/head";

import Footer from "components/Layout/Footer";

import Hero from "components/Hero";
import FinalCTA from "components/FinalCTA";
import Projects from "components/Projects";
import FeaturedArt from "components/FeaturedArt";
import LiquidArtMarket from "components/LiquidArtMarket";
import Token from "components/Token";
import FullVideoSection from "components/FullVideoSection";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Head>
        <title>Zer0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Hero />
        {/* <FullVideoSection /> */}
        {/* <FeaturedArt />
        <Projects />
        <Token />
        <LiquidArtMarket />
        <FinalCTA /> */}
        {/* <Footer /> */}
      </div>
    </div>
  );
}
