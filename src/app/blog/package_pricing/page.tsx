import React from "react";
import NavbarStyleTwo from "@/components/Layouts/NavbarStyleTwo";
import PageBannerStyle1 from "@/components/Common/PageBannerStyle1";
import FooterStyleOne from "@/components/Layouts/FooterStyleOne";
import BlogDetailsContent from "@/components/Blog/BlogDetailsContent";
import PricingPlanLead from '@/components/PricingPlan/PricingPlanLead'

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <PageBannerStyle1
        pageTitle="package"
        homePageUrl="/"
        homePageText="Home"
        activePageText="package"
        
      />

   <PricingPlanLead/>

      <FooterStyleOne />
    </>
  );
}
