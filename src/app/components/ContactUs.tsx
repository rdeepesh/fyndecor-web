"use client";
import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import axios from "axios";
import Loader from "../components/Loader";
import moment from "moment";
import contactImage from "../assets/images/contact-us-form.png";
import Image from "next/image";
import { MAIL_ID, MOBILE_NO } from "../utils";

const ContactUS = ({hideContactInfo}: any) => {
  const [loading, setLoading] = useState(false);

  const GOOGLE_SHEET_URL =
    "https://script.google.com/macros/s/AKfycbweahuNeACTTm0KVxw5EkABGQ-T-8vHG74DgRWAQh4seyjigh5RfrUzP9lGpcXpeK0/exec";

  const initialValues = {
    Name: "",
    Email: "",
    Mobile: "",
    Message: "",
  };

  const phoneRegExp = /^[0-9]\d{9}$/;
  const validationSchema = Yup.object().shape({
    Name: Yup.string().trim().required("Name is required"),
    Email: Yup.string()
      .trim()
      .email("Invalid email")
      .required("Email is required"),
    Mobile: Yup.string()
      .matches(phoneRegExp, "Mobile is not valid")
      .required("Mobile is required"),
    Message: Yup.string().trim(),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const formData = new FormData();
      formData.append("Name", values.Name);
      formData.append("Email", values.Email);
      formData.append("Mobile", values.Mobile);
      formData.append("Message", values.Message);
      formData.append("Date", moment().format("MMMM Do YYYY, h:mm:ss a"));
      setLoading(true);
      await axios({
        method: "post",
        url: GOOGLE_SHEET_URL,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then((response) => {
          // console.log("FORM_API_RES:::", response);
          setLoading(false);
          toast.success("Thanks for contacting us.");
          resetForm();
        })
        .catch((error) => {
          setLoading(false);
          console.error("FORM_API_ERR:::", error);
          toast.error("Something went wrong.");
        });
    },
  });

  const { getFieldProps, handleSubmit, errors, touched } = formik;

  return (
    <>
      {loading && <Loader />}
      <div className="contact__us__wrapper">
        <div className="contact__curtain__img">
          <Image src={contactImage} alt="contact-us" />
          <div className="contact__details">
            <h3>We love to hear from you</h3>
            {!hideContactInfo && <ul>
              <li>
                <svg
                  width="26"
                  height="20"
                  viewBox="0 0 26 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.559 12.8171C14.9371 13.2317 14.2146 13.4509 13.4697 13.4509C12.7249 13.4509 12.0024 13.2317 11.3805 12.8171L1.13618 5.98733C1.07963 5.94952 1.02412 5.91016 0.969727 5.86931L0.969727 17.0606C0.969727 18.3437 2.01099 19.362 3.27114 19.362H23.6683C24.9514 19.362 25.9697 18.3207 25.9697 17.0606V5.86926C25.9152 5.91022 25.8596 5.94966 25.8029 5.98753L15.559 12.8171Z"
                    fill="white"
                  />
                  <path
                    d="M1.94873 4.76847L12.193 11.5983C12.5808 11.8568 13.0252 11.986 13.4697 11.986C13.9142 11.986 14.3586 11.8568 14.7464 11.5983L24.9907 4.76847C25.6038 4.36002 25.9697 3.67643 25.9697 2.93864C25.9697 1.67003 24.9376 0.638 23.6691 0.638H3.27036C2.00181 0.638049 0.969728 1.67008 0.969728 2.93986C0.969347 3.30177 1.05855 3.65816 1.22937 3.97723C1.40019 4.29629 1.64733 4.56812 1.94873 4.76847Z"
                    fill="white"
                  />
                </svg>
                <a href={`tel:${MOBILE_NO}`}>{MOBILE_NO}</a>
              </li>
              <li>
                <svg
                  width="25"
                  height="26"
                  viewBox="0 0 25 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.2894 18.8475L20.8006 15.3587C19.5546 14.1126 17.4364 14.6111 16.938 16.2309C16.5642 17.3523 15.3181 17.9753 14.1967 17.7261C11.7047 17.1031 8.3405 13.8634 7.71749 11.2468C7.34369 10.1254 8.0913 8.87936 9.2127 8.50561C10.8325 8.0072 11.3309 5.88899 10.0849 4.64298L6.59609 1.15415C5.59928 0.281948 4.10407 0.281948 3.23186 1.15415L0.864446 3.52157C-1.50297 6.01359 1.11365 12.6174 6.96989 18.4737C12.8261 24.3299 19.43 27.0712 21.922 24.5791L24.2894 22.2117C25.1617 21.2149 25.1617 19.7197 24.2894 18.8475Z"
                    fill="white"
                  />
                </svg>
                <a href={`mailto:${MAIL_ID}`}>{MAIL_ID}</a>
              </li>
            </ul>}
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <h3>Contact Us</h3>
          <p>Crafting Dreams, Designing Homes</p>
          <div className="input__group">
            <input {...getFieldProps("Name")} placeholder="Name*" />
            {errors.Name && touched.Name ? (
              <span className="err_msg">
                {errors.Name}
              </span>
            ) : null}
          </div>
          <div className="input__group">
            <input
              type="email"
              {...getFieldProps("Email")}
              placeholder="Email*"
            />
            {errors.Email && touched.Email ? (
              <span className="err_msg">
                {errors.Email}
              </span>
            ) : null}
          </div>
          <div className="input__group">
            <input {...getFieldProps("Mobile")} placeholder="Mobile*" />
            {errors.Mobile && touched.Mobile ? (
              <span className="err_msg">
                {errors.Mobile}
              </span>
            ) : null}
          </div>
          <div className="input__group">
            <textarea
              {...getFieldProps("Message")}
              placeholder="Message Optional"
              rows={3}
            ></textarea>
          </div>
          <div>
            <button className="btn">Book Now</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactUS;
