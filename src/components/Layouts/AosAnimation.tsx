"use client";

import React from "react";
import AOS from "aos";
import "../../../node_modules/aos/dist/aos.css";
  
const AosAnimation = () => {
 
  React.useEffect(() => {
    AOS.init({
      once: true,
  });
  AOS.refresh();
  }, []);

  return (
    <div></div>
  );
};

export default AosAnimation;
