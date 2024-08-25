'use client';
import React from "react";
import NavbarStyleTwo from "@/components/Layouts/NavbarStyleTwo";
import PageBannerStyle1 from "@/components/Common/PageBannerStyle1";
import AppDownloadStyle2 from "@/components/Common/AppDownloadStyle2";
import FooterStyleOne from "@/components/Layouts/FooterStyleOne";
import HowItWorksContent from "@/components/HowItWorks/HowItWorksContent";
import WhatsAppIcon from "@/components/Common/WhatsAppIcon";
import PaymentOptions from "@/components/Common/PaymentOptions";
import GoogleTagManager from "@/components/Common/GoogleTagManager";

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <PageBannerStyle1
        pageTitle="Why choose us ?"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Why choose us ?"
      />

      <HowItWorksContent />

      {/* <AppDownloadStyle2 /> */}

      <FooterStyleOne />

      <PaymentOptions phoneNumber={""} />

      <WhatsAppIcon phoneNumber="971585802353"/>

      <GoogleTagManager gtmId="AW-16545858079"/>
    </>
  );
}
