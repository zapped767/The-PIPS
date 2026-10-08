import React, { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import LayoutTwo from "../layouts/LayoutTwo";
import Breadcrumb from "../components/breadcrumbs/Breadcrumb";
import Merchant from "../containers/merchants/Merchant";

const Merchants = () => {
  return (
    <Fragment>
      <Helmet>
        <title>PIPS | Merchants</title>
        <meta name="description" content="Merchants page of The Pips" />
      </Helmet>
      <LayoutTwo theme="white">
        {/* breadcrumb */}
        <Breadcrumb title="MERCHANTS" />
        {/* merchant content */}
        <Merchant />
      </LayoutTwo>
    </Fragment>
  );
};

export default Merchants;
