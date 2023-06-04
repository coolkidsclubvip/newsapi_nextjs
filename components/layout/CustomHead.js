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

        
        <title>{`Nuts News | ${props.title}`}</title>
      </Head>
    </>
  );
}

export default CustomHead;
