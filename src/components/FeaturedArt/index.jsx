import Fade from "react-reveal/Fade";
import Section from "components/Layout/Section";
import LinkButton from "components/LinkButton";

import HorizontalRail from "./components/HorizontalRail";

const rails = [
  [
    {
      author: "@andrei.low",
      avatar: "/assets/art/andrei.low/profile.jpg",
      source: "/assets/art/andrei.low/art.jpg",
      type: "image",
    },
    {
      author: "@arc4g",
      avatar: "/assets/art/arc4g/profile.jpg",
      source: "/assets/art/arc4g/art.mp4",
      type: "video",
    },
    {
      author: "@brellias",
      avatar: "/assets/art/brellias/profile.jpg",
      source: "/assets/art/brellias/art.png",
      type: "image",
    },
    {
      author: "@davanshatry",
      avatar: "/assets/art/davanshatry/profile.jpg",
      source: "/assets/art/davanshatry/art.jpg",
      type: "image",
    },
    {
      author: "@davidariew",
      avatar: "/assets/art/davidariew/profile.jpg",
      source: "/assets/art/davidariew/art.mp4",
      type: "video",
    },
    {
      author: "@devinluquette",
      avatar: "/assets/art/devinluquette/profile.jpg",
      source: "/assets/art/devinluquette/art.mp4",
      type: "video",
    },
    {
      author: "@elizarevfx",
      avatar: "/assets/art/elizarevfx/profile.jpg",
      source: "/assets/art/elizarevfx/art.mp4",
      type: "video",
    },
    {
      author: "@fabenetton",
      avatar: "/assets/art/fabenetton/profile.jpg",
      source: "/assets/art/fabenetton/art.mp4",
      type: "video",
    },
    {
      author: "@falreng",
      avatar: "/assets/art/falreng/profile.jpg",
      source: "/assets/art/falreng/art.png",
      type: "image",
    },
    {
      author: "@reuko__",
      avatar: "/assets/art/reuko__/profile.jpg",
      source: "/assets/art/reuko__/art.mp4",
      type: "video",
    },
  ],
  [
    {
      author: "@hakanyilmaz.tv",
      avatar: "/assets/art/hakanyilmaz.tv/profile.jpg",
      source: "/assets/art/hakanyilmaz.tv/art.mp4",
      type: "video",
    },
    {
      author: "@haydenspilman",
      avatar: "/assets/art/haydenspilman/profile.jpg",
      source: "/assets/art/haydenspilman/art.mp4",
      type: "video",
    },
    {
      author: "@frenerdesign",
      avatar: "/assets/art/frenerdesign/profile.jpg",
      source: "/assets/art/frenerdesign/art.png",
      type: "image",
    },
    {
      author: "@jukamotiondesign",
      avatar: "/assets/art/jukamotiondesign/profile.jpg",
      source: "/assets/art/jukamotiondesign/art.mp4",
      type: "video",
    },
    {
      author: "@marischabecker",
      avatar: "/assets/art/marischabecker/profile.jpg",
      source: "/assets/art/marischabecker/art.jpg",
      type: "image",
    },
    {
      author: "@mr.kalopsia",
      avatar: "/assets/art/mr.kalopsia/profile.jpg",
      source: "/assets/art/mr.kalopsia/art.jpeg",
      type: "image",
    },
    {
      author: "@nullject",
      avatar: "/assets/art/nullject/profile.jpg",
      source: "/assets/art/nullject/art.png",
      type: "image",
    },
    {
      author: "@visualdon",
      avatar: "/assets/art/visualdon/profile.jpg",
      source: "/assets/art/visualdon/art.mp4",
      type: "video",
    },
    {
      author: "@rank.sss",
      avatar: "/assets/art/rank.sss/profile.jpg",
      source: "/assets/art/rank.sss/art.mp4",
      type: "video",
    },
    {
      author: "@vl.graphics",
      avatar: "/assets/art/vl.graphics/profile.jpg",
      source: "/assets/art/vl.graphics/art.mp4",
      type: "video",
    },
  ],
];

export default function Intro() {
  return (
    <Section maxSize="max-w-screen" name="collectors" secondaryClasses="">
      <Fade bottom cascade>
        <div>
          <div className="text-glow text-4xl lg:text-6xl">
            Inspiring{" "}
            <span className="md:hidden">
              <br />
            </span>{" "}
            Digital Artworks
          </div>
          {/* <div className="text-glow font-special text-4xl lg:text-7xl">Owned by Artists</div> */}
          <div className="mt-8 px-2 lg:px-28">
            <div className="text-lg">Start building your collection from the world's best artists.</div>
          </div>
          <div className="mt-16">
            <HorizontalRail direction="left" id="1" speed={120} content={rails[0]} />
            <HorizontalRail direction="right" id="2" speed={120} content={rails[1]} />
            {/* <HorizontalRail direction="left" id="3" speed={30} /> */}
            {/* <HorizontalRail direction="right" id="4" speed={40} /> */}
          </div>
          <div className="mt-16">
            <LinkButton
              className="text-glow box-glow"
              href="https://pn2nq2l5rqu.typeform.com/to/V7uAhWcq"
              size="large"
              style="2"
            >
              Start Collecting
            </LinkButton>
          </div>
        </div>
      </Fade>
    </Section>
  );
}
