"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const PricingPlan: React.FC = () => {
  return (
    <>
      <div className="app-pricing-area pt-100 pb-75">
        <div className="container">
          <div className="pricing-tabs">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-12">
                <div className="app-pricing-section-title">
                  <span className="sub-title">PRICING TABLE</span>
                  <h2>No Hidden Charge Applied, Choose Your Plan</h2>
                  <Link href="/pricing">See All Pricing Plan</Link>
                </div>
              </div>

              <div className="col-lg-8 col-md-12">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="single-app-pricing-box with-border-radius">
                      <div className="title">
                        <h3>Small Team</h3>
                        <p>Powerful & awesome elements</p>
                      </div>
                      <span className="popular">Most Popular</span>
                      <div className="price">
                        $49 <span>/Month</span>
                      </div>

                      <Link
                        href="/sign-in"
                        className="default-btn d-block text-center"
                      >
                        Purchase Plan
                      </Link>

                      <ul className="features-list">
                        <li>
                          <i className="ri-check-line"></i> Up to 10 Website
                        </li>
                        <li>
                          <i className="ri-check-line"></i> Lifetime free
                          Support
                        </li>
                        <li>
                          <i className="ri-check-line"></i> 10 GB Dedicated
                          Hosting free
                        </li>
                        <li>
                          <i className="ri-check-line"></i> 24/7 Support
                        </li>
                        <li>
                          <i className="ri-check-line"></i> SEO Optimized
                        </li>
                        <li>
                          <i className="ri-close-line"></i> Live Support
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="single-app-pricing-box with-border-radius">
                      <div className="title">
                        <h3>Business</h3>
                        <p>Powerful & awesome elements</p>
                      </div>
                      <div className="price">
                        $69 <span>/Month</span>
                      </div>

                      <Link
                        href="/sign-in"
                        className="default-btn d-block text-center"
                      >
                        Purchase Plan
                      </Link>

                      <ul className="features-list">
                        <li>
                          <i className="ri-check-line"></i> Up to 100 Website
                        </li>
                        <li>
                          <i className="ri-check-line"></i> Lifetime free
                          Support
                        </li>
                        <li>
                          <i className="ri-check-line"></i> 100 GB Dedicated
                          Hosting free
                        </li>
                        <li>
                          <i className="ri-check-line"></i> 24/7 Live Support
                        </li>
                        <li>
                          <i className="ri-check-line"></i> SEO Optimized
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape7">
          <Image
            src="/images/shape/shape6.png"
            alt="shape"
            width={221}
            height={125}
          />
        </div>
        <div className="shape8">
          <Image
            src="/images/shape/shape7.png"
            alt="shape"
            width={78}
            height={47}
          />
        </div>
      </div>
    </>
  );
};

export default PricingPlan;
