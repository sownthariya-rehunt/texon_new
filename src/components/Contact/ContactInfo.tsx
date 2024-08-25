"use client";

import React from "react";

const ContactInfo: React.FC = () => {


  const gridContainerStyle = {
    display: 'grid',
   
    gridTemplateColumns: 'auto auto',
    fontSize:18
    
  };
  return (
    <>
      <div className="contact-info-area pb-100 ">
        <div className="container">
          <div className="contact-info-inner rounded-5">
            <h2>Have any question in mind please call or mail us</h2>

            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-contact-info-box">
                  <div className="icon bg1">
                    <i className="ri-customer-service-2-line"></i>
                  </div>
                 



<div className="grid-container" style={gridContainerStyle}>
                  <div className="grid-item">US :</div>
                  <div className="grid-item"><a href="tel:+1(707)3693990">+ 1(917) 619-7474</a></div>
               
                  <div className="grid-item"> UAE :</div>
                  <div className="grid-item"> 
                    {/* <a href="tel:+9710542145102">+971 54 214 5102</a>
                      <br /> */}
                      <a href="tel:+9710542145103">+971 54 214 5104</a>
                      <br />
                      {/* <a href="tel:+9710585901002">+971 58 590 1002</a> */}
                      </div>
                </div>
              </div>
                </div>

                

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-contact-info-box">
                  <div className="icon">
                    <i className="ri-earth-line"></i>
                  </div>
                  {/* <h3>
                    <a href="mailto:esp@raimsdigital.com">
                      esp@raimsdigital.com
                    </a>
                  </h3>
                  <h3>
                    <a href="mailto:marketing@raimsdigital.com">
                      marketing@raimsdigital.com
                    </a>
                  </h3> */}
                  <h3>
                    <a href="mailto:info@raimsdigital.com">
                      info@leadgeniusdubai.com
                    </a>
                  </h3>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-contact-info-box">
                  <div className="icon bg2">
                    <i className="ri-map-pin-line"></i>
                  </div>
                  <h3 className="text-center">
                    B 26, Khalidiya Tower B,<br/>Back side of Rotana Mall,<br/> Al
                    Khalidiya, Abu Dhabi,<br/> United Arab Emirates<br/>
                  </h3>
                </div>
              </div>
            </div>

            <div className="lines">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
