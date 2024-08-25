'use client';
import React from "react";
import NavbarStyleTwo from "@/components/Layouts/NavbarStyleTwo";
import PageBannerStyle3 from "@/components/Common/PageBannerStyle3";
import AppDownloadStyle2 from "@/components/Common/AppDownloadStyle2";
import FooterStyleOne from "@/components/Layouts/FooterStyleOne";
import FeaturesCard from "@/components/Features/FeaturesCard";
import WhatsAppIcon from "@/components/Common/WhatsAppIcon";
import PaymentOptions from "@/components/Common/PaymentOptions";
import GoogleTagManager from "@/components/Common/GoogleTagManager";

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <PageBannerStyle3
        pageTitle="Products Features"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Features"
      />

      <FeaturesCard />

      {/* <div className="pt-100">
        <AppDownloadStyle2 />
      </div> */}

      <FooterStyleOne />

      <PaymentOptions phoneNumber={""} />

      <WhatsAppIcon phoneNumber="971585802353"/>

      <GoogleTagManager gtmId="AW-16545858079"/>
    </>
  );
}
