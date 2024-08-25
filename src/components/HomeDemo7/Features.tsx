"use client";

import React from "react";


const Features: React.FC = () => {
  return (
    <>
      <div className="features-area pt-100 pb-75">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-xl-3 col-lg-4 col-sm-6 col-md-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <div className="features-card">
                <div className="icon">
                  <i className="ri-stack-line"></i>
                  <div className="number">1</div>
                </div>
                <h3>Bulk Message Sending</h3>
                <p>
                WhatsApp BOT enables you to effortlessly send bulk messages 
                to new customers.
                </p>
              </div>
            </div>
           
            <div
              className="col-xl-3 col-lg-4 col-sm-6 col-md-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <div className="features-card">
                <div className="icon">
                  <i className="ri-reply-line"></i>
                  <div className="number">2</div>
                 
                </div>
                <h3>WhatsApp Auto Reply</h3>
                <p>
                Set up automated responses for prompt communication from the customers
                </p>
              </div>
            </div>

            <div
              className="col-xl-3 col-lg-4 col-sm-6 col-md-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
              data-aos-once="true"
            >
              <div className="features-card">
                <div className="icon">
                  <i className="ri-question-answer-line"></i>
                  <div className="number">3</div>
                </div>
                <h3>Multi Message Options</h3>
                <p>
                Each WhatsApp account can be customized with five 
                distinct message types.
                </p>
              </div>
            </div>

            <div
              className="col-xl-3 col-lg-4 col-sm-6 col-md-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="400"
              data-aos-once="true"
            >
              <div className="features-card">
                <div className="icon">
                  <i className="ri-map-pin-line"></i>
                  <div className="number">4</div>
                </div>
                <h3>
Google Map Data Extractor</h3>
                <p>
                Extract all the Targeted data from Google Maps in ONE CLICK .
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
