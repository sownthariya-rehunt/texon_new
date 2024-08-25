import React from "react";
import NavbarStyleOne from "@/components/Layouts/NavbarStyleOne";
import PageBannerStyle1 from "@/components/Common/PageBannerStyle1";
import AppDownloadStyle2 from "@/components/Common/AppDownloadStyle2";
// import PricingPlanStyle1 from "@/components/PricingPlan/PricingPlanStyle1";
// import PricingPlanStyle2 from "@/components/PricingPlan/PricingPlanStyle2";
// import PricingPlanStyle3 from "@/components/PricingPlan/PricingPlanStyle3";
// import PricingPlanStyle4 from "@/components/PricingPlan/PricingPlanStyle4";
import PricingPlanStyle5 from "@/components/PricingPlan/PricingPlanStyle5";
import PartnerStyle2 from "@/components/Common/PartnerStyle2";
import FooterStyleOne from "@/components/Layouts/FooterStyleOne";
import NavbarStyleTwo from "@/components/Layouts/NavbarStyleTwo";

export default function Page() {
  return (
    <>
      <NavbarStyleTwo/>

      <PageBannerStyle1
        pageTitle="Package & Pricing"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Package & Pricing"
      />

      {/* <PricingPlanStyle2 /> */}

      {/* <PricingPlanStyle1 /> */}

      {/* <div className="pt-100">
        <PricingPlanStyle4 />
      </div> */}

      {/* <PricingPlanStyle3 /> */}

      {/* <PartnerStyle2 /> */}

      <PricingPlanStyle5 />
{/* <PricingPlanLead /> */}
      {/* <div className="pt-100">
        <AppDownloadStyle2 />
      </div> */}

      <FooterStyleOne />
    </>
  );
}
