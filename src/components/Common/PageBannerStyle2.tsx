"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface PageBannerStyle1Props {
  pageTitle: string;
  homePageUrl: string;
  homePageText: string;
  activePageText: string;
}

const PageBannerStyle2: React.FC<PageBannerStyle1Props> = ({
  pageTitle,
  homePageUrl,
  homePageText,
  activePageText,
}) => {
  return (
    <>
      <div className="page-title-area page-title-style-two">
        <div className="container">
          <div className="page-title-content">
            <h2>{pageTitle}</h2>
            <ul>
              <li>
                <Link href={homePageUrl}>{homePageText}</Link>
              </li>
              <li>{activePageText}</li>
            </ul>
          </div>
        </div>

        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <div className="banner-shape1">
          <Image
            src="/images/shape/shape9.png"
            alt="image"
            width={121}
            height={362}
          />
        </div>
      </div>
    </>
  );
};

export default PageBannerStyle2;
