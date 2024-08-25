// Navbar Component Style File Path: public/css/pages-and-components-css/navbar.scss
"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import MenuItem from "./MenuItem";
import { menus } from "../../../libs/menus";
import MegaMenu from "./MegaMenu";
import Popup from "../Common/PopUp";
import "./LayoutNav.css";
import logo from "../../../public/images/Logo3.png"

const NavbarStyleTwo: React.FC = () => {
  const [menu, setMenu] = useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };

  const [showPopup, setShowPopup] = useState(false);
  const [errorPopup, setErrorPopup] = useState(false);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleCloseErrorPopup = () => {
    setErrorPopup(false);
  };

  // const handleDownload = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Handle download logic if necessary
  //   console.log("Download button clicked");
  //   window.location.href = "/EchoshareSetup-V10.msi";
  // };

  useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId?.classList.add("is-sticky");
      } else {
        elementId?.classList.remove("is-sticky");
      }
    });
  }, []);

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area navbar-style-two">
        <div className="texap-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light bg-light">
              <Link href="/" className="navbar-brand">
                <Image
                  src={logo}
                  alt="logo"
                  width={80}
                  height={34}
                />
              </Link>
              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  {menus.map((menuItem) => (
                    <MenuItem key={menuItem.label} {...menuItem} />
                  ))}

                  {/* <MegaMenu /> */}
                </ul>
              </div>

              {/* <div className="others-options">
                <a href="/EchoshareSetup-V10.msi" download>
                  <button className="default-btn">
                    <i className="ri-download-line"></i> Download
                  </button>
                </a>
              </div> */}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarStyleTwo;
