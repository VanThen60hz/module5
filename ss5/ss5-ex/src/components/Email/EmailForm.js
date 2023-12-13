import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";

function EmailForm() {
  const navigation = useNavigate();
  const initialValues = {
    to: "",
    title: "",
    message: "",
    file: null,
  };

  const validationSchema = Yup.object({
    to: Yup.string()
      .matches(/^[a-zA-Z0-9+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.-]+$/, {
        message: "Invalid email address",
        excludeEmptyString: true,
      })
      .required("To is required"),
    title: Yup.string().required("Title is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleEmailSubmission = (values) => {
    // Perform the email submission logic here
    // For simplicity, let's just show a success toast
    toast.success("Email sent successfully!!!");
  };

  return (
    <div className="container my-5">
      <h1 className="text-center my-5">Mail form</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          handleEmailSubmission(values);
          setTimeout(() => {
            setSubmitting(false);
          }, 3000);
        }}
        validationSchema={validationSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-3">
              <label htmlFor="to" className="form-label">
                To:
              </label>
              <Field type="text" className="form-control" id="to" name="to" />
              <ErrorMessage
                name="to"
                component="span"
                style={{ color: "red" }}
              ></ErrorMessage>
            </div>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title:
              </label>
              <Field
                type="text"
                className="form-control"
                id="title"
                name="title"
              />
              <ErrorMessage
                name="title"
                component="span"
                style={{ color: "red" }}
              ></ErrorMessage>
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message:
              </label>
              <Field
                as="textarea"
                className="form-control"
                id="message"
                name="message"
              />
              <ErrorMessage
                name="message"
                component="span"
                style={{ color: "red" }}
              ></ErrorMessage>
            </div>
            <div className="mb-3">
              <label htmlFor="file" className="form-label">
                file:
              </label>
              <Field
                type="file"
                className="form-control"
                id="file"
                name="file"
              />
            </div>
            {isSubmitting ? (
              <></>
            ) : (
              <button
                type="submit"
                className="btn btn-primary w-50"
                style={{ display: "block", margin: "auto" }}
              >
                Send
              </button>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default EmailForm;
