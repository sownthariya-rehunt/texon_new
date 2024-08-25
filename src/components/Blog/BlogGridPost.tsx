"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const BlogGridPost: React.FC = () => {
  return (
    <>
      <div className="blog-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            {/* --------------------------------------- */}
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="image">
                  <Link
                    href="/blog/five-reasons-to-use-bot"
                    className="d-block"
                  >
                    <Image
                      src="/images/blog/BLOG1-5reasons/ES-BLOG-5reasons-1.png"
                      alt="5reasons-1"
                      width={865}
                      height={645}
                    />
                  </Link>
                  <Link href="/blog/five-reasons-to-use-bot" className="tag">
                    5 Reasons
                  </Link>
                </div>
                <div className="content">
                  <ul className="meta">
                    <li>
                      <i className="ri-time-line"></i> April, 2024
                    </li>
                    <li>
                      {/* <i className="ri-message-2-line"></i>
                      <Link href="/blog/details">(0) Comment</Link> */}
                    </li>
                  </ul>
                  <h3>
                    <Link href="/blog/five-reasons-to-use-bot">
                      Top 5 Reasons to Use WhatsApp Bots for Your Business
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            {/* --------------------------------------- */}
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="image">
                  <Link
                    href="/blog/what-is-targeted-marketing"
                    className="d-block"
                  >
                    <Image
                      src="/images/blog/BLOG3-TargetedMarketing/targetedmarketing.png"
                      alt="5reasons-1"
                      width={865}
                      height={645}
                    />
                  </Link>
                  <Link href="/blog/what-is-targeted-marketing" className="tag">
                    Targeted Marketing
                  </Link>
                </div>
                <div className="content">
                  <ul className="meta">
                    <li>
                      <i className="ri-time-line"></i> May, 2024
                    </li>
                    <li>
                      {/* <i className="ri-message-2-line"></i>
                      <Link href="/blog/details">(0) Comment</Link> */}
                    </li>
                  </ul>
                  <h3>
                    <Link href="/blog/what-is-targeted-marketing">
                      What is Targeted Marketing? Definition, Strategies & Examples
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            {/* --------------------------------------- */}
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="image">
                  <Link
                    href="/blog/bot-automation-human-touch"
                    className="d-block"
                  >
                    <Image
                      src="/images/blog/BLOG2-Botautohumantouch/Blog-2-botautohumantouch-img1.png"
                      alt="botautohumantouch"
                      width={865}
                      height={645}
                    />
                    <br></br>
                  </Link>
                  <Link href="/blog/bot-automation-human-touch" className="tag">
                    Bot with Human Touch
                  </Link>
                </div>
                <div className="content">
                  <ul className="meta">
                    <li>
                      <i className="ri-time-line"></i> April, 2024
                    </li>
                    <li>
                      {/* <i className="ri-message-2-line"></i>
                      <Link href="/blog/details">(0) Comment</Link> */}
                    </li>
                  </ul>
                  <h3>
                    <Link href="/blog/bot-automation-human-touch">
                      Balancing WhatsApp Bot Automation with Human Touch
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            {/* --------------------Apr IY Blog -1------------------- */}
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="image">
                  <Link
                    href="/blog/whatsapp-future"
                    className="d-block"
                  >
                    <Image
                      src="/images/blog/whatsapp-future/whatsapp-future-dp.png"
                      alt="botautohumantouch"
                      width={865}
                      height={645}
                    />
                    <br></br>
                  </Link>
                  <Link href="/blog/whatsapp-future" className="tag">
                    WhatsApp Bots: Future?
                  </Link>
                </div>
                <div className="content">
                  <ul className="meta">
                    <li>
                      <i className="ri-time-line"></i> April, 2024
                    </li>
                    <li>
                      {/* <i className="ri-message-2-line"></i>
                      <Link href="/blog/details">(0) Comment</Link> */}
                    </li>
                  </ul>
                  <h3>
                    <Link href="/blog/whatsapp-future">
                      WhatsApp Bots: The Future of Personalized Interaction
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            {/* --------------------------------------- */}
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="image">
                  <Link
                    href="/blog/whatsapp-num-finder"
                    className="d-block"
                  >
                    <Image
                      src="/images/blog/BLOG5-Whatsnumber-finder/echo_share.png"
                      alt="botautohumantouch"
                      width={865}
                      height={645}
                    />
                    <br></br>
                  </Link>
                  <Link href="/blog/whatsapp-num-finder" className="tag">
                  Whatsapp Number Finder
                  </Link>
                </div>
                <div className="content">
                  <ul className="meta">
                    <li>
                      <i className="ri-time-line"></i> May, 2024
                    </li>
                    <li>
                      {/* <i className="ri-message-2-line"></i>
                      <Link href="/blog/details">(0) Comment</Link> */}
                    </li>
                  </ul>
                  <h3>
                    <Link href="/blog/whatsapp-num-finder">
                    Whatsapp Number Finder
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="image">
                  <Link href="/blog/details" className="d-block">
                    <Image
                      src="/images/blog/blog2.jpg"
                      alt="blog"
                      width={865}
                      height={645}
                    />
                  </Link>
                  <Link href="/blog" className="tag">
                    Agency
                  </Link>
                </div>
                <div className="content">
                  <ul className="meta">
                    <li>
                      <i className="ri-time-line"></i>
                      April 13, 2023
                    </li>
                    <li>
                      <i className="ri-message-2-line"></i>
                      <Link href="/blog/details">(4) Comment</Link>
                    </li>
                  </ul>
                  <h3>
                    <Link href="/blog/details">
                      Design is a plan or specification for the construction of
                      an object
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="image">
                  <Link href="/blog/details" className="d-block">
                    <Image
                      src="/images/blog/blog3.jpg"
                      alt="blog"
                      width={865}
                      height={645}
                    />
                  </Link>
                  <Link href="/blog" className="tag">
                    Marketing
                  </Link>
                </div>
                <div className="content">
                  <ul className="meta">
                    <li>
                      <i className="ri-time-line"></i>
                      April 12, 2023
                    </li>
                    <li>
                      <i className="ri-message-2-line"></i>
                      <Link href="/blog/details">(2) Comment</Link>
                    </li>
                  </ul>
                  <h3>
                    <Link href="/blog/details">
                      The new minimum is a digital magazine with a header
                      featuring a thin
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="image">
                  <Link href="/blog/details" className="d-block">
                    <Image
                      src="/images/blog/blog4.jpg"
                      alt="blog"
                      width={865}
                      height={645}
                    />
                  </Link>
                  <Link href="/blog" className="tag">
                    Branding
                  </Link>
                </div>
                <div className="content">
                  <ul className="meta">
                    <li>
                      <i className="ri-time-line"></i>
                      April 14, 2023
                    </li>
                    <li>
                      <i className="ri-message-2-line"></i>
                      <Link href="/blog/details">(0) Comment</Link>
                    </li>
                  </ul>
                  <h3>
                    <Link href="/blog/details">
                      WordPress is open source software you can use to create a
                      beautiful
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="image">
                  <Link href="/blog/details" className="d-block">
                    <Image
                      src="/images/blog/blog5.jpg"
                      alt="blog"
                      width={865}
                      height={645}
                    />
                  </Link>
                  <Link href="/blog" className="tag">
                    Agency
                  </Link>
                </div>
                <div className="content">
                  <ul className="meta">
                    <li>
                      <i className="ri-time-line"></i>
                      April 13, 2023
                    </li>
                    <li>
                      <i className="ri-message-2-line"></i>
                      <Link href="/blog/details">(4) Comment</Link>
                    </li>
                  </ul>
                  <h3>
                    <Link href="/blog/details">
                      Bootstrap 5 is open source software you can use to create
                      a beautiful
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="image">
                  <Link href="/blog/details" className="d-block">
                    <Image
                      src="/images/blog/blog6.jpg"
                      alt="blog"
                      width={865}
                      height={645}
                    />
                  </Link>
                  <Link href="/blog" className="tag">
                    Marketing
                  </Link>
                </div>
                <div className="content">
                  <ul className="meta">
                    <li>
                      <i className="ri-time-line"></i>
                      April 12, 2023
                    </li>
                    <li>
                      <i className="ri-message-2-line"></i>
                      <Link href="/blog/details">(2) Comment</Link>
                    </li>
                  </ul>
                  <h3>
                    <Link href="/blog/details">
                      Beautiful designs, powerful features, and the freedom to
                      build anything you
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="image">
                  <Link href="/blog/details" className="d-block">
                    <Image
                      src="/images/blog/blog7.jpg"
                      alt="blog"
                      width={865}
                      height={645}
                    />
                  </Link>
                  <Link href="/blog" className="tag">
                    Branding
                  </Link>
                </div>
                <div className="content">
                  <ul className="meta">
                    <li>
                      <i className="ri-time-line"></i>
                      April 14, 2023
                    </li>
                    <li>
                      <i className="ri-message-2-line"></i>
                      <Link href="/blog/details">(0) Comment</Link>
                    </li>
                  </ul>
                  <h3>
                    <Link href="/blog/details">
                      Branding involves developing strategy to create a point of
                      differentiation
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="image">
                  <Link href="/blog/details" className="d-block">
                    <Image
                      src="/images/blog/blog8.jpg"
                      alt="blog"
                      width={865}
                      height={645}
                    />
                  </Link>
                  <Link href="/blog" className="tag">
                    Agency
                  </Link>
                </div>
                <div className="content">
                  <ul className="meta">
                    <li>
                      <i className="ri-time-line"></i>
                      April 13, 2023
                    </li>
                    <li>
                      <i className="ri-message-2-line"></i>
                      <Link href="/blog/details">(4) Comment</Link>
                    </li>
                  </ul>
                  <h3>
                    <Link href="/blog/details">
                      Most designs, powerful features, and the freedom to build
                      anything you
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="image">
                  <Link href="/blog/details" className="d-block">
                    <Image
                      src="/images/blog/blog9.jpg"
                      alt="blog"
                      width={865}
                      height={645}
                    />
                  </Link>
                  <Link href="/blog" className="tag">
                    Marketing
                  </Link>
                </div>
                <div className="content">
                  <ul className="meta">
                    <li>
                      <i className="ri-time-line"></i>
                      April 12, 2023
                    </li>
                    <li>
                      <i className="ri-message-2-line"></i>
                      <Link href="/blog/details">(2) Comment</Link>
                    </li>
                  </ul>
                  <h3>
                    <Link href="/blog/details">
                      Branding involves developing strategy to create a point
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="pagination-area">
                <div className="nav-links">
                  <Link href="#" className="page-numbers current">
                    1
                  </Link>
                  <Link href="#" className="page-numbers">
                    2
                  </Link>
                  <Link href="#" className="page-numbers">
                    3
                  </Link>
                  <Link
                    href="#"
                    className="next page-numbers"
                    title="Next Page"
                  >
                    <i className="ri-arrow-right-line"></i>
                  </Link>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogGridPost;
