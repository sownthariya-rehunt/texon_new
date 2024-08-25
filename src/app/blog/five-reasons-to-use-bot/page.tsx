import React from "react";
import NavbarStyleTwo from "@/components/Layouts/NavbarStyleTwo";
import PageBannerStyle1 from "@/components/Common/PageBannerStyle1";
import FooterStyleOne from "@/components/Layouts/FooterStyleOne";
import BlogFiveReasonsToUseBot from "@/components/Blog/BlogFiveReasonsToUseBot";

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <PageBannerStyle1
        pageTitle="Blogs"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blogs"
      />

      <BlogFiveReasonsToUseBot />

      <FooterStyleOne />
    </>
  );
}
