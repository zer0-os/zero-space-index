import styled from "styled-components";
import { darken } from "polished";

const coinDiameter = 300; // px
const coinThickness = 10; // px
const coinColor = "#63698E";
const edgeFaces = 80;
const edgeFaceLength = (Math.PI * coinDiameter) / edgeFaces;
const turnTime = 8; // seconds

const coinFace = "https://ludu-assets.s3.amazonaws.com/lesson-icons/26/CwSMaokbSgaw3ZX58S7i";

const CoinMain = styled.div.attrs({
  className: "relative transition-all duration-300",
})`
  width: ${coinDiameter}px;
  height: ${coinDiameter}px;
  transform-style: preserve-3d;
  animation: rotate3d ${turnTime}s linear infinite;

  @keyframes rotate3d {
    0% {
      transform: perspective(1000px) rotateY(0deg);
    }

    100% {
      transform: perspective(1000px) rotateY(360deg);
    }
  }
`;

const CoinSide = styled.div.attrs({
  className: "absolute rounded-full overflow-hidden bg-cover",
})`
  width: ${coinDiameter}px;
  height: ${coinDiameter}px;
  background-color: ${coinColor};
  background-image: url(${coinFace});

  &:after {
    content: "";
    position: absolute;
    left: -${coinDiameter / 2}px;
    bottom: 100%;
    display: block;
    height: ${coinDiameter / 1.5}px;
    width: ${coinDiameter * 2}px;
    background: #ffffff;
    opacity: 0.3;
    animation: shine linear ${turnTime / 2}s infinite;
  }

  @keyframes shine {
    0%,
    15% {
      transform: translateY(${coinDiameter * 2}px) rotate(-40deg);
    }
    50% {
      transform: translateY(-${coinDiameter}px) rotate(-40deg);
    }
  }
`;

const CoinFront = styled(CoinSide)`
  transform: translateZ(${coinThickness / 2}px);
`;

const CoinBack = styled(CoinSide)`
  transform: translateZ(-${coinThickness / 2}px) rotateY(180deg);
`;

const CoinEdge = styled.div`
  ${Array(edgeFaces)
    .fill(0)
    .map(
      (e, i) => `
div:nth-child(${i + 1}) {
  height: ${edgeFaceLength}px;
  width: ${coinThickness}px;
  background: ${darken((Math.pow(i + 1 - edgeFaces / 2, 2) / (Math.pow(edgeFaces, 2) / 4)) * 0.7, coinColor)};
  transform: 
    translateY(${coinDiameter / 2 - edgeFaceLength / 2}px)
    translateX(${coinDiameter / 2 - coinThickness / 2}px)
    rotateZ(${(360 / edgeFaces) * (i + 1) + 90}deg)
    translateX(${coinDiameter / 2}px)
    rotateY(90deg);
}
`
    )}
`;

export default function Coin() {
  return (
    <CoinMain>
      <CoinFront />
      <CoinEdge>
        {Array(edgeFaces)
          .fill(0)
          .map((e, i) => (
            <div className="absolute" key={i} />
          ))}
      </CoinEdge>
      <CoinBack />
    </CoinMain>
  );
}
