"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import { Button } from "@mui/material";

const PricingPlanStyle5: React.FC = () => {


    const whatsappNumber = "+971542145104";
    const whatsappMessage = "Hi, I am interested in *Basic* plan,Let me know the next steps .";
    const whatsappMessage1 = "Hi, I am interested in *Standard* plan,Let me know the next steps.";
    const whatsappMessage2 = "Hi, I am interested in *Premium* plan,Let me know the next steps.";
   
    const [isClient, setIsClient] = useState(false)
 
    useEffect(() => {
      setIsClient(true)
    }, [])
   
   
  
    return (
        <>
            <div className="pricing-area package bg-black-color pt-100 pb-75" id="package">
                <div className="container-fluid ps-5 pe-5">
                    <div className="section-title color-white">
                        <span className="sub-title fs-2">PACKAGE & PRICING </span>
                        <h2>No Hidden Charge Applied, Choose Your Plan</h2>
                    </div>

                    <div className="row justify-content-center">
                        <div
                            className="col-lg-3 col-md-6 col-sm-6"
                            data-aos="fade-up"
                            data-aos-duration="800"
                            data-aos-delay="100"
                            data-aos-once="true"
                        >
                            <div className="single-pricing-box">
                                <div className="title">
                                    <h3 className="text-center fs-2">Basic</h3>
                                    <p></p>
                                </div>
                                <div className="price">
                                    AED 150 <span>/Month</span>
                                    <h4>(Billed Yearly)</h4>
                                </div>
                                <Link href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`} >
                                    <Button className="default-btn" >
                                        Purchase Plan
                                    </Button>
                                </Link>

                                <ul className="features-list">
                                    <li>
                                        <i className="ri-check-line"></i> Bulk Individual Messaging
                                    </li>
                                    <li>
                                        <i className="ri-check-line"></i> Bulk WhatsApp Group Messaging
                                    </li>
                                    <li>
                                        <i className="ri-check-line"></i> Contact List Grabber free
                                    </li>
                                    <li>
                                        <i className="ri-check-line"></i> 24/7 Support
                                    </li>
                                    <li>
                                        <i className="ri-close-line"></i> WhatsApp Number Filter
                                    </li>
                                    <li>
                                        <i className="ri-close-line"></i> Grab Chat List
                                    </li>
                                    <li>
                                        <i className="ri-close-line"></i> Google Map Data Extractor
                                    </li>
                                    <li>
                                        <i className="ri-close-line"></i> Auto Chat bot
                                    </li>
                                    <li>
                                        <i className="ri-close-line"></i> Get WhatsApp Group Member
                                    </li>
                                    <li>
                                        <i className="ri-close-line"></i> Poll Results Report
                                    </li>
                                    <li>
                                        <i className="ri-close-line"></i> Campaign Scheduler
                                    </li>
                                    <li>
                                        <i className="ri-close-line"></i> Get Active Group Member Data
                                    </li>
                                    <li>
                                        <i className="ri-close-line"></i> Group Create With Bulk Members
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div
                            className="col-lg-3 col-md-6 col-sm-6"
                            data-aos="fade-up"
                            data-aos-duration="800"
                            data-aos-delay="200"
                            data-aos-once="true"
                        >
                            <div className="single-pricing-box active">
                                <div className="title">
                                    <h3 className="text-center fs-2">Standard</h3>
                                    <p></p>
                                </div>
                                <div className="price">
                                    AED 185 <span>/Month</span>
                                    <h4>(Billed Yearly)</h4>
                                </div>

                               <Link href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage1)}`} >
                                    <Button className="default-btn" >
                                        Purchase Plan
                                    </Button>
                                </Link>

                                <ul className="features-list">
                                    <li>
                                        <i className="ri-check-line"></i> Bulk Individual Messaging
                                    </li>
                                    <li>
                                        <i className="ri-check-line"></i> Bulk WhatsApp Group Messaging
                                    </li>
                                    <li>
                                        <i className="ri-check-line"></i> Contact List Grabber free
                                    </li>
                                    <li>
                                        <i className="ri-check-line"></i> 24/7 Support
                                    </li>
                                    <li>
                                        <i className="ri-check-line"></i> WhatsApp Number Filter
                                    </li>
                                    <li>
                                        <i className="ri-check-line"></i> Grab Chat List
                                    </li>
                                    <li>
                                        <i className="ri-check-line"></i> Google Map Data Extractor
                                    </li>
                                    <li>
                                        <i className="ri-check-line"></i> Auto Chat bot
                                    </li>
                                    <li>
                                        <i className="ri-check-line"></i> Get WhatsApp Group Member
                                    </li>
                                    <li>
                                        <i className="ri-close-line"></i> Poll Results Report
                                    </li>
                                    <li>
                                        <i className="ri-close-line"></i> Campaign Scheduler
                                    </li>
                                    <li>
                                        <i className="ri-close-line"></i> Get Active Group Member Data
                                    </li>
                                    <li>
                                        <i className="ri-close-line"></i> Group Create With Bulk Members
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div
                            className="col-lg-3 col-md-6 col-sm-6"
                            data-aos="fade-up"
                            data-aos-duration="800"
                            data-aos-delay="300"
                            data-aos-once="true"
                        >
                            <div className="single-pricing-box">
                                <div className="title">
                                    <h3 className="text-center fs-2">Premium</h3>
                                    <p></p>
                                </div>
                                <span className="popular">Recommended</span>
                                <div className="price">
                                    AED 210 <span>/Month</span>
                                    <h4>(Billed Yearly)</h4>
                                </div>

                                <Link href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage2)}`} >
                                    <Button className="default-btn">
                                        Purchase Plan
                                    </Button>
                                </Link>

                                <ul className="features-list">
                                    <li>
                                        <i className="ri-check-line"></i> Bulk Individual Messaging
                                    </li>
                                    <li>
                                        <i className="ri-check-line"></i> Bulk WhatsApp Group Messaging
                                    </li>
                                    <li>
                                        <i className="ri-check-line"></i> Contact List Grabber free
                                    </li>
                                    <li>
                                        <i className="ri-check-line"></i> 24/7 Support
                                    </li>
                                    <li>
                                        <i className="ri-check-line"></i> WhatsApp Number Filter
                                    </li>
                                    <li>
                                        <i className="ri-check-line"></i> Grab Chat List
                                    </li>
                                    <li>
                                        <i className="ri-check-line"></i> Google Map Data Extractor
                                    </li>
                                    <li>
                                        <i className="ri-check-line"></i> Auto Chat bot
                                    </li>
                                    <li>
                                        <i className="ri-check-line"></i> Get WhatsApp Group Member
                                    </li>
                                    <li>
                                        <i className="ri-check-line"></i> Poll Results Report
                                    </li>
                                    <li>
                                        <i className="ri-check-line"></i> Campaign Scheduler
                                    </li>
                                    <li>
                                        <i className="ri-check-line"></i> Get Active Group Member Data
                                    </li>
                                    <li>
                                        <i className="ri-check-line"></i> Group Create With Bulk Members
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            className="col-lg-3 col-md-6 col-sm-6"
                            data-aos="fade-up"
                            data-aos-duration="800"
                            data-aos-delay="300"
                            data-aos-once="true"
                        >
                            <div className="single-pricing-box">
                                <div className="title">
                                    <h3 className="text-center fs-2">LifeTime
                                    </h3>
                                    <p></p>
                                </div>
                                <span className="popular">Most Recommended</span>
                                <div className="price">
                                    AED 4500 <span>     </span>
                                    <h4>(One Time)</h4>
                                </div>

                                <Link href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage2)}`} >
                                    <Button className="default-btn">
                                        Purchase Plan
                                    </Button>
                                </Link>

                                <ul className="features-list">
                                    <li>
                                        <i className="ri-check-line"></i> Bulk Individual Messaging
                                    </li>
                                    <li>
                                        <i className="ri-check-line"></i> Bulk WhatsApp Group Messaging
                                    </li>
                                    <li>
                                        <i className="ri-check-line"></i> Contact List Grabber free
                                    </li>
                                    <li>
                                        <i className="ri-check-line"></i> 24/7 Support
                                    </li>
                                    <li>
                                        <i className="ri-check-line"></i> WhatsApp Number Filter
                                    </li>
                                    <li>
                                        <i className="ri-check-line"></i> Grab Chat List
                                    </li>
                                    <li>
                                        <i className="ri-check-line"></i> Google Map Data Extractor
                                    </li>
                                    <li>
                                        <i className="ri-check-line"></i> Auto Chat bot
                                    </li>
                                    <li>
                                        <i className="ri-check-line"></i> Get WhatsApp Group Member
                                    </li>
                                    <li>
                                        <i className="ri-check-line"></i> Poll Results Report
                                    </li>
                                    <li>
                                        <i className="ri-check-line"></i> Campaign Scheduler
                                    </li>
                                    <li>
                                        <i className="ri-check-line"></i> Get Active Group Member Data
                                    </li>
                                    <li>
                                        <i className="ri-check-line"></i> Group Create With Bulk Members
                                    </li>
                                </ul>
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

export default PricingPlanStyle5;
