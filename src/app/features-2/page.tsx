'use client';
import React from "react";
import NavbarStyleTwo from "@/components/Layouts/NavbarStyleTwo";
import PageBannerStyle3 from "@/components/Common/PageBannerStyle3";
import ClientFeedbackStyle1 from "@/components/Feedbacks/ClientFeedbackStyle1";
import FooterStyleOne from "@/components/Layouts/FooterStyleOne";
import FeaturesCardStyle2 from "@/components/Features/FeaturesCardStyle2";
import WhatsAppIcon from "@/components/Common/WhatsAppIcon";

export default function Page() {
  return (
    <>
      <NavbarStyleTwo />

      <PageBannerStyle3
        pageTitle="Advantages"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Advantages"
      />

      <FeaturesCardStyle2 />

      <ClientFeedbackStyle1 />

      <FooterStyleOne />

      <WhatsAppIcon phoneNumber="971585802353"/>
    </>
  );
}
