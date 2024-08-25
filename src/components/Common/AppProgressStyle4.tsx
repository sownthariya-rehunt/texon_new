"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const AppProgressStyle4: React.FC = () => {
  return (
    <>
      <div className="app-progress-area pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="app-progress-image text-center">
                <Image
                  src="/images/app/app-img2.png"
                  alt="app-img"
                  width={720}
                  height={583}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="app-progress-content">
                <span className="sub-title">APP PROGRESS</span>
                <h2>Set Up The Challenges and Track Your Progress</h2>
                <p>
                  Cloud based storage for your data backup just log in with your
                  mail account from play store and using whatever you want for
                  your business purpose orem ipsum dummy text. never missyour
                  chance its just began. backup just log in with your mail
                  account from.
                </p>
                <p>
                  Most provabily best for your data backup just log in with your
                  mail account from play store and using whatever you want for
                  your business purpose orem ipsum dummy backup just log in with
                  your mail account from.
                </p>

                <Link href="/sign-in" className="default-btn">
                  Start Free Trial
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppProgressStyle4;
