"use client";
import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import axios from "axios";
import moment from "moment";
import contactImage from "../assets/images/contact-us-form.png";
import Image from "next/image";
import { MAIL_ID, MOBILE_NO } from "../utils";
import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";

const Modal = () => {
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");
  const pathname = usePathname();

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
      {modal && (
        <dialog className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
          <div className="bg-white mt-[80px] rounded-lg modal-div">
            <div className="flex flex-col items-center relative">
              <div className="modal__us__wrapper">
                <form onSubmit={handleSubmit}>
                  <h3>Contact Us</h3>
                  <p>Crafting Dreams, Designing Homes</p>
                  <div className="input__group">
                    <input {...getFieldProps("Name")} placeholder="Name*" />
                    {errors.Name && touched.Name ? (
                      <span className="err_msg">{errors.Name}</span>
                    ) : null}
                  </div>
                  <div className="input__group">
                    <input
                      type="email"
                      {...getFieldProps("Email")}
                      placeholder="Email*"
                    />
                    {errors.Email && touched.Email ? (
                      <span className="err_msg">{errors.Email}</span>
                    ) : null}
                  </div>
                  <div className="input__group">
                    <input {...getFieldProps("Mobile")} placeholder="Mobile*" />
                    {errors.Mobile && touched.Mobile ? (
                      <span className="err_msg">{errors.Mobile}</span>
                    ) : null}
                  </div>
                  <div className="input__group">
                    <textarea
                      {...getFieldProps("Message")}
                      placeholder="Message Optional"
                      rows={3}
                    ></textarea>
                  </div>
                  <button className="btn">Book Now</button>
                </form>
              </div>
              <div className="close-modal absolute">
                <Link href={pathname}>
                  <button type="button" className="close_btn">
                    X
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
};

export default Modal;
