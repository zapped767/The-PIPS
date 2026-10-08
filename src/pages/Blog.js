import React, { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import LayoutTwo from "../layouts/LayoutTwo";
import Breadcrumb from "../components/breadcrumbs/Breadcrumb";
import BlogContent from "../containers/blog/BlogContent";

const Blog = () => {
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
        <BlogContent />
      </LayoutTwo>
    </Fragment>
  );
};

export default Blog;
