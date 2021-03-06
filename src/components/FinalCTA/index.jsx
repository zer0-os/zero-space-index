import { useState } from "react";
import Fade from "react-reveal/Fade";
import { AiOutlineLoading, AiOutlineCheck, AiOutlineExclamation } from "react-icons/ai";

import Section from "components/Layout/Section";

export default function FinalCTA() {
  const [inpu, setInpu] = useState("");
  const [subs, setSubs] = useState(0);

  const signUp = async (e) => {
    e.preventDefault();
    setSubs(1);
    await fetch("https://zine.wilderworld.com/members/api/send-magic-link/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: inpu,
        emailType: "subscribe",
        labels: [],
      }),
    })
      .then((e) => e.text())
      .then((e) => {
        if (e === "Created.") {
          setSubs(2);
        } else {
          setSubs(4);
          setTimeout(() => setSubs(0), 3000);
        }
      });
  };

  return (
    <Section maxSize="max-w-screen-xl">
      <Fade bottom cascade>
        <div>
          <div
            className="rounded-lg overflow-hidden"
            style={{
              background: `url('/assets/background/wilder.png') #000 no-repeat 0 / cover`,
            }}
          >
            <div className="p-6 md:p-12">
              <div className="relative flex justify-center mb-12 md:justify-start">
                <img className="content-glow-hard inline-block w-auto h-10 sm:h-12" src="/animated.svg" alt="Logo" />
              </div>
              <div className="mb-8 text-center md:self-center md:text-left">
                <h2 className="text-white font-special text-2xl md:text-6xl">Take a walk on</h2>
                <h2 className="text-white font-special text-2xl md:text-6xl">The Wilder Side</h2>
                <p className="mt-4 text-gray-300 text-sm leading-6 md:text-lg">JOIN THE REVOLUTION</p>
              </div>
              <div className="mb-2 md:text-left">
                <form target="#" className="sm:flex" aria-labelledby="newsletter-headline" onSubmit={signUp}>
                  <input
                    aria-label="Email address"
                    type="email"
                    required
                    className="placeholder-gray-500 focus:placeholder-gray-400 px-3 py-2 w-full text-gray-900 text-base leading-6 bg-white border border-transparent rounded-md focus:outline-none appearance-none transition duration-150 ease-in-out sm:max-w-xs md:px-5 md:py-3"
                    placeholder="Enter your email"
                    value={inpu}
                    onChange={(e) => setInpu(e.target.value)}
                  />
                  <div className="mt-3 rounded-md shadow sm:flex-shrink-0 sm:ml-3 sm:mt-0">
                    <button
                      type="submit"
                      className="bg-gradient flex items-center justify-center px-3 py-2 w-full text-white text-base font-medium leading-6 border-none border-transparent rounded-md focus:outline-none transition duration-150 ease-in-out md:px-5 md:py-3"
                    >
                      {subs === 0 && <span>Subscribe</span>}
                      {subs === 1 && <AiOutlineLoading className="mx-6 h-6 animate-spin" />}
                      {subs === 2 && <AiOutlineCheck className="mx-6 h-6" />}
                      {subs === 3 && <AiOutlineExclamation className="mx-6 h-6" />}
                    </button>
                  </div>
                </form>
                {/* <a
              href="#"
              className="inline-flex items-center mt-8 px-6 py-3 text-wilder-purple text-base font-medium leading-6 hover:bg-gray-50 bg-white border border-transparent rounded-md shadow transition duration-150 ease-in-out"
              >
              Join the community!
            </a> */}
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </Section>
  );
}
