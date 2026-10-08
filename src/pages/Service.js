import React, { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import LayoutTwo from "../layouts/LayoutTwo";
import Breadcrumb from "../components/breadcrumbs/Breadcrumb";
import ServiceContent from "../components/service-contents/ServiceContent";
import ServiceList from "../containers/service-contents/ServiceList";

const Service = () => {
  return (
    <Fragment>
      <Helmet>
        <title>PIPS | Service</title>
        <meta name="description" content="Service page of The Pips" />
      </Helmet>
      <LayoutTwo theme="white">
        {/* breadcrumb */}
        <Breadcrumb title="SERVICES WE PROVIDE" />
        {/* service content */}
        <ServiceContent />
        {/* service list */}
        <ServiceList />
      </LayoutTwo>
    </Fragment>
  );
};

export default Service;
