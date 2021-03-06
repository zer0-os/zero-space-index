import { useState } from "react";
import styled from "styled-components";
import { Transition } from "@headlessui/react";
import { Link } from "react-scroll";

import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

import LinkButton from "components/LinkButton";

const HeaderContainer = styled.div`
  &::before {
    position: absolute;
    bottom: auto;
    right: 0;
    top: 0;
    left: -1px;
    z-index: -1;
    width: 100%;
    height: 100%;
    content: "";
    background: linear-gradient(180deg, #111116, rgba(0, 0, 0, 0) 100%);
  }
`;

const SingleLink = ({ children, target, href, direct = false }) => {
  if (direct) {
    return (
      <a
        href={href}
        target="_blank"
        className="text-glow-hard block px-3 py-2 text-gray-300 hover:text-white font-medium transition duration-150 ease-in-out"
        role="menuitem"
      >
        {children}
      </a>
    );
  }
  return (
    <Link
      to={target}
      href={href}
      spy={true}
      smooth={true}
      duration={500}
      className="text-glow-hard block px-3 py-2 text-gray-300 hover:text-white font-medium transition duration-150 ease-in-out"
      role="menuitem"
      offset={70}
    >
      {children}
    </Link>
  );
};

export default function Header({ videoNumber }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderContainer className="absolute z-10 w-full text-center text-white">
      <div className="mx-auto px-6 py-4 max-w-screen-xl">
        <nav className="relative flex items-center justify-between sm:h-10 md:justify-center">
          <div className="flex flex-1 items-center md:absolute md:inset-y-0 md:left-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <a href="/" aria-label="Home">
                <img
                  className="content-glow-hard inline-block w-auto h-8 sm:h-10"
                  src="/assets/images/logo.svg"
                  alt="Logo"
                />
              </a>
              <div className="flex items-center -mr-2 md:hidden">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 hover:text-black text-white hover:bg-white rounded-md focus:outline-none transition duration-150 ease-in-out"
                  id="main-menu"
                  aria-label="Main menu"
                  aria-haspopup="true"
                  aria-expanded="false"
                  onClick={(e) => setMenuOpen(true)}
                >
                  <AiOutlineMenu className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:flex md:space-x-10">
            {/* <SingleLink href="#" target="artists">
              Artists
            </SingleLink>
            <SingleLink href="#" target="collectors">
              Collectors
            </SingleLink>
            <SingleLink href="#" target="tokens">
              Tokens
            </SingleLink>
            <SingleLink href="https://zine.wilderworld.com" direct>
              Zine
            </SingleLink> */}
          </div>
          <div className="hidden md:absolute md:inset-y-0 md:right-0 md:flex md:items-center md:justify-end">
            <span className="inline-flex rounded-md shadow">
              <LinkButton
                // style={(videoNumber ?? "white").toString()}
                style="2"
                href="https://zer0.io/"
                className="text-glow box-glow"
                size="large"
              >
                Launch Zero
              </LinkButton>
            </span>
          </div>
        </nav>
      </div>
      <Transition
        show={menuOpen}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div ref={ref} className="absolute inset-x-0 top-0 p-4 transform origin-top-right transition md:hidden">
            <div className="border border-white rounded-lg shadow-md">
              <div
                className="shadow-xs rounded-lg overflow-hidden"
                role="menu"
                style={{ background: "#111116" }}
                aria-orientation="vertical"
                aria-labelledby="main-menu"
              >
                <div className="flex items-center justify-between pt-2 px-4">
                  <div>
                    <img className="w-auto h-8" src="/animated.svg" alt="" />
                  </div>
                  <div className="-mr-2">
                    <button
                      onClick={(e) => setMenuOpen(false)}
                      type="button"
                      className="inline-flex items-center justify-center p-2 hover:text-gray-500 focus:text-gray-500 text-white hover:bg-gray-100 focus:bg-gray-100 rounded-md focus:outline-none transition duration-150 ease-in-out"
                      aria-label="Close menu"
                    >
                      <IoMdClose className="w-6 h-6" />
                    </button>
                  </div>
                </div>
                <div className="p-2">
                  {/* <SingleLink href="#" target="artists">
                    Artists
                  </SingleLink>
                  <SingleLink href="#" target="collectors">
                    Collectors
                  </SingleLink>
                  <SingleLink href="#" target="tokens">
                    Tokens
                  </SingleLink>
                  <SingleLink href="https://zine.wilderworld.com" direct>
                    Zine
                  </SingleLink> */}
                </div>
                <div>
                  <a
                    href="https://zer0.io/"
                    className="block px-5 py-3 w-full text-center text-gray-300 font-medium border-t border-white focus:outline-none transition duration-150 ease-in-out"
                    role="menuitem"
                    target="_blank"
                  >
                    Launch Zero
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </HeaderContainer>
  );
}
