"use client";

import React from "react";
import Image from "next/image";

const KeyFeatures: React.FC = () => {
  return (
    <>
      <div className="key-features-area pt-100 pb-75">
        <div className="container">
          <div className="section-title title-with-bg-text">
            <div className="big-title">Features</div>
            <span className="sub-title">KEY FEATURES</span>
            <h2> Best Features Ever</h2>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-xl-4 col-lg-6 col-sm-6 col-md-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <div className="key-features-card">
                <div className="icon">
                  {/* <i className="ri-eye-line"></i> */}
                  <i className="ri-stack-line"></i>
                </div>
                <h3>Bulk Message Sending</h3>
                <p>
                  WhatsApp BOT enables you to effortlessly send bulk messages to
                  new customers,promoting your products or services with a
                  single click.
                </p>
              </div>
            </div>

            <div
              className="col-xl-4 col-lg-6 col-sm-6 col-md-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <div className="key-features-card bg-color-two">
                <div className="icon bg2">
                  <i className="ri-question-answer-line"></i>
                </div>
                <h3>Multi Message Options</h3>
                <p>
                  Each Whatsapp account can be redesigned with 5 different types
                  of messages to make this Bot as Human
                </p>
              </div>
            </div>

            <div
              className="col-xl-4 col-lg-6 col-sm-6 col-md-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
              data-aos-once="true"
            >
              <div className="key-features-card">
                <div className="icon">
                  <i className="ri-group-line"></i>
                </div>
                <h3>Easy Bulk Number Import </h3>
                <p>
                  Import Thousands of Bulk contact numbers from excel or txt
                  file to the BOT in a single click with our Lead Genius
                  tool.
                </p>
              </div>
            </div>

            <div
              className="col-xl-4 col-lg-6 col-sm-6 col-md-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="400"
              data-aos-once="true"
            >
              <div className="key-features-card bg-color-two">
                <div className="icon bg2">
                  <i className="ri-chat-poll-line"></i>
                </div>
                <h3>Poll Options for Feedback</h3>
                <p>
                  Engage audience and gather valuable insights with Effective
                  POLL Questions .
                </p>
              </div>
            </div>

            <div
              className="col-xl-4 col-lg-6 col-sm-6 col-md-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="500"
              data-aos-once="true"
            >
              <div className="key-features-card">
                <div className="icon">
                  <i className="ri-folders-line"></i>
                </div>
                <h3>Group Contact Extractor </h3>
                <p>
                  Extract the all the Numbers present in a Whatsapp Group in ONE
                  CLICK .Expand your network strategically by sharing marketing
                  posts
                </p>
              </div>
            </div>

            <div
              className="col-xl-4 col-lg-6 col-sm-6 col-md-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="600"
              data-aos-once="true"
            >
              <div className="key-features-card bg-color-two">
                <div className="icon bg2">
                  <i className="ri-file-search-line"></i>
                </div>
                <h3>WhatsApp Number Finder</h3>
                <p>
                  Find the account which is having whatsapp account only with
                  One click . Target specific demographics for the maximum
                  impact and reach
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="key-features-shape-1">
          <Image
            src="/images/090ee0ff-60fe-49c9-aee0-002f9b960490.png"
            alt="image"
            width={203}
            height={151}
          />
        </div>
        <div className="key-features-shape-2">
          <Image
            src="/images/090ee0ff-60fe-49c9-aee0-002f9b960490.png"
            alt="image"
            width={149}
            height={153}
          />
        </div>
      </div>
    </>
  );
};

export default KeyFeatures;
