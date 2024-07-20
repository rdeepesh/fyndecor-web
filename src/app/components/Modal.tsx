"use client";
import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import axios from "axios";
import moment from "moment";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { modalOpen } from "../lib/features/modalSlice";
import Loader from "./Loader";

const Modal = () => {
  const modal = useAppSelector((state: any) => state.modal.open);
  const dispatch = useAppDispatch();

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
        <>
        {loading && <Loader />}
        <dialog className="modal__popup">
          <div className="modal__div">
            <div className="inner__box">
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
                <button type="button" className="close_btn" onClick={()=>dispatch(modalOpen({open: false}))}>
                  X
                </button>
              </div>
            </div>
          </div>
        </dialog>
        </>
      )}
    </>
  );
};

export default Modal;
