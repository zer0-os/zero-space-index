import LinkButton from "components/LinkButton";

import FrostedGlass from "components/FrostedGlass";

export default function HUD({ children }) {
  return (
    <div>
      <div>{children}</div>
      <div className="absolute left-0 right-0 top-0 w-full">
        <img
          className="content-glow-hard absolute top-0 inline-block mt-2 w-full max-h-20"
          src="/assets/hud/top.svg"
          alt="HUD Top"
        />
        <div className="flex items-center justify-between align-middle mt-4 p-6">
          <div>
            <a href="/" aria-label="Home">
              <img
                className="content-glow-hard inline-block w-auto h-8 sm:h-10"
                src="/assets/images/logo.svg"
                alt="Logo"
              />
            </a>
          </div>
          <div>
            <LinkButton className="" href="https://zer0.io" size="large">
              Launch Zero
            </LinkButton>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 w-full">
        <img
          className="content-glow-hard absolute bottom-0 inline-block mb-2 w-full max-h-20"
          src="/assets/hud/bot.svg"
          alt="HUD Top"
        />
        <div className="flex items-center justify-between align-middle mb-4">
          <div className="m-8">
            <FrostedGlass>
              <div>Test</div>
              <div>Test</div>
              <div>Test</div>
            </FrostedGlass>
          </div>
        </div>
      </div>
    </div>
  );
}
