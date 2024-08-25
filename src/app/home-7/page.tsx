import React from "react";
import NavbarStyleTwo from "@/components/Layouts/NavbarStyleTwo";
import MainBanner from "@/components/HomeDemo7/MainBanner";
import Features from "@/components/HomeDemo7/Features";
import AboutUsContent from "@/components/HomeDemo7/AboutUsContent";
import KeyFeatures from "@/components/HomeDemo7/KeyFeatures";
import AppProgress from "@/components/HomeDemo7/AppProgress";
import AppScreenshots from "@/components/HomeDemo7/AppScreenshots";
import BestAppEver from "@/components/HomeDemo7/BestAppEver";
import AppIntroVideo from "@/components/HomeDemo7/AppIntroVideo";

import AppDownload from "@/components/HomeDemo7/AppDownload";
import SoftwareIntegrations from "@/components/HomeDemo7/SoftwareIntegrations";
import ClientFeedback from "@/components/HomeDemo7/ClientFeedback";
import Newsletter from "@/components/HomeDemo7/Newsletter";
import FooterStyleFour from "@/components/Layouts/FooterStyleFour";
import PricingTable from "@/components/HomeDemo7/PricingTable";
import PricingPlanStyle1 from "@/components/PricingPlan/PricingPlanStyle1";
import PricingPlanStyle2 from "@/components/PricingPlan/PricingPlanStyle2";
import PricingPlan from "@/components/HomeDemo8/PricingPlan";

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <MainBanner />

      <Features />

      <AboutUsContent />

      <KeyFeatures />

      <AppProgress />

      <AppScreenshots />

      <BestAppEver />

      <AppIntroVideo />

      <PricingTable />
<PricingPlan/>
<PricingPlanStyle1/>
<PricingPlanStyle2/>
      <AppDownload />

      {/* <SoftwareIntegrations /> */}

      <ClientFeedback />

      <Newsletter />

      <FooterStyleFour />
    </>
  );
}
