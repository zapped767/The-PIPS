import React from "react";
import { Helmet } from "react-helmet-async";

const SITE_NAME = "The PIPS";
const SITE_URL = "https://thepips.com";

const SEO = ({
  title,
  description,
  path = "/",
  image = "/images/logo/logo.png",
  type = "website",
}) => {
  const cleanPath =
    path === "/"
      ? ""
      : path.startsWith("/")
      ? path
      : `/${path}`;

  const canonicalUrl = `${SITE_URL}${cleanPath}`;

  const imageUrl = image.startsWith("http")
    ? image
    : `${SITE_URL}${image}`;

  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} | Global Trading Platform`;

  const hostname =
    typeof window !== "undefined"
      ? window.location.hostname
      : "";

  const isProduction =
    hostname === "thepips.com" ||
    hostname === "www.thepips.com";

  const robotsContent = isProduction
    ? "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    : "noindex, nofollow";

  return (
    <Helmet>
      {/* BASIC SEO */}
      <title>{fullTitle}</title>

      <meta
        name="description"
        content={description}
      />

      <meta
        name="robots"
        content={robotsContent}
      />

      {/* CANONICAL - ONLY ON REAL PRODUCTION DOMAIN */}
      {isProduction && (
        <link
          rel="canonical"
          href={canonicalUrl}
        />
      )}

      {/* OPEN GRAPH */}
      <meta
        property="og:type"
        content={type}
      />

      <meta
        property="og:site_name"
        content={SITE_NAME}
      />

      <meta
        property="og:title"
        content={fullTitle}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:url"
        content={canonicalUrl}
      />

      <meta
        property="og:image"
        content={imageUrl}
      />

      {/* TWITTER */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={fullTitle}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      <meta
        name="twitter:image"
        content={imageUrl}
      />
    </Helmet>
  );
};

/* IMPORTANT:
   HomeTwo imports SEO as a DEFAULT import.
*/
export default SEO;