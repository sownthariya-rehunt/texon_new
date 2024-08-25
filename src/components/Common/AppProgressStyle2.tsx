"use client";

import React from "react";
import Link from "next/link"; 
import Image from "next/image";

const AppProgressStyle2: React.FC = () => {
  return (
    <>
      <div className="app-progress-area bg-black ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              {/* <div className="app-progress-animation-image"> */}
                <div
                  className="app-img"
                  data-aos="fade-down"
                  data-aos-duration="800"
                  data-aos-delay="50"
                >
                  <Image
                    src="/images/es-aboutus-appprogress (1).png"
                    // src="/images/homepage/ES-homepage-banner1.png"
                    alt="app-progress"
                    width={600}
                    height={600}
                  />
                </div>

                {/* <div
                  className="app-img"
                  data-aos="fade-left"
                  data-aos-duration="800"
                  data-aos-delay="100"
                >
                  <Image
                    src="/images/app-progress/app-progress2.png"
                    alt="app-progress"
                    width={82}
                    height={538}
                  />
                </div> */}

                {/* <div
                  className="app-img"
                  data-aos="fade-right"
                  data-aos-duration="800"
                  data-aos-delay="150"
                >
                  <Image
                    src="/images/app-progress/app-progress3.png"
                    alt="app-progress"
                    width={295}
                    height={235}
                  />
                </div>

                <div
                  className="app-img"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="200"
                >
                  <Image
                    src="/images/app-progress/app-progress4.png"
                    alt="app-progress"
                    width={356}
                    height={414}
                  />
                </div>

                <div className="app-img main-image">
                  <Image
                    src="/images/app-progress/progress-main.png"
                    alt="app-progress"
                    width={773}
                    height={649}
                  />
                </div> */}
              {/* </div> */}
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="app-progress-content text-white">
                <span className="sub-title">APP PROGRESS</span>
                <h2>Elevating Business Dynamics through WhatsApp Mastery in the UAE</h2>
                <p>
                Lead Genius is the ultimate solution for businesses in the UAE seeking to revolutionize their WhatsApp marketing and client support. With its advanced features and intuitive interface, it empowers entrepreneurs and small businesses to engage with their audience, drive sales, and elevate customer service like never before. Say hello to unparalleled success with Lead Genius.
                </p>
                <p>
                Lead Genius: Your game-changing WhatsApp marketing tool in the UAE. Elevate your business communication, boost sales, and enhance customer support effortlessly. Get ready to unlock unprecedented success with Lead Genius.
                </p>

                <Link href="/contact" className="default-btn">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppProgressStyle2;
