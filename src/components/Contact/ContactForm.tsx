import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import GoogleMap from "./GoogleMap";
import Popup from "../Common/PopUp";
import Swal from "sweetalert2";

import "./Contact.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

const ContactForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [errorPopup, setErrorPopup] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  const handleCloseErrorPopup = () => {
    setErrorPopup(false);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("https://echoshare.pro/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        setStatus("Email sent successfully!");

        Swal.fire({
          title: status,
          text: "Thank you for providing your contact information, we'll be in touch shortly.",
          icon: "success",
        });
        setShowPopup(true);
        setValues({
          name: "",
          email: "",
          number: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("Failed to send email.");
        Swal.fire({
          title: status,
          text: "Please try again..",
          icon: "error",
        });
        setErrorPopup(true);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("Failed to send email.");
      Swal.fire({
        title: status,
        text: "Please try again..",
        icon: "error",
      });
    }
  };

  return (
    <>
      <div className="contact-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Get in Touch</h2>
            <p>
              An Ultimate WhatsApp Bulk Messaging and Marketing Bot in the UAE
              for All type of Businesses! In the dynamic landscape of business
              communication, staying ahead is not just an advantage, it's a
              necessity.
            </p>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-12 whatsapp2">
                <div></div>
                <div className="hover-container">
                  <a href="https://wa.me/+971542145104" className="p-5">
                    <WhatsAppIcon className="whatsapp1 " />
                  </a>
                  <span className="popup">Click to connect whatsapp</span>
                </div>
                <div className="hover-container">
                  <div className="p-5">
                    <PhoneInTalkIcon className="call1" />
                    <span className="popup"> Mobile No: +971542145104</span>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>

        </div>
        {status && <p>{status}</p>}
      </div>
    </>
  );
};

export default ContactForm;
