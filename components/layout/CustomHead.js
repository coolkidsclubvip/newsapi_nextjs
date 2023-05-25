import Head from "next/head";

function CustomHead(props) {
  return (
    <>
      {/* <Head>
        <title>{`CodeFeed | ${article.category}`}</title>
        <meta
          name="description"
          description={article.title + ": " + article.description}
        />
      </Head> */}

      <Head>
        <title>The Nuts News</title>
        <meta
          name="keyswords"
          content="local news, local weather,australian news,world news"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"
          defer
        ></script>
        <title>{`Nuts News|${props.title}`}</title>
      </Head>
    </>
  );
}

export default CustomHead;