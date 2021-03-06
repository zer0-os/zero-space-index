import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
import { interpolate } from "@popmotion/popcorn";

const Container = styled(motion.div).attrs({
  className: "w-full max-w-full rounded-md m-auto",
})`
  transform-style: preserve-3d;
  transform: perspective(1000px);
  perspective: 1000px;
`;

const Content = styled(motion.div).attrs({
  className: "overflow-hidden rounded-md w-full h-full relative",
})`
  transform-style: preserve-3d;
  backface-visibility: hidden;
  background: #121b23;
  // background: #12c2e9; /* fallback for old browsers */
  // background: -webkit-linear-gradient(-45deg, #f64f59, #c471ed, #12c2e9); /* Chrome 10-25, Safari 5.1-6 */
  // background: linear-gradient(
  //   -45deg,
  //   #f64f59,
  //   #c471ed,
  //   #12c2e9
  // ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

const Image = styled.div.attrs({
  className: "absolute top-0 left-0 right-0 bottom-0 bg-cover rounded-md",
})`
  transform: translateZ(0);
  background-image: url(https://vyse.in/images/bg.png);
`;

const Gradient = styled(motion.div).attrs({
  className: "absolute top-0 left-0 right-0 bottom-0 transition-all duration-500",
})``;

const tx = 0.01;

const springConfig = {
  stiffness: 150,
  damping: 20,
};

export default function Card({ height = 300, width = 450, title = "", subtitle = "", image = "" }) {
  const [hover, setHover] = useState(false);

  // middle point in 2d space [150, 250]
  const centerPoint = useMemo(() => [width / 2, height / 2], [width, height]);
  const xy = useMotionValue(centerPoint);

  // get rotateY
  const transformX = interpolate([0, width], [width * tx, width * tx * -1]);
  const rotateY = useTransform(xy, ([x]) => transformX(x));

  // get rotateX
  const transformY = interpolate([0, height], [height * tx * -1, height * tx]);
  const rotateX = useTransform(xy, ([, y]) => transformY(y));

  // get our spring values
  const springX = useSpring(rotateX, springConfig);
  const springY = useSpring(rotateY, springConfig);

  // this is a bit cumbersome...
  const gradientOpacity = useTransform(xy, ([, y]) => interpolate([0, height], [0, 0.1])(y));
  const gradientOpacitySpring = useSpring(gradientOpacity, springConfig);

  // how can we animate the degree using a spring too?
  const gradient = useTransform(gradientOpacitySpring, (opacity) => {
    // ideally we could also animate our degree value too...
    let [x, y] = xy.get();
    // whyy is this necessary? otherwise our center point renders the gradient
    // at -70? I'm too tired to do the math
    if (y === centerPoint[1]) {
      y = centerPoint[1] + 1;
    }

    const angle = Math.atan2(y - centerPoint[1], x - centerPoint[0]);
    const degree = ((angle > 0 ? angle : 2 * Math.PI + angle) * 360) / (2 * Math.PI) - 90;
    return `linear-gradient(${degree}deg, rgba(255,255,255,${opacity}), rgba(255,255,255,0) 100%)`;
  });

  function onMouseOver(e) {
    const rect = e.target.getBoundingClientRect();
    xy.set([e.clientX - rect.left, e.clientY - rect.top]);
  }

  function hoverStart() {
    setHover(true);
  }

  function hoverEnd() {
    setHover(false);
  }

  useEffect(() => {
    // if not hovering, reset to
    // our centerpoint.
    if (!hover) {
      xy.set(centerPoint);
    }
  }, [hover, xy, centerPoint]);

  return (
    <Container style={{ width: `100%`, height: `${height}px` }}>
      <Content
        style={{
          scale: 1,
          rotateX: springX,
          rotateY: springY,
        }}
        whileHover={{
          scale: 1 + tx,
        }}
        onHoverStart={hoverStart}
        onHoverEnd={hoverEnd}
        onMouseMove={onMouseOver}
      >
        <Content>
          {/* <Image /> */}
          <div className="p-8">
            <img src={image} className="content-glow-hard m-12 mx-auto w-20 h-20" />
            <div className="text-xl font-bold lg:text-2xl">{title}</div>
            <div className="text-md mt-2 leading-tight">{subtitle}</div>
          </div>
        </Content>
        <Gradient
          style={{
            background: gradient,
          }}
        />
      </Content>
    </Container>
  );
}
