import React, { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import LayoutTwo from "../layouts/LayoutTwo";
import Breadcrumb from "../components/breadcrumbs/Breadcrumb";
import ServiceContentTwo from "../components/service-contents/ServiceContentTwo";
import ServiceContentThree from "../components/service-contents/ServiceContentThree";
import ServiceFeature from "../containers/service-contents/ServiceFeature";

const ServiceDetails = () => {
  return (
    <Fragment>
      <Helmet>
        <title>PIPS | Service Details</title>
        <meta name="description" content="Service details page of The Pips" />
      </Helmet>
      <LayoutTwo theme="white">
        {/* breadcrumb */}
        <Breadcrumb title="SERVICES DETAILS" />
        {/* service content */}
        <ServiceContentTwo />
        {/* service features */}
        <ServiceFeature />
        {/* service content */}
        <ServiceContentThree />
      </LayoutTwo>
    </Fragment>
  );
};

export default ServiceDetails;
