'use client';
import React, { useEffect, useState } from "react";
import NavbarStyleTwo from "@/components/Layouts/NavbarStyleTwo";
import PageBannerStyle1 from "@/components/Common/PageBannerStyle1";
import ContactForm from "@/components/Contact/ContactForm";
import ContactInfo from "@/components/Contact/ContactInfo";
import FooterStyleOne from "@/components/Layouts/FooterStyleOne";
import WhatsAppIcon from "@/components/Common/WhatsAppIcon";
import PaymentOptions from "@/components/Common/PaymentOptions";
import Popup from "@/components/Common/PopUp";
import GoogleTagManager from "@/components/Common/GoogleTagManager";
import GoogleMap from "@/components/Contact/GoogleMap";

export default function Page() {

  // State to store the parameters
  const [params, setParams] = useState<{ [key: string]: string }>({});
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Function to parse and set the parameters from URL
    const parseParamsFromUrl = () => {
      const searchParams = new URLSearchParams(window.location.search);
      const paramsObject: { [key: string]: string } = {};
      // Loop through each parameter and set it in the object
      searchParams.forEach((value, key) => {
        paramsObject[key] = value;
        if(key === "showPopup")
          {
            setShowPopup(Boolean(value));
          }
      });
      
      setParams(paramsObject);
    };

    // Call the function when the component mounts
    parseParamsFromUrl();
  }, []);

  
 

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>

     {showPopup && <Popup message="Kindly fill the form and verify e-mail to initiate Download" onClose={handleClosePopup} />}
      <NavbarStyleTwo />

      <PageBannerStyle1
        pageTitle="Contact Us"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Contact Us"
      />

      <ContactForm />


      <ContactInfo />
<GoogleMap/>
      <FooterStyleOne />

      <PaymentOptions phoneNumber={""} />

      <WhatsAppIcon phoneNumber="+971542145104"/>

      <GoogleTagManager gtmId="AW-16545858079"/>
    </>
  );
}
