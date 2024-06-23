"use client";
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import Loader from "./Loader";
import moment from "moment";
import { useState } from "react";

const EnquiryForm = () => {
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
      <section className="enquiry__form__section">
        <div className="form__wrapper">
          <h2>Crafting Dreams, Designing Homes</h2>
          <p>Connect with Our Experts Now</p>
          <form onSubmit={handleSubmit}>
            <div className="form__row">
              <div className="input__wrapper">
                <input
                  type="text"
                  {...getFieldProps("Name")}
                  placeholder="Name*"
                />
                {errors.Name && touched.Name ? (
                  <span className="error__msg">
                    {errors.Name}
                  </span>
                ) : null}
              </div>
              <div className="input__wrapper">
                <input
                  type="email"
                  {...getFieldProps("Email")}
                  placeholder="Email*"
                />
                {errors.Email && touched.Email ? (
                  <span className="error__msg">
                    {errors.Email}
                  </span>
                ) : null}
              </div>
              <div className="input__wrapper">
                <input
                  type="text"
                  {...getFieldProps("Mobile")}
                  placeholder="Mobile*"
                />
                {errors.Mobile && touched.Mobile ? (
                  <span className="error__msg">
                    {errors.Mobile}
                  </span>
                ) : null}
              </div>
              <div className="input__wrapper">
                <textarea
                  {...getFieldProps("Message")}
                  placeholder="Message*"
                  rows={1}
                ></textarea>
                {errors.Message && touched.Message ? (
                  <span className="error__msg">
                    {errors.Message}
                  </span>
                ) : null}
              </div>
              <div className="input__wrapper">
                <button className="btn">
                  Enquire Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default EnquiryForm;
