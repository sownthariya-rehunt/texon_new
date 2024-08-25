'use client';
import React from "react";
import NavbarStyleTwo from "@/components/Layouts/NavbarStyleTwo";
import PageBannerStyle1 from "@/components/Common/PageBannerStyle1";
import FooterStyleOne from "@/components/Layouts/FooterStyleOne";
import BlogGridPost from "@/components/Blog/BlogGridPost";
import PaymentOptions from "@/components/Common/PaymentOptions";
import WhatsAppIcon from "@/components/Common/WhatsAppIcon";
import GoogleTagManager from "@/components/Common/GoogleTagManager";

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

      <BlogGridPost />

      <FooterStyleOne />

      <PaymentOptions phoneNumber={""} />

      <WhatsAppIcon phoneNumber="971585802353"/>

      <GoogleTagManager gtmId="AW-16545858079"/>
    </>
  );
}
