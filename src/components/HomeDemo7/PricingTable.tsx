"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
const PricingTable: React.FC = () => {
  return (
    <>
      <div className="app-pricing-area pb-100">
        <div className="container">
          <div className="section-title title-with-bg-text">
            <div className="big-title">Payments</div>
            <span className="sub-title">Payment Methods</span>
            <h2>We support Multiple Payment options</h2>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }} className="pe-5">
            <div className="btn-box my-5">
              <Link href="/contact" className="default-btn">
                Get Started
              </Link>
              {/* <Link href="/features" className="link-btn">
                See All Features
              </Link> */}
            </div>
          </div>
          {/* <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-app-pricing-box">
                {/* <div className="title">
                  <h3>PAYPAL</h3>
                  <p>....</p>
                </div> */}
                {/* <div className="pricing-btn">
                  <Link href="/contact" className="default-btn">
                    Select
                  </Link>
                </div> */}
                {/* <div className="app-about-image">
                  <br></br>
                  <Image
                    src="/images/Home-Payment/Paypal-logo.png"
                    alt="image"
                    width={100}
                    height={100}
                  />
                </div> */}
                {/* <div className="price">
                  $49 <span>/Month</span>
                </div> */}

                {/* <ul className="features-list">
                  <li>
                    <i className="ri-check-line"></i> Up to 10 Website
                  </li>
                  <li>
                    <i className="ri-check-line"></i> Lifetime free Support
                  </li>
                  <li>
                    <i className="ri-check-line"></i> 10 GB Dedicated Hosting
                    free
                  </li>
                  <li>
                    <i className="ri-check-line"></i> 24/7 Hours Support
                  </li>
                  <li>
                    <i className="ri-close-line"></i> SEO Optimized
                  </li>
                  <li>
                    <i className="ri-close-line"></i> Live Support
                  </li>
                </ul> */}
              {/* </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-app-pricing-box"> */}
                {/* <div className="title">
                  <h3>Master Card</h3>
                  <p>.....</p>
                </div> */}
                {/* <div className="pricing-btn">
                  <Link href="/contact" className="default-btn">
                    Select
                  </Link>
                  
                </div> */}
                {/* <div className="app-about-image">
                  <br></br>
                  <Image
                    src="/images/Home-Payment/MasterCard_Logo.svg.png"
                    alt="image"
                    width={100}
                    height={100}
                  />
                </div> */}
                {/* <div className="price">
                  $49 <span>/Month</span>
                </div> */}
                {/* <ul className="features-list">
                  <li>
                    <i className="ri-check-line"></i> Up to 10 Website
                  </li>
                  <li>
                    <i className="ri-check-line"></i> Lifetime free Support
                  </li>
                  <li>
                    <i className="ri-check-line"></i> 10 GB Dedicated Hosting
                    free
                  </li>
                  <li>
                    <i className="ri-check-line"></i> 24/7 Hours Support
                  </li>
                  <li>
                    <i className="ri-close-line"></i> SEO Optimized
                  </li>
                  <li>
                    <i className="ri-close-line"></i> Live Support
                  </li>
                </ul> */}
              {/* </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-app-pricing-box"> */}
                {/* <div className="title">
                  <h3>VISA</h3>
                  <p>....</p>
                </div> */}
                {/* <div className="pricing-btn">
                  <Link href="/contact" className="default-btn">
                    Select
                  </Link>
                </div> */}

{/* 
                <div className="app-about-image">
                  <br></br>
                  <Image
                    src="/images/Home-Payment/Visadebitcardpng-1599584312349.png"
                    alt="image"
                    width={100}
                    height={100}
                  />
                </div> */}




                {/* <div className="price">
                  $49 <span>/Month</span>
                </div> */}
                {/* <ul className="features-list">
                  <li>
                    <i className="ri-check-line"></i> Up to 10 Website
                  </li>
                  <li>
                    <i className="ri-check-line"></i> Lifetime free Support
                  </li>
                  <li>
                    <i className="ri-check-line"></i> 10 GB Dedicated Hosting
                    free
                  </li>
                  <li>
                    <i className="ri-check-line"></i> 24/7 Hours Support
                  </li>
                  <li>
                    <i className="ri-close-line"></i> SEO Optimized
                  </li>
                  <li>
                    <i className="ri-close-line"></i> Live Support
                  </li>
                </ul> */}
              </div>
            </div>

            {/* <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-app-pricing-box active">
                <div className="title">
                  <h3>Small Team</h3>
                  <p>Powerful & awesome elements</p>
                </div>
                <span className="popular">Most Popular</span>
                <div className="price">
                  $59 <span>/Month</span>
                </div>
                <div className="pricing-btn">
                  <Link href="#" className="default-btn">
                    Purchase Plan
                  </Link>
                </div>
                <ul className="features-list">
                  <li>
                    <i className="ri-check-line"></i> Up to 10 Website
                  </li>
                  <li>
                    <i className="ri-check-line"></i> Lifetime free Support
                  </li>
                  <li>
                    <i className="ri-check-line"></i> 10 GB Dedicated Hosting
                    free
                  </li>
                  <li>
                    <i className="ri-check-line"></i> 24/7 Hours Support
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

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-app-pricing-box">
                <div className="title">
                  <h3>Business</h3>
                  <p>Powerful & awesome elements</p>
                </div>
                <div className="price">
                  $69 <span>/Month</span>
                </div>
                <div className="pricing-btn">
                  <Link href="#" className="default-btn">
                    Purchase Plan
                  </Link>
                </div>
                <ul className="features-list">
                  <li>
                    <i className="ri-check-line"></i> Up to 10 Website
                  </li>
                  <li>
                    <i className="ri-check-line"></i> Lifetime free Support
                  </li>
                  <li>
                    <i className="ri-check-line"></i> 10 GB Dedicated Hosting
                    free
                  </li>
                  <li>
                    <i className="ri-check-line"></i> 24/7 Hours Support
                  </li>
                  <li>
                    <i className="ri-check-line"></i> SEO Optimized
                  </li>
                  <li>
                    <i className="ri-check-line"></i> Live Support
                  </li>
                </ul>
              </div> 
            </div> */}
          {/* </div> */} 
          {/* <div style={{ display: "flex", justifyContent: "center" }} className="pe-5">
            <div className="btn-box my-5">
              <Link href="/contact" className="default-btn">
                Get Started
              </Link> */}
              {/* <Link href="/features" className="link-btn">
                See All Features
              </Link> */}
            {/* </div> */}
          {/* </div> */}
        {/* </div>
      </div> */}
    </>
  );
};

export default PricingTable;
