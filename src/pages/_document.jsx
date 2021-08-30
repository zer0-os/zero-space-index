import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en" className="overflow-hidden overscroll-none">
        <Head>
          <meta name="theme-color" content="#111116" />
          <link rel="stylesheet" href="https://use.typekit.net/dqh8dph.css" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=block"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/fonts/ddt_condensedbook_macroman/stylesheet.css" />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <body
          className="bg-size-small lg:bg-size-large h-full overflow-hidden overscroll-none"
          style={{
            // backgroundImage: "url(/assets/repeating/pattern-grid.svg)",
            backgroundColor: "#111116",
          }}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
