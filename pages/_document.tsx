import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>mini crossword maker</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🐸</text></svg>"
        />
        <meta
          name="description"
          content="A site to create and share mini crosswords."
        />
        <meta property="og:title" content="mini crossword maker" />
        <meta
          property="og:description"
          content="A site to create and share mini crosswords."
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
