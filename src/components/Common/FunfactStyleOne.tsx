"use client";

import React from "react";

const FunfactStyleOne: React.FC = () => {
  return (
    <>
      <div className="funfacts-area pb-75">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-3 col-sm-6 col-md-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <div className="funfacts-box">
                <div className="icon">
                  <i className="ri-download-2-line"></i>
                </div>
                <p>Total Downloads</p>
                <h3>
                  10<span className="sign">M</span>
                </h3>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6 col-md-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <div className="funfacts-box bg1">
                <div className="icon">
                  <i className="ri-star-fill"></i>
                </div>
                <p>Total Reviews</p>
                <h3>
                  799<span className="sign">K</span>
                </h3>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6 col-md-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
              data-aos-once="true"
            >
              <div className="funfacts-box bg2">
                <div className="icon">
                  <i className="ri-global-line"></i>
                </div>
                <p>Worldwide Countries</p>
                <h3>
                  150<span className="sign">+</span>
                </h3>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6 col-md-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="400"
              data-aos-once="true"
            >
              <div className="funfacts-box bg3">
                <div className="icon">
                  <i className="ri-map-pin-user-line"></i>
                </div>
                <p>Active Users</p>
                <h3>
                  5<span className="sign">M</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FunfactStyleOne;
