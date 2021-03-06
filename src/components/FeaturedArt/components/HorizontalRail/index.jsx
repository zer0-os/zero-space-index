import styled from "styled-components";

import SingleCard from "../Card";

const heightInTailwind = "h-80";
const widthInTailwind = "w-72";
const sizeInRem = 18; // width only, in rem
const paddingInRem = 1.5;
const numberOfElements = 10;

const MovingContainer = styled.div.attrs({
  className: "flex absolute transform-gpu",
})`
  left: 0rem;
  animation: ${(props) => (props.direction === "left" ? "movesLeft" : "movesRight")} ${(props) => props.turnTime}s
    linear infinite;

  @keyframes movesLeft {
    0% {
      transform: translate3d(0, 0, 0);
    }

    100% {
      transform: translate3d(${`-${(sizeInRem + paddingInRem) * numberOfElements}rem`}, 0, 0);
    }
  }

  @keyframes movesRight {
    0% {
      transform: translate3d(${`-${(sizeInRem + paddingInRem) * numberOfElements}rem`}, 0, 0);
    }

    100% {
      transform: translate3d(0, 0, 0);
    }
  }
`;

export default function HorizontalRail({ direction = "left", id = "1", speed = 40, content = [] }) {
  return (
    <div className="w-full">
      <div className={`relative my-6 ${heightInTailwind}`}>
        <MovingContainer turnTime={speed} direction={direction}>
          {content.map((e, i) => (
            <div key={`first_${i}`} className="relative px-3">
              <SingleCard
                source={e.source}
                userPhoto={e.avatar}
                author={e.author}
                size={`${heightInTailwind} ${widthInTailwind}`}
                type={e.type}
              />
            </div>
          ))}
          {content.map((e, i) => (
            <div key={`second_${i}`} className="relative px-3">
              <SingleCard
                source={e.source}
                userPhoto={e.avatar}
                author={e.author}
                size={`${heightInTailwind} ${widthInTailwind}`}
                type={e.type}
              />
            </div>
          ))}
        </MovingContainer>
      </div>
    </div>
  );
}
