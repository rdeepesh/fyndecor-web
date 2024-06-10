import React, { useState } from "react";
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import Loader from "./Loader";
import moment from "moment";

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
      <div className="enquiry__form px-[15px] md:px-[40px] lg:px-[80px] py-[50px] md:py-[80px]">
        <h2 className="text-[28px] md:text-[36px] text-[color:var(--white)]">
          Crafting Dreams, Designing Homes
        </h2>
        <p className="text-[16px] md:text-[20px] text-[color:var(--black)]">
          Connect with Our Experts Now
        </p>
        <form className="w-full lg:max-w-[70%] pt-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-3">
            <div className="mt-2.5">
              <input
                type="text"
                {...getFieldProps("Name")}
                className="block w-full px-3.5 rounded-md py-2 outline-none text-black shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                placeholder="Name*"
              />
              {errors.Name && touched.Name ? (
                <span className="text-red-500 text-[12px] ml-2">
                  {errors.Name}
                </span>
              ) : null}
            </div>
            <div className="mt-2.5">
              <input
                type="email"
                {...getFieldProps("Email")}
                className="block w-full px-3.5 rounded-md py-2 outline-none text-black shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                placeholder="Email*"
              />
              {errors.Email && touched.Email ? (
                <span className="text-red-500 text-[12px] ml-2">
                  {errors.Email}
                </span>
              ) : null}
            </div>
            <div className="mt-2.5">
              <input
                type="text"
                {...getFieldProps("Mobile")}
                className="block w-full px-3.5 rounded-md py-2 outline-none text-black shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                placeholder="Mobile*"
              />
              {errors.Mobile && touched.Mobile ? (
                <span className="text-red-500 text-[12px] ml-2">
                  {errors.Mobile}
                </span>
              ) : null}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-3 mt-5">
            <div className="mt-2.5">
              <textarea
                {...getFieldProps("Message")}
                className="block w-full px-3.5 rounded-md py-2 outline-none text-black shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                placeholder="Message*"
                rows={1}
              ></textarea>
              {errors.Message && touched.Message ? (
                <span className="text-red-500 text-[12px] ml-2">
                  {errors.Message}
                </span>
              ) : null}
            </div>
            <div className="mt-2.5">
              <button className="block w-full rounded-md px-3.5 py-2 text-white hover:text-[color:var(--primary)] bg-[color:var(--primary)] hover:bg-[color:var(--white)] transition duration-300 ease-in-out">
                Enquire Now
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default EnquiryForm;
