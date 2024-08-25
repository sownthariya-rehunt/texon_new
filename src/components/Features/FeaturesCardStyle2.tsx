"use client";

import React from "react"; 

const FeaturesCardStyle2: React.FC = () => {
  return (
    <>
      <div className="features-area pt-100 pb-75">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-6 col-md-6 xsw-100">
              <div className="single-features-box">
                <div className="icon">
                  <i className="ri-smartphone-line"></i>
                </div>
                <h3>TARGETED OUTREACH</h3>
                <p>
                Crafting personalized messages for each customer is now a breeze. Lead Genius allows you to segment your audience and tailor your marketing posts accordingly.
                </p>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-6 col-md-6 xsw-100">
              <div className="single-features-box">
                <div className="icon bg2">
                  <i className="ri-award-line"></i>
                </div>
                <h3>PERSONALIZED IMPACT</h3>
                <p>
                Elevate your customer engagement strategy by personalized connections with each interaction, thereby not only driving higher conversion rates but also fostering customer satisfaction.
                </p>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-6 col-md-6 xsw-100">
              <div className="single-features-box">
                <div className="icon bg3">
                  <i className="ri-fingerprint-line"></i>
                </div>
                <h3>SAVE TIME & MONEY</h3>
                <p>
                Time is money, and we value both. Imagine the hours saved when your marketing posts are automatically sent to your extensive customer list with just a click.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesCardStyle2;
