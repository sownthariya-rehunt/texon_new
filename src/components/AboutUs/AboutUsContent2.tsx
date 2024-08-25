"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutUsContent2: React.FC = () => {
  return (
    <>
      <div className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <span className="sub-title">ABOUT LEAD GENIUS</span>
                <h2>Automated Marketing Mastery</h2>
                <p>
                  An Ultimate WhatsApp Bulk Messaging and Marketing Bot in the
                  UAE for All type of Businesses ! In the dynamic landscape of
                  business communication, staying ahead is not just an advantage
                  - it's a necessity.
                </p>

                <div className="features-text">
                  {/* <h6>Our App</h6> */}
                  <p>
                    Enter LEAD GENIUS, a cutting-edge solution designed to
                    revolutionize how businesses approach WhatsApp bulk
                    messaging and marketing in the United Arab Emirates.
                  </p>
                </div>

                <div className="features-text">
                  {/* <h6>Our Mission</h6> */}
                  <p>
                    Unlock Business Success with WhatsApp BOT! Are you a small
                    business or entrepreneur in the UAE looking for a
                    game-changing solution to elevate your marketing, client
                    support, and revenue? Look no further - WhatsApp BOT is your
                    key to unlocking unparalleled success!
                  </p>
                </div>

                {/* <div className="btn-box">
                  <Link href="/contact" className="default-btn">
                   Get Started
                  </Link>
                  <Link href="/features" className="link-btn">
                    See All Features
                  </Link>
                </div> */}
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              {/* <div
                className="about-image"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="100"
                data-aos-once="true"
              > */}
              <Image
                src="/images/es-aboutus.png"
                alt="about"
                width={605}
                height={786}
              />
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsContent2;
