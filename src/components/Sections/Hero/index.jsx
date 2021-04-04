import { useState, useEffect } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { isMobile } from "react-device-detect";

import LinkButton from "components/LinkButton";

const HeroPage = styled.div`
  background: #111116 no-repeat center center / cover;

  &::after {
    position: absolute;
    top: auto;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 20%;
    content: "";
    background: linear-gradient(180deg, rgba(17, 17, 22, 0), #111116 100%);
  }
`;

export default function Hero() {
  return (
    <HeroPage className="min-h-full">
      <div className="absolute z-0 w-full h-full opacity-60 overflow-hidden">
        <video
          className="absolute left-1/2 top-1/2 min-w-full max-w-none min-h-full"
          style={{ transform: "translate(-50%, -50%)" }}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/assets/video/bg_loop.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute flex items-center justify-center w-full h-full">
        <Fade bottom cascade>
          <div className="mb-24 px-4 text-center text-white md:mb-48">
            <div>
              <div className="text-shadow-sp font-special text-4xl font-medium md:text-5xl xl:text-6xl">
                Build Your World
              </div>
              {/* <div className="text-xl md:text-2xl xl:text-3xl">of the</div> */}
              {/* <div className="text-glow font-special text-6xl md:text-7xl xl:text-8xl">of the Future</div> */}
            </div>
            <div className="mt-6 px-10">
              <div className="text-shadow-sp max-w-lg text-lg xl:text-2xl">
                Zero is a decentralized metaverse that enables you to share, trade, and create with your community.
              </div>
            </div>
            <div className="flex justify-center mt-12 md:mt-24">
              {/* <LinkButton className="text-glow box-glow cursor-pointer" size="large" onClick={(e) => setShowVideo(true)}>
                Watch Trailer
            </LinkButton> */}
              <LinkButton className="" href="https://www.zine.live/subscribe/" size="large">
                Join Waitlist
              </LinkButton>
            </div>
          </div>
        </Fade>
      </div>
    </HeroPage>
  );
}
