// Footer Component Style File Path: public/css/pages-and-components-css/footer.scss
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./style.css";

const FooterStyleOne: React.FC = () => {
  
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="footer-area">
        <div className="container">
          <div className="footer-content">
            <Link href="/" className="logo">
            <div className="bgclr p-4">
              <Image
                src="/images/Logo3.png"
                alt="logo"
                width={138}
                height={44}
              />
              </div>
            </Link>

            <ul className="social-links">
              <li>
                <a href="https://www.facebook.com/EchoSharePro/" target="_blank">
                  <i className="ri-facebook-fill"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/echo_share_pro/" target="_blank">
                  <i className="ri-instagram-fill"></i>
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@echo_share_pro" target="_blank">
                  <i className="ri-tiktok-fill"></i>
                </a>
              </li>
              {/* <li>
                <a href="https://twitter.com/" target="_blank">
                  <i className="ri-twitter-fill"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/" target="_blank">
                  <i className="ri-linkedin-fill"></i>
                </a>
              </li>
              <li>
                <a href="https://www.messenger.com/" target="_blank">
                  <i className="ri-messenger-fill"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/" target="_blank">
                  <i className="ri-github-fill"></i>
                </a>
              </li> */}
            </ul>

            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/about-simple" className="nav-link">
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/features" className="nav-link">
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/blog" className="nav-link">
                 Blogs
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/how-it-works/" className="nav-link">
                  Why choose us ?
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>

            <p className="copyright">
              Copyright &copy; {currentYear} <strong>Lead Genius</strong>. 
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterStyleOne;
