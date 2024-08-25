"use client";

import React from "react"; 

const FeaturesCard: React.FC = () => {
  return (
    <>
      <div className="features-area ptb-100 bg-F7F7FF">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">KEY FEATURES</span>
            <h2> Best Features Ever</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6">
              <div className="single-features-item">
                <div className="icon">
                  <i className="ri-stack-line"></i>
                </div>
                <h3>Bulk Message Sending </h3>
                <p>
                Say goodbye to tedious manual messaging! WhatsApp BOT enables you to effortlessly send bulk messages to new customers, promoting your products or services with a single click.
                </p>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6">
              <div className="single-features-item">
                <div className="icon bg2">
                  <i className="ri-focus-3-line"></i>
                </div>
                <h3>Targeted Campaigns</h3>
                <p>
                Customize your marketing strategy with precision. Segment your audience and deliver targeted messages, ensuring your promotions resonate with the right customers.
                </p>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6">
              <div className="single-features-item">
                <div className="icon bg2">
                  <i className="ri-file-search-line"></i>
                </div>
                <h3>WhatsApp Number Finder </h3>
                <p>
                Find WhatsApp accounts instantly using Lead Genius with targeted demographic filters for optimal impact and outreach.
                </p>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6">
              <div className="single-features-item">
                <div className="icon bg6">
                  <i className="ri-group-line"></i>
                </div>
                <h3> Easy Bulk Number Import</h3>
                <p>
                Import 1000s of  Bulk contact numbers  from excel or txt file to the BOT in a single click
                </p>
              </div>
            </div>
            
            

            <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6">
              <div className="single-features-item">
                <div className="icon bg5">
                  <i className="ri-folders-line"></i>
                </div>
                <h3>Multimedia Attachments </h3>
                <p>
                Share Your marketing & promotional Posts as  images, videos, & documents Easily
                </p>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6">
              <div className="single-features-item">
                <div className="icon bg3">
                  <i className="ri-checkbox-multiple-blank-line"></i>
                </div>
                <h3>Multi-Channel Option</h3>
                <p>
                Manage multiple WhatsApp accounts effortlessly. 10+ Watsapp accounts in one Bot
                </p>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6">
              <div className="single-features-item">
                <div className="icon bg4">
                  <i className="ri-question-answer-line"></i>
                </div>
                <h3> Multi Message Options</h3>
                <p>
                Tailor messages for diverse audience segments. Each Whatsapp account can be redesigned with 5 different types of messages to make this Bot as Human
                </p>
              </div>
            </div>


            <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6">
              <div className="single-features-item">
                <div className="icon bg6">
                  <i className="ri-star-fill"></i>
                </div>
                <h3>Social Media Extractor</h3>
                <p>
                Extract the targeted data  from all the social media to improve your Client search and gain more profits and boost your leads.
                </p>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6">
              <div className="single-features-item">
                <div className="icon bg3">
                  <i className="ri-group-line"></i>
                </div>
                <h3>Group Contact Extractor </h3>
                <p>
                Extract the all the Numbers present in a Whatsapp Group in  ONE CLICK . Expand your network strategically by sharing marketing posts
                </p>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6">
              <div className="single-features-item">
                <div className="icon bg4">
                  <i className="ri-reply-line"></i>
                </div>
                <h3>WhatsApp Auto Reply</h3>
                <p>
                Set up automated responses for prompt communication from the customers
                </p>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6">
              <div className="single-features-item">
                <div className="icon bg5">
                  <i className="ri-map-pin-line"></i>
                </div>
                <h3>Google Map  Data Extractor</h3>
                <p>
                Extract all the Targeted data from Google Maps in ONE CLICK .
                </p>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6 col-sm-6 col-md-6">
              <div className="single-features-item">
                <div className="icon">
                  <i className="ri-chat-poll-line"></i>
                </div>
                <h3>Poll Options for Feedback</h3>
                <p>
                Engage audience and gather valuable insights with Effective
POLL Questions .
                </p>
              </div>
            </div>

            <div className="col-xl-12 col-lg-12 col-sm-12 col-md-12">
              <div className="view-more-box">
                <a
                  href="/contact/"
                  className="default-btn"
                  target="_blank"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesCard;
