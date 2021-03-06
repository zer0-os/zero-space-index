import { useState } from "react";
import styled from "styled-components";
import useInterval from "@use-it/interval";

const TextHolder = styled.div`
  background: linear-gradient(0deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
`;

const CardHolder = styled.div`
  filter: drop-shadow(0px 0px 12px rgba(141, 87, 224, 0.6));

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

export default function SingleCard({ source, userPhoto, author, size = "w-64 h-64", type }) {
  const [price, setPrice] = useState(30 * Math.random());

  useInterval(() => {
    setPrice((price) => Math.min(100, Math.max(0, price + (Math.random() > 0.5 ? 0.01 : -0.01))));
  }, 600 + Math.floor(Math.random() * 300));

  return (
    <CardHolder
      className={`${size} rounded-lg overflow-hidden border-wilder-purple bg-wilder-purple bg-opacity-5 border p-0.5 transition-all duration-150 border-opacity-60`}
    >
      <div
        className="w-full h-full rounded-md overflow-hidden transform-gpu transition-all duration-200"
        style={{
          background: `url('${type === "video" ? "" : source}') #000 no-repeat 0 / cover`,
        }}
      >
        {type === "video" && (
          <div className="absolute z-0 w-full h-full overflow-hidden">
            <video
              className="absolute left-1/2 top-1/2 max-w-full max-h-full"
              style={{ transform: "translate(-50%, -50%)", maxWidth: "unset" }}
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={source} type="video/mp4" />
            </video>
          </div>
        )}
        <TextHolder className="flex items-center justify-between p-3 pt-8">
          <div className="flex items-center justify-start">
            <img src={userPhoto} className="content-glow-hard w-8 h-8 rounded-full" />
            <span className="text-glow-hard ml-2 text-gray-200">{author}</span>
          </div>
          <div className="text-right text-lg">
            <span className="color-white mr-1">{price.toFixed(2)}</span>
            <span className="text-gray-300">WILD</span>
          </div>
        </TextHolder>
      </div>
    </CardHolder>
  );
}
