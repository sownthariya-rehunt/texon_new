"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutUsContent: React.FC = () => {
  return (
    <>
      <div className="app-about-area pb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="app-about-image">
                <Image
                  src="/images/es home-aboutus.png"
                  alt="image"
                  width={645}
                  height={635}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="app-about-content">
                <div className="big-text">About Us</div>
                <span className="sub-title">ABOUT US</span>
                <h2>Revolutionize Your Business Communication with <br></br>Lead Genius</h2>
                <p>
                Empower Your Business in the UAE with Game-Changing WhatsApp 
                Marketing and Client Support Solutions.
                </p>
                
                <ul className="list">
                  <li>
                    <div className="icon">
                      <i className="ri-medal-fill"></i>
                    </div>
                    {/* <h3>Trusted and Reliable</h3> */}
                    <p>
                    Discover Lead Genius, the cutting-edge solution designed to transform how businesses approach WhatsApp bulk messaging 
                    and marketing in the dynamic landscape of the United Arab Emirates.
                    </p>
                  </li>
                  <li>
                    <div className="icon bg2">
                      <i className="ri-tent-fill"></i>
                    </div>
                    {/* <h3>Cloud Storage</h3> */}
                    <p>
                    Unlock unparalleled success with Lead Genius, the ultimate tool for entrepreneurs and small businesses in the UAE seeking to elevate marketing strategies, 
                    enhance client support, and drive revenue growth effortlessly.
                    </p>
                  </li>
                </ul>
                <div className="btn-box">
                  <Link href="/contact" className="default-btn">
                    Get Started
                  </Link>
                  <Link href="/features" className="link-btn">
                    See All Features
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        {/* <div className="app-about-shape-1">
          <Image
            src="/images/090ee0ff-60fe-49c9-aee0-002f9b960490.png"
            alt="image"
            width={120}
            height={151}
          />
        </div> */}
        <div className="app-about-shape-2">
          <Image
            src="/images/090ee0ff-60fe-49c9-aee0-002f9b960490.png"
            alt="image"
            width={187}
            height={101}
          />
        </div>
        {/* <div className="app-about-shape-3">
          <Image
            src="/images/Untitled design.png"
            alt="image"
            width={77}
            height={51}
          />
        </div> */}
      </div>
    </>
  );
};

export default AboutUsContent;
