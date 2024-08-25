"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const RelatedPost: React.FC = () => {
  return (
    <>
      <div className="related-post">
        <h3 className="title">Related Post</h3>

        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-6">
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
                  Branding
                </Link>
              </div>

              <div className="content">
                <ul className="meta">
                  <li>
                    <i className="ri-time-line"></i> April 14, 2023
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

          <div className="col-lg-6 col-md-6">
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
                  Agency
                </Link>
              </div>
              <div className="content">
                <ul className="meta">
                  <li>
                    <i className="ri-time-line"></i> April 13, 2023
                  </li>
                  <li>
                    <i className="ri-message-2-line"></i>
                    <Link href="/blog/details">(4) Comment</Link>
                  </li>
                </ul>
                <h3>
                  <Link href="/blog/details">
                    Design is a plan or specification for the construction of an
                    object
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RelatedPost;
