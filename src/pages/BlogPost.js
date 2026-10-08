import React, { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import LayoutTwo from "../layouts/LayoutTwo";
import Breadcrumb from "../components/breadcrumbs/Breadcrumb";
import BlogPostContent from "../containers/blog/BlogPostContent";

const BlogPost = () => {
  return (
    <Fragment>
      <Helmet>
        <title>PIPS | News Details</title>
        <meta name="description" content="News details page of The Pips" />
      </Helmet>
      <LayoutTwo theme="white">
        {/* breadcrumb */}
        <Breadcrumb title="NEWS DETAILS" />
        {/* blog post content */}
        <BlogPostContent />
      </LayoutTwo>
    </Fragment>
  );
};

export default BlogPost;
