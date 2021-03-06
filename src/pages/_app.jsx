import "styles/tailwind.css";

import { useEffect } from "react";
import { useRouter } from "next/router";

// Router.events.on("routeChangeStart", () => console.log("start"));
// Router.events.on("routeChangeComplete", () => console.log("complete"));
// Router.events.on("routeChangeError", () => console.log("err"));

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    console.log("inside hook now");
    const handleRouteChange = (url, { shallow }) => {
      console.log("something");
    };

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
