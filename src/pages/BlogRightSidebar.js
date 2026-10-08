import React, { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import LayoutTwo from "../layouts/LayoutTwo";
import Breadcrumb from "../components/breadcrumbs/Breadcrumb";
import BlogcontentTwo from "../containers/blog/BlogcontentTwo";

const BlogRightSidebar = () => {
  return (
    <Fragment>
      <Helmet>
        <title>PIPS | Latest News</title>
        <meta name="description" content="Blog page of The Pips" />
      </Helmet>
      <LayoutTwo theme="white">
        {/* breadcrumb */}
        <Breadcrumb title="LATEST NEWS" />
        {/* blog content */}
        <BlogcontentTwo />
      </LayoutTwo>
    </Fragment>
  );
};

export default BlogRightSidebar;
