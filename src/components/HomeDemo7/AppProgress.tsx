"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const AppProgress: React.FC = () => {
  return (
    <>
      <div className="new-app-progress-area ptb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="new-app-progress-content">
                <div className="big-text">Progress</div>
                <span className="sub-title">LEAD GENIUS PROGRESS</span>
                <h2>Automated Marketing Mastery</h2>
                <p>
                Your ultimate marketing bot is a revolutionary solution that 
                transforms the way businesses approach marketing and customer engagement.
                It streamlines marketing efforts by automating repetitive tasks such as sending messages, 
                responding to inquiries, and nurturing leads.
                </p>
                <p>
                The bot provides personalized interactions with customers, 
                delivering tailored messages based on their preferences and behavior.
                It can handle large volumes of messages and interactions, making it suitable for 
                businesses of all sizes and industries.
                </p>

                {/* <Link href="/contact" className="default-btn">
                  Get Started
                </Link> */}
              </div>
            </div>

            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <div className="new-app-progress-image text-center">
                <Image
                  src="/images/es-home-progress.png"
                  alt="app-img"
                  width={815}
                  height={588}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="new-app-progress-shape">
          <Image
            src="/images/090ee0ff-60fe-49c9-aee0-002f9b960490.png"
            alt="image"
            width={87}
            height={101}
          />
        </div>
      </div>
    </>
  );
};

export default AppProgress;
