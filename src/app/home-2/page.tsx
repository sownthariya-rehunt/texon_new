'use client';
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
import PricingTable from "@/components/HomeDemo7/PricingTable";
import AppDownload from "@/components/HomeDemo7/AppDownload";
import SoftwareIntegrations from "@/components/HomeDemo7/SoftwareIntegrations";
import Newsletter from "@/components/HomeDemo7/Newsletter";
import FooterStyleOne from "@/components/Layouts/FooterStyleOne";
import ClientFeedbackStyle1 from "@/components/Feedbacks/ClientFeedbackStyle1";
import WhatsAppIcon from "@/components/Common/WhatsAppIcon";
import PaymentOptions from "@/components/Common/PaymentOptions";
import GoogleTagManager from "@/components/Common/GoogleTagManager";

import PricingPlanLead from "@/components/PricingPlan/PricingPlanLead";
import PricingPlanStyle5 from "@/components/PricingPlan/PricingPlanStyle5";

export default function Page() {
  return (
    <>  
      <NavbarStyleTwo />

      <PaymentOptions phoneNumber={""} />

      <MainBanner />

      <Features />

      <AboutUsContent />

      <KeyFeatures />

      <AppProgress />

      {/* <AppScreenshots /> */}

      <BestAppEver />

      {/* <AppIntroVideo /> */}

      <PricingTable />
   
<PricingPlanStyle5/>

      <AppDownload />

      {/* <SoftwareIntegrations /> */}

      <ClientFeedbackStyle1 />

      {/* <Newsletter /> */}

      <FooterStyleOne />

      <WhatsAppIcon phoneNumber="971585802353"/>

      <GoogleTagManager gtmId="AW-16545858079"/>
    </>
  );
}
