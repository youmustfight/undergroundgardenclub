import React from "react";
import Head from "next/head";

type TSEOProps = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
};

export const SEO: React.FC<TSEOProps> = (props) => {
  const {
    title = "UNDERGROUND GARDEN CLUB",
    description = "Lab, Garden, Planet as Sanctuary and Playground",
    image = "/banner4.png",
    url = "https://undergroundgarden.club",
  } = props;

  // RENDER
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <link href="/favicon.png" rel="shortcut icon" type="image/x-icon" />

      {/* OpenGraph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={title} />
      <meta property="og:image" content={url + image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      {/* <meta name="twitter:site" content="@XYZ" /> */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={url + image} />
    </Head>
  );
};
