"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const BestAppEver: React.FC = () => {
  return (
    <>
      <div className="app-ever-area pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="app-ever-content with-left-zero">
                <h2>Most Probably You Are Getting Best App Ever</h2>
                <p>
                  Cloud based storage for your data backup just log in with your
                  mail account from play store and using whatever you want for
                  your business purpose orem ipsum dummy text. Never missyour
                  chance its just began.
                </p>

                <ul className="list">
                  <li>
                    <div className="icon bg3 rounded-circle">
                      <i className="ri-download-cloud-2-line"></i>
                    </div>
                    <h3>Free Download App</h3>
                    <p>
                      Most provabily best you can trust on it, just log in with
                      your mail account from play store and using whatever you
                      want for your business.
                    </p>
                  </li>
                  <li>
                    <div className="icon rounded-circle">
                      <i className="ri-award-line"></i>
                    </div>
                    <h3>Trusted and Reliable</h3>
                    <p>
                      Most provabily best you can trust on it, just log in with
                      your mail account from play store and using whatever you
                      want for your business.
                    </p>
                  </li>
                  <li>
                    <div className="icon bg3 rounded-circle">
                      <i className="ri-cloud-line"></i>
                    </div>
                    <h3>Cloud Storage</h3>
                    <p>
                      Just log in with your mail account from play store and
                      using whatever you want for your business purpose.
                    </p>
                  </li>
                </ul>

                <div className="btn-box">
                  <Link href="/app-download" className="default-btn">
                    Start Free Trial
                  </Link>
                  <Link href="/features" className="link-btn">
                    See All Features
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="app-ever-wrap-image">
                <Image
                  src="/images/home-7-8-9/app-ever/app-ever-2.png"
                  alt="image"
                  width={707}
                  height={684}
                />
                <div className="wrap-shape">
                  <Image
                    src="/images/home-7-8-9/app-ever/shape-2.png"
                    alt="image"
                    width={1215}
                    height={1296}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestAppEver;
