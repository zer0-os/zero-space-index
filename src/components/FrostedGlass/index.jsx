import styled from "styled-components";

const StyledGlass = styled.div`
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1;
  background: inherit;
  backdrop-filter: blur(30px);
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    background: inherit;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: inset 0 0 200px rgba(45, 0, 77, 1);
    filter: blur(40px);
    margin: -20px;
  }
`;

export default function FrostedGlass({ children }) {
  return (
    <StyledGlass className="p-4 text-white hover:text-zero-purple rounded-xl transition duration-150">
      {children}
    </StyledGlass>
  );
}
