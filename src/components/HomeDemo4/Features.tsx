"use client";

import React from "react";

const Features: React.FC = () => {
  return (
    <>
      <div className="features-area pt-100 pb-75">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-xl-3 col-lg-3 col-6 col-md-6 xsw-100"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <div className="features-box left">
                <div className="icon">
                  <i className="ri-smartphone-line"></i>
                </div>
                <h3>User Friendly</h3>
                <p>
                  Most Provably best dashboard design for your business you can
                  try.
                </p>
              </div>
            </div>

            <div
              className="col-xl-3 col-lg-3 col-6 col-md-6 xsw-100"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <div className="features-box left">
                <div className="icon bg2">
                  <i className="ri-award-line"></i>
                </div>
                <h3>Award Winning App</h3>
                <p>
                  Most Provably best dashboard design for your business you can
                  try.
                </p>
              </div>
            </div>

            <div
              className="col-xl-3 col-lg-3 col-6 col-md-6 xsw-100"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
              data-aos-once="true"
            >
              <div className="features-box left">
                <div className="icon bg3">
                  <i className="ri-fingerprint-line"></i>
                </div>
                <h3>Privacy Protected</h3>
                <p>
                  Most Provably best dashboard design for your business you can
                  try.
                </p>
              </div>
            </div>

            <div
              className="col-xl-3 col-lg-3 col-6 col-md-6 xsw-100"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="400"
              data-aos-once="true"
            >
              <div className="features-box left">
                <div className="icon bg4">
                  <i className="ri-vip-diamond-line"></i>
                </div>
                <h3>Lifetime Update</h3>
                <p>
                  Most Provably best dashboard design for your business you can
                  try.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
