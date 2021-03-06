import { useState } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

import Section from "components/Layout/Section";
import LinkButton from "components/LinkButton";
import Toggle from "components/Toggle";

import Coin from "./components/Coin";

const SingleBox = styled.div.attrs({
  // className: "p-1",
})`
  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    border-radius: inherit;
    background: linear-gradient(-45deg, #706393, #587ae2, #7ac3f4, #9e87c9, #ab6cba);
  }
`;

const SingleItem = ({ title, subtitle }) => {
  return (
    <SingleBox className="relative my-4 p-0.5 rounded-md">
      <div
        className="hover:box-glow px-6 py-4 text-left border-2 border-wilder-purple border-opacity-20 hover:border-opacity-40 rounded-md transition-all duration-200"
        style={{ background: "#121b23" }}
      >
        <div className="text-xl lg:text-2xl">{title}</div>
        <div className="lg:text-md mb-1 mt-2 text-sm font-light leading-tight">{subtitle}</div>
      </div>
    </SingleBox>
  );
};

export default function Intro() {
  const [checked, setChecked] = useState(false);

  return (
    <Section name="tokens">
      <Fade bottom cascade>
        <div>
          <div className="text-glow text-4xl lg:text-6xl">Wilder World Tokens</div>
          <div className="mt-8 px-2 lg:px-28">
            {/* <div className="mb-8 text-lg">TBD</div> */}
            <Toggle checked={checked} setChecked={setChecked} />
          </div>
          <div className="mt-16">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="flex col-span-2 items-center justify-center p-4">
                {/* <iframe
                  id={checked ? "c793fb18-591d-4e50-8ea8-660cb5bebd26" : "9ed8acea-d858-44f7-9769-8c85c267750d"}
                  src={
                    checked
                      ? "https://www.vectary.com/viewer/v1/?model=c793fb18-591d-4e50-8ea8-660cb5bebd26&env=studio3"
                      : "https://www.vectary.com/viewer/v1/?model=9ed8acea-d858-44f7-9769-8c85c267750d&env=studio3"
                  }
                  frameBorder="0"
                  className="w-full h-full rounded-md"
                ></iframe> */}
                {/* <Coin /> */}
              </div>
              {!checked && (
                <div className="col-span-3 py-4 lg:pl-8">
                  <SingleItem title="DAO Token" subtitle="Owned by the community, governs the revolution" />
                  <SingleItem
                    title="Incentives Focused"
                    subtitle="Earn WILD for buying &amp; selling on Wilder World, accomplishing tasks, and more"
                  />
                  <SingleItem
                    title="Controls Capital Reserves"
                    subtitle="Governs LOOT token reserves, supply ratio and bonding curve metrics"
                  />
                </div>
              )}
              {checked && (
                <div className="col-span-3 py-4 lg:pl-8">
                  <SingleItem
                    title="Art &amp; ETH Backed"
                    subtitle="LOOT token is backed by Ethereum and unique artworks created by guild members"
                  />
                  <SingleItem
                    title="Growth Oriented"
                    subtitle="Complete ecosystem alignment to grow activity, members and token adoption"
                  />
                  <SingleItem
                    title="Dynamic Token"
                    subtitle="Fully decentralized, completely liquid, bonding curve pricing model"
                  />
                </div>
              )}
            </div>
          </div>
          <div className="mt-16">
            <LinkButton
              className="text-glow box-glow"
              href="https://zine.wilderworld.com/subscribe/"
              size="large"
              style="2"
            >
              Buy WILD
            </LinkButton>
            <LinkButton
              className="text-glow box-glow"
              href="https://zine.wilderworld.com/subscribe/"
              size="large"
              style="2"
            >
              Buy LOOT
            </LinkButton>
          </div>
        </div>
      </Fade>
    </Section>
  );
}
