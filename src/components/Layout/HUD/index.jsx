import { useState, useEffect } from "react";
import GhostContentAPI from "@tryghost/content-api";
import dayjs from "dayjs";

import LinkButton from "components/LinkButton";
import FrostedGlass from "components/FrostedGlass";

const api = new GhostContentAPI({
  host: "https://n3owilder.ghost.io",
  key: "b2d61cb39e116f85a3f6252a61",
  version: "v3",
});

export default function HUD({ children }) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    api.posts
      .browse({
        limit: 1,
      })
      .then((posts) => {
        setPost(posts[0]);
      });
  }, []);

  return (
    <div>
      <div>{children}</div>
      <div className="absolute left-0 right-0 top-0 w-full">
        <img
          className="content-glow-hard absolute top-0 inline-block mt-2 w-full max-h-20 pointer-events-none"
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
            <LinkButton className="" href="https://app.zer0.io" size="large">
              Launch Zero
            </LinkButton>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 w-full">
        <img
          className="content-glow-hard absolute bottom-0 inline-block mb-2 w-full max-h-20 pointer-events-none"
          src="/assets/hud/bot.svg"
          alt="HUD Top"
        />
        <div className="flex items-center justify-between align-middle mb-4">
          <div className="m-0">
            {/* <FrostedGlass>
              <div>Test</div>
              <div>Test</div>
              <div>Test</div>
            </FrostedGlass> */}
          </div>
          <div className="m-4 w-96 max-w-full md:m-6">
            <FrostedGlass>
              {post && (
                <a href={post.url} target="_blank">
                  <div className="flex">
                    <div className="glow-sp flex-shrink-0 w-24 h-24 rounded-2xl overflow-hidden">
                      <img src={post.feature_image} className="h-full" />
                    </div>
                    <div className="flex flex-col flex-grow justify-between pl-4">
                      <div className="text-zero-purple text-xs">{dayjs(post.published_at).format("MMMM D, YYYY")}</div>
                      <div className="text-md text-zero-purple-light leading-4">{post.title}</div>
                      <div className="text-gray-100 text-sm">Read at zine.live</div>
                    </div>
                  </div>
                </a>
              )}
              {!post && (
                <div className="flex items-center justify-center align-middle w-full h-24">
                  <div className="w-8 h-8">
                    <svg
                      class="w-8 h-8 text-white animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path
                        class="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  </div>
                </div>
              )}
            </FrostedGlass>
          </div>
        </div>
      </div>
    </div>
  );
}
