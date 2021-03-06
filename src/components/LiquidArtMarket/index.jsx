import Fade from "react-reveal/Fade";

import Section from "components/Layout/Section";
import LinkButton from "components/LinkButton";

const SingleSection = ({ icon, title, text }) => {
  return (
    <div className="p-4">
      <div className="flex items-center justify-center mx-auto text-wilder-purple rounded-md">
        <img src={icon} className="content-glow-hard m-4 w-20 h-20" />
      </div>
      {/* TODO: Gradient Image */}
      <div className="mt-5">
        <h5 className="text-white text-2xl font-medium">{title}</h5>
        <p className="mt-2 text-gray-300 text-lg leading-6">{text}</p>
      </div>
    </div>
  );
};

export default function LiquidArtMarket() {
  return (
    <Section maxSize="max-w-screen-xl">
      <Fade bottom cascade>
        <div>
          <div className="text-glow text-4xl lg:text-6xl">Liquid Art Market</div>
          {/* <div className="text-glow font-special text-4xl lg:text-7xl">Owned by Artists</div> */}
          <div className="mt-8 px-2 lg:px-28">
            <div className="text-lg">A place to use Wilder Tokens. Buy, Sell &amp; Trade NFTs faster than light.</div>
          </div>
          <div className="grid mt-16 md:grid-cols-2 lg:grid-cols-3">
            <SingleSection title="Mint" text="Mint NFTs directly from your wallet" icon="/assets/icons/create.svg" />
            <SingleSection
              title="Fractional Ownership"
              text="Ability to own a portion of your favorite artworks"
              icon="/assets/icons/part.svg"
            />
            <SingleSection
              title="Liquid Market"
              text="Liquidate your art at any time"
              icon="/assets/icons/1092344.svg"
            />
            <SingleSection
              title="Collect"
              text="Buy rare artworks and build your collection"
              icon="/assets/icons/1974070.svg"
            />
            <SingleSection
              title="Trade"
              text="Trade tokens between digital artworks in real time"
              icon="/assets/icons/world.svg"
            />
            <SingleSection title="Sell" text="Easily sell art on the marketplace" icon="/assets/icons/994430.svg" />
          </div>
          <div className="mt-16">
            <LinkButton
              className="text-glow box-glow"
              href="https://zine.wilderworld.com/subscribe/"
              size="large"
              style="2"
            >
              Start Trading
            </LinkButton>
          </div>
        </div>
      </Fade>
    </Section>
  );
}
