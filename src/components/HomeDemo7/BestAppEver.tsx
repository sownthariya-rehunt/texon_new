"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const BestAppEver: React.FC = () => {
  return (
    <>
      <div className="app-ever-area ptb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="app-ever-image">
                <Image
                  src="/images/es-aboutus-appprogress.png"
                  alt="image"
                  width={817}
                  height={727}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="app-ever-content">
                <h2> You Are Getting Best Solution Ever</h2>
                <p>Your groundbreaking marketing bot offers a transformative
                   approach to how businesses handle marketing and customer 
                   engagement. It simplifies marketing processes by automating tasks like message 
                  delivery, inquiry responses, and lead nurturing.
                </p>
                <ul className="list">
                  <li>
                    <div className="icon bg2">
                      <i className="ri-stack-line"></i>
                    </div>
                    <h3>Bulk Message Sending</h3>
                    <p>
                    Say goodbye to tedious manual messaging! WhatsApp BOT 
                    enables you to effortlessly send bulk messages to new customers,
                    promoting your products or services with a single click.
                    </p>
                  </li>
                  
                  <li>
                    <div className="icon">
                      <i className="ri-folders-line"></i>
                    </div>
                    <h3>Multimedia Attachments</h3>
                    <p>
                    Easily share your marketing and promotional posts in various 
                    formats such as images, videos, and documents. Our platform 
                    simplifies the process, allowing you to reach your audience 
                    effectively across different channels.
                    </p>
                  </li>

                  <li>
                    <div className="icon bg2">
                      <i className="ri-focus-3-line"></i>
                    </div>
                    <h3>Targeted Campaigns</h3>
                    <p>
                    Customize your marketing strategy with precision. 
                    Segment your audience and deliver targeted messages, 
                    ensuring your promotions resonate with the right customers.
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

        <div className="app-ever-shape-1">
          <Image
            src="/images/090ee0ff-60fe-49c9-aee0-002f9b960490.png"
            alt="image"
            width={94}
            height={116}
          />
        </div>
      </div>
    </>
  );
};

export default BestAppEver;
