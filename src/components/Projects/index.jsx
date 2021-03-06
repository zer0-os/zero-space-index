import dynamic from "next/dynamic";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

import Section from "components/Layout/Section";
import LinkButton from "components/LinkButton";

const SingleProject = dynamic(() => import("./custom/SingleProject"), { ssr: false });

const ProjectsContainer = styled(Section)`
  &::before {
    position: absolute;
    bottom: auto;
    right: 0;
    top: 100vh;
    left: -1px;
    z-index: -1;
    width: 100%;
    height: 10%;
    content: "";
    background: linear-gradient(180deg, #111116, rgba(0, 0, 0, 0) 100%);
  }
`;

export default function Projects({}) {
  return (
    <ProjectsContainer maxSize="max-w-4xl" name="artists">
      <Fade bottom cascade>
        <div>
          <div className="text-glow text-3xl lg:text-6xl">Created for Artists</div>
          <div className="text-glow text-3xl lg:text-6xl">Owned by Artists</div>
          <div className="mt-8 px-2 lg:px-28">
            <div className="text-lg">Community-owned, fully decentralized, liquid NFT market and social platform.</div>
          </div>
          <div className="grid gap-8 grid-cols-1 mt-16 md:grid-cols-2">
            <div className="">
              <SingleProject
                title="Sell Digital Art"
                subtitle="Easily mint NFTs directly from your wallet."
                image="/assets/icons/art.svg"
              />
            </div>
            <div className="">
              <SingleProject
                title="No Fees"
                subtitle="No platform fees. Set your own price and parameters."
                image="/assets/icons/2762657.svg"
              />
            </div>
            <div className="">
              <SingleProject
                title="Decentralized"
                subtitle="No centralized oversight or data collection."
                image="/assets/icons/1958738.svg"
              />
            </div>
            <div className="">
              <SingleProject
                title="Community Owned"
                subtitle="Receive ownership in Wilder World via WILD &amp; LOOT."
                image="/assets/icons/2618488.svg"
              />
            </div>
          </div>
          <div className="mt-16">
            <LinkButton
              className="text-glow box-glow"
              href="https://pn2nq2l5rqu.typeform.com/to/kobQHc58"
              size="large"
              style="2"
            >
              Apply Now
            </LinkButton>
          </div>
        </div>
      </Fade>
    </ProjectsContainer>
  );
}
