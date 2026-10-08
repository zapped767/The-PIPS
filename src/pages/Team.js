import React, { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import LayoutTwo from "../layouts/LayoutTwo";
import Breadcrumb from "../components/breadcrumbs/Breadcrumb";
import TeamContent from "../containers/teams/TeamContent";

const Team = () => {
  return (
    <Fragment>
      <Helmet>
        <title>PIPS | Team</title>
        <meta name="description" content="Team page of The Pips" />
      </Helmet>
      <LayoutTwo theme="white">
        {/* breadcrumb */}
        <Breadcrumb title="OUR TEAM" />
        {/* team content */}
        <TeamContent />
      </LayoutTwo>
    </Fragment>
  );
};

export default Team;
