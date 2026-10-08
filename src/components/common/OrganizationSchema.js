import React from "react";
import { Helmet } from "react-helmet-async";

const OrganizationSchema = () => {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "The PIPS",
    url: "https://thepips.com",
    logo: "https://thepips.com/images/logo/logo.png",
    description:
      "The PIPS provides access to global financial markets, trading platforms, market tools, analytical resources and trading account solutions.",
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationData)}
      </script>
    </Helmet>
  );
};

export default OrganizationSchema;