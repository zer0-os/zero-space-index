import { useState } from "react";
import { Transition } from "@headlessui/react";
import OutsideClickHandler from "react-outside-click-handler";
import { RiPlayMiniFill } from "react-icons/ri";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

import Section from "components/Layout/Section";

const CardHolder = styled.div`
  filter: drop-shadow(0px 0px 12px rgba(141, 87, 224, 0.6));
`;

export default function FullVideoSection() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <Section maxSize="max-w-5xl" className="">
      <Transition
        show={showVideo}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {(ref) => (
          <div ref={ref} className="fixed z-50 bottom-0 left-0 right-0 top-0">
            <div className="z-50 flex items-center justify-center w-screen h-screen bg-black bg-opacity-75">
              <div className="relative w-full max-w-screen-xl">
                <OutsideClickHandler onOutsideClick={(e) => setShowVideo(false)}>
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/KU7Sj-RHGYo?autoplay=1&mute=0&controls=1&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </OutsideClickHandler>
              </div>
            </div>
          </div>
        )}
      </Transition>
      <Fade bottom cascade>
        <div className="z-50">
          <div className="text-glow text-4xl lg:text-6xl">Welcome to the Future</div>
          {/* <div className="mt-8 px-2 lg:px-28">
        <div className="text-base">They Cyber Renaissance is here, watch the trailer</div>
      </div> */}
          <div className="relative mt-16">
            <CardHolder className="aspect-w-16 aspect-h-9 flex items-center justify-center w-full rounded-3xl overflow-hidden">
              <div className="absolute w-full h-full rounded-3xl overflow-hidden">
                <video src="/assets/video/preview.mp4" autoPlay loop muted className="" />
              </div>
              <div
                className="content-glow-hard bg-gradient flex items-center justify-center mx-auto my-auto w-24 h-24 rounded-full cursor-pointer transform-gpu scale-100 hover:scale-110 transition-all duration-200"
                onClick={(e) => setShowVideo(true)}
              >
                <RiPlayMiniFill className="w-12 h-12 text-white" />
              </div>
            </CardHolder>
          </div>
        </div>
      </Fade>
    </Section>
  );
}
