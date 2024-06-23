"use client";
import React, { useState } from "react";
import CommonPageSection from "../components/CommonPageSection";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import axios from "axios";
import Loader from "../components/Loader";
import moment from "moment";

const ContactUS = () => {
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
    Message: Yup.string().trim().required("Message is required"),
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
      formData.append("Date", moment().format('MMMM Do YYYY, h:mm:ss a'));
      setLoading(true);
      await axios({
        method: "post",
        url: GOOGLE_SHEET_URL,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then((response) => {
          // console.log("FORM_API_RES:::", response);
          toast.success("Thanks for contacting us.");
          resetForm();
          setLoading(false);
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
      <CommonPageSection pageTitle="Contact Us" />
      <div className="mx-[40px] lg:mx-[80px] grid md:grid-cols-2 gap-16 items-center relative overflow-hidden p-[20px] lg:p-[100px] shadow-2xl rounded-3xl max-w-6xl mx-auto bg-white my-[100px] before:absolute before:right-0 before:w-[350px] before:bg-[var(--primary)] before:h-full max-md:before:hidden">
        <div>
          <h2 className="f1 text-[36px]">Get In Touch</h2>
          <p className="text-[16px] text-gray-600 mt-3">
            Have a specific inquiry or looking to explore new opportunities? Our
            experienced team is ready to engage with you.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4 mt-8">
              <input
                {...getFieldProps("Name")}
                placeholder="Name*"
                className="px-2 py-3 bg-white w-full text-sm border-b-2 focus:border-[#333] outline-none"
              />
              {errors.Name && touched.Name ? (
                <span className="text-red-500 text-[12px] ml-2">
                  {errors.Name}
                </span>
              ) : null}
              <input
                type="email"
                {...getFieldProps("Email")}
                placeholder="Email*"
                className="px-2 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#333] outline-none"
              />
              {errors.Email && touched.Email ? (
                <span className="text-red-500 text-[12px] ml-2">
                  {errors.Email}
                </span>
              ) : null}
              <input
                {...getFieldProps("Mobile")}
                placeholder="Mobile*"
                className="px-2 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#333] outline-none"
              />
              {errors.Mobile && touched.Mobile ? (
                <span className="text-red-500 text-[12px] ml-2">
                  {errors.Mobile}
                </span>
              ) : null}
              <textarea
                {...getFieldProps("Message")}
                placeholder="Message*"
                className="px-2 pt-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#333] outline-none"
                rows="5"
              ></textarea>
              {errors.Message && touched.Message ? (
                <span className="text-red-500 text-[12px] ml-2">
                  {errors.Message}
                </span>
              ) : null}
            </div>
            <button className="mt-8 flex items-center justify-center btn__primary w-full">
              <svg
                className="w-[20px] mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M1.94607 9.31543C1.42353 9.14125 1.4194 8.86022 1.95682 8.68108L21.043 2.31901C21.5715 2.14285 21.8746 2.43866 21.7265 2.95694L16.2733 22.0432C16.1223 22.5716 15.8177 22.59 15.5944 22.0876L11.9999 14L17.9999 6.00005L9.99992 12L1.94607 9.31543Z"></path>
              </svg>
              Send Message
            </button>
          </form>
          <ul className="mt-4 flex justify-center lg:space-x-6 max-lg:flex-col max-lg:items-center max-lg:space-y-2 ">
            <li className="flex items-center transition duration-300 ease-in-out hover:text-[color:var(--primary)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                fill="currentColor"
                viewBox="0 0 479.058 479.058"
              >
                <path
                  d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                  data-original="#000000"
                />
              </svg>
              <a
                href="mailto:info@fyndecor.com"
                className="text-current text-sm ml-3"
              >
                <strong>info@fyndecor.com</strong>
              </a>
            </li>
            <li className="flex items-center text-current transition duration-300 ease-in-out hover:text-[color:var(--primary)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                fill="currentColor"
                viewBox="0 0 482.6 482.6"
              >
                <path
                  d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zm-72.6-216.6c1.2-13.3 6.3-24.4 15.9-34l37.2-37.2c5.8-5.6 12.2-8.5 18.4-8.5 6.1 0 12.3 2.9 18 8.7 6.7 6.2 13 12.7 19.8 19.6 3.4 3.5 6.9 7 10.4 10.6l29.8 29.8c6.2 6.2 9.4 12.5 9.4 18.7s-3.2 12.5-9.4 18.7c-3.1 3.1-6.2 6.3-9.3 9.4-9.3 9.4-18 18.3-27.6 26.8l-.5.5c-8.3 8.3-7 16.2-5 22.2.1.3.2.5.3.8 7.7 18.5 18.4 36.1 35.1 57.1 30 37 61.6 65.7 96.4 87.8 4.3 2.8 8.9 5 13.2 7.2 4 2 7.7 3.9 11 6 .4.2.7.4 1.1.6 3.3 1.7 6.5 2.5 9.7 2.5 8 0 13.2-5.1 14.9-6.8l37.4-37.4c5.8-5.8 12.1-8.9 18.3-8.9 7.6 0 13.8 4.7 17.7 8.9l60.3 60.2c12 12 11.9 25-.3 37.7-4.2 4.5-8.6 8.8-13.3 13.3-7 6.8-14.3 13.8-20.9 21.7-11.5 12.4-25.2 18.2-42.9 18.2-1.7 0-3.5-.1-5.2-.2-32.8-2.1-63.3-14.9-86.2-25.8-62.2-30.1-116.8-72.8-162.1-127-37.3-44.9-62.4-86.7-79-131.5-10.3-27.5-14.2-49.6-12.6-69.7z"
                  data-original="#000000"
                ></path>
              </svg>
              <a href="tel:+919818010701" className="text-current text-sm ml-3">
                <strong>+919818010701</strong>
              </a>
            </li>
          </ul>
        </div>
        <div className="z-10 relative h-full max-md:min-h-[350px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1046.5116034066!2d77.00387844320431!3d28.49376598963947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDI5JzM3LjIiTiA3N8KwMDAnMTQuMSJF!5e0!3m2!1sen!2sin!4v1715523566235!5m2!1sen!2sin"
            className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default ContactUS;
