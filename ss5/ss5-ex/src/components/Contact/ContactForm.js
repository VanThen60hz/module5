import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";

function ContactForm() {
  const initValue = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const validationSchema = {
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .required("Email is required")
      .matches(
        /^[a-zA-Z0-9+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/,
        "Invalid email format"
      ),
    phone: Yup.string().required("Phone is required"),
    message: Yup.string().required("Message is required"),
  };

  return (
    <>
      <div className="container">
        <h1>Contact form</h1>
        <Formik
          initialValues={initValue}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            toast.success("Submitted successfully");
            setTimeout(() => {
              setSubmitting(false);
            }, 3000);
          }}
          validationSchema={Yup.object(validationSchema)}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <Field
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                />
                <ErrorMessage
                  name="name"
                  component="span"
                  style={{ color: "red" }}
                ></ErrorMessage>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <Field
                  type="text"
                  className="form-control"
                  id="email"
                  name="email"
                />

                <ErrorMessage
                  name="email"
                  component="span"
                  style={{ color: "red" }}
                ></ErrorMessage>
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <Field
                  type="text"
                  className="form-control"
                  id="phone"
                  name="phone"
                />
                <ErrorMessage
                  name="phone"
                  component="span"
                  style={{ color: "red" }}
                ></ErrorMessage>
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <Field
                  type="text"
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
              {isSubmitting ? (
                <></>
              ) : (
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default ContactForm;
