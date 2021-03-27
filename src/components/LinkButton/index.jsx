import styled from "styled-components";

const ButtonEffect = styled.div`
  &:after {
    transition: all 100ms ease-out;
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    transform: skewX(-20deg) scaleX(0);
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.45);
    border: 1px solid transparent;
    z-index: 1;
  }

  &:hover {
    &:after {
      animation: swoosh 0.7s ease-in;
    }
  }

  @keyframes swoosh {
    0% {
      transform-origin: left center;
    }

    20% {
      transform: skewX(-20deg) scaleX(1);
      transform-origin: left center;
    }

    21% {
      transform-origin: right center;
    }

    50% {
      transform: skewX(-20deg) scaleX(0);
      transform-origin: right center;
    }
  }
`;

export default function LinkButton({ href, size, className, children, style = "white", ...rest }) {
  return (
    <a
      href={href}
      className={`
        ${className}
        ${`btn-style-sp`}
        inline-flex items-center font-medium rounded-full focus:outline-none focus:border-none focus:shadow-outline-none transition duration-300 ease-in-out relative
        overflow-hidden
        `}
      target="_blank"
      {...rest}
    >
      <ButtonEffect
        className={`
      ${size === "small" ? "px-4 py-1 text-sm" : "px-6 py-2 text-md"}
      `}
      >
        {children}
      </ButtonEffect>
    </a>
  );
}
