import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="">
      <div className="mx-auto px-4 py-12 max-w-screen-xl sm:px-6 lg:px-8 lg:py-16">
        <div className="items-center pt-8 border-t border-gray-700 md:grid md:gap-8 md:grid-cols-3">
          <div className="grid gap-8 grid-cols-1 text-center md:text-left">
            <div className="sm:grid sm:gap-8 sm:grid-cols-1">
              <div>
                {/* <h4 className="text-gray-400 text-sm font-semibold tracking-wider leading-5 uppercase">Solutions</h4> */}
                <ul className="mt-4 space-y-4">
                  <li>
                    <a
                      href="https://zine.wilderworld.com/wilder-token/"
                      className="text-gray-300 hover:text-white text-base leading-6"
                      target="_blank"
                    >
                      WILD Token
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://zine.wilderworld.com/loot-token/"
                      className="text-gray-300 hover:text-white text-base leading-6"
                      target="_blank"
                    >
                      LOOT Token
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://zine.wilderworld.com"
                      className="text-gray-300 hover:text-white text-base leading-6"
                      target="_blank"
                    >
                      Zine
                    </a>
                  </li>
                  {/* <li>
                    <a href="#" className="text-gray-300 hover:text-white text-base leading-6">
                      Zer0
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div className="grid gap-8 grid-cols-1">
            <div className="p-12">
              <img src="/assets/images/logo.svg" className="content-glow w-full h-full max-h-52" />
            </div>
          </div>
          <div className="grid gap-8 grid-cols-1 text-center md:text-right">
            <div className="sm:grid sm:gap-8 sm:grid-cols-1">
              <div className="mt-12 sm:mt-0">
                {/* <h4 className="text-gray-400 text-sm font-semibold tracking-wider leading-5 uppercase">Support</h4> */}
                <ul className="mt-4 space-y-4">
                  {/* <li>
                    <a href="#" className="text-gray-300 hover:text-white text-base leading-6">
                      Guidelines
                    </a>
                  </li> */}
                  <li>
                    <a
                      href="https://zine.wilderworld.com/privacy-policy/"
                      className="text-gray-300 hover:text-white text-base leading-6"
                      target="_blank"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://zine.wilderworld.com/terms-and-conditions/"
                      className="text-gray-300 hover:text-white text-base leading-6"
                      target="_blank"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://pn2nq2l5rqu.typeform.com/to/KHl0tR1I"
                      className="text-gray-300 hover:text-white text-base leading-6"
                      target="_blank"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center space-x-6 sm:order-2">
            <a href="https://www.instagram.com/wilder.world/" className="hover:text-gray-300 text-gray-400">
              <span className="sr-only">Instagram</span>
              <AiOutlineInstagram className="w-6 h-6" />
            </a>
            <a href="https://twitter.com/wilderworld_" className="hover:text-gray-300 text-gray-400">
              <span className="sr-only">Twitter</span>
              <AiOutlineTwitter className="w-6 h-6" />
            </a>
          </div>
          <p className="mt-8 text-center text-gray-400 text-base leading-6 sm:order-1 sm:mt-0">
            Powered by{" "}
            <a href="https://zer0.io" className="hover:text-gray-300 text-gray-400">
              <span>Zer0</span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
