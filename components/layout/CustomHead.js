import Head from "next/head";

function CustomHead(props) {
  return (
    <>
      <Head>
        <title>The Nuts News</title>
        <meta
          name="keywords"
          content="local news, local weather,australian news,world news"
        />
        <meta
          name="description"
          content="Nuts News offers a wide range of latest australian and international news from different news sources"
        ></meta>
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

        <title>{`Nuts News | ${props.title}`}</title>
      </Head>
    </>
  );
}

export default CustomHead;
