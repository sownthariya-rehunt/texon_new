import React from "react";
import NavbarStyleTwo from "@/components/Layouts/NavbarStyleTwo";
import MainBanner from "@/components/HomeDemo2/MainBanner";
import Features from "@/components/HomeDemo2/Features";
import KeyFeatures from "@/components/HomeDemo2/KeyFeatures";
import AppProgressStyle2 from "@/components/Common/AppProgressStyle2";
import IntroVideo from "@/components/HomeDemo2/IntroVideo";
import AppScreenshotsStyle2 from "@/components/AppScreenshots/AppScreenshotsStyle2";
import SoftwareIntegrationsTwo from "@/components/Common/SoftwareIntegrationsTwo";
import ClientFeedbackStyle2 from "@/components/Feedbacks/ClientFeedbackStyle2";
import PricingPlanStyle2 from "@/components/PricingPlan/PricingPlanStyle2";
import FreeTrialStyle2 from "@/components/Common/FreeTrialStyle2";
import PartnerStyle1 from "@/components/Common/PartnerStyle1";
import FooterStyleOne from "@/components/Layouts/FooterStyleOne";
import FooterStyleTwo from "@/components/Layouts/FooterStyleTwo";
import FooterStyleThree from "@/components/Layouts/FooterStyleThree";
import FooterStyleFour from "@/components/Layouts/FooterStyleFour";
import FooterStyleFive from "@/components/Layouts/FooterStyleFive";
import PartnerStyle2 from "@/components/Common/PartnerStyle2";
import PartnerStyle3 from "@/components/Common/PartnerStyle3";
import ClientFeedbackStyle1 from "@/components/Feedbacks/ClientFeedbackStyle1";
import ClientFeedbackStyle3 from "@/components/Feedbacks/ClientFeedbackStyle3";
import ClientFeedbackStyle4 from "@/components/Feedbacks/ClientFeedbackStyle4";
import ClientFeedbackStyle5 from "@/components/Feedbacks/ClientFeedbackStyle5";
import ClientFeedback from "@/components/HomeDemo7/ClientFeedback";
export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <MainBanner />

      <Features />

      <KeyFeatures />

      <AppProgressStyle2 />

      <IntroVideo />

      <AppScreenshotsStyle2 />

      <SoftwareIntegrationsTwo />

      {/* <ClientFeedbackStyle2 /> */}
      {/* <ClientFeedbackStyle1/> */}
      {/* <ClientFeedbackStyle3/>
      <ClientFeedbackStyle4/>
      <ClientFeedbackStyle5/> */}
      <ClientFeedback />

      <PricingPlanStyle2 />

      {/* <FreeTrialStyle2 /> */}

      {/* <PartnerStyle1 /> */}
    

      {/* <FooterStyleOne /> */}
      {/* <FooterStyleTwo/> */}
      {/* <FooterStyleThree/> */}
      <FooterStyleFour/>
      {/* <FooterStyleFive/> */}
      
    </>
  );
}
