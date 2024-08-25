"use client";

import React from "react";
import Image from "next/image";

const AppDownload: React.FC = () => {
  return (
    <>
      <div className="new-app-download-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="new-app-download-content">
                <div className="big-text">Lead Genius</div>
                <span className="sub-title">REACH NEW CUSTOMERS</span>
                <h2> Our marketing bot seamlessly integrates with existing systems and tools, enhancing efficiency and productivity</h2>
                <p>
                It is user-friendly, allowing businesses to set up and manage the bot with ease, even without technical expertise.
                </p> 
                <p>It works round the clock, ensuring that customers can interact with your business at any time of the day or night.
                </p>

                {/* <div className="btn-box">
                  <a
                    href="https://play.google.com/store/apps"
                    className="playstore-btn"
                    target="_blank"
                  >
                    <Image
                      src="/images/play-store.png"
                      alt="image"
                      width={27}
                      height={30}
                    />
                    Get It On
                    <span>Google Play</span>
                  </a>
                  <a
                    href="https://www.apple.com/app-store/"
                    className="applestore-btn"
                    target="_blank"
                  >
                    <Image
                      src="/images/apple-store.png"
                      alt="image"
                      width={34}
                      height={35}
                    />
                    Download on the
                    <span>Apple Store</span>
                  </a>
                </div> */}
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="new-app-download-image text-end"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="100"
                data-aos-once="true"
              >
                <Image
                  src="/images/ECHOSHARE (1).png"
                  alt="app-img"
                  width={472}
                  height={502}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppDownload;
