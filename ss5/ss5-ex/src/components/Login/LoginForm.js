import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";

function LoginForm() {
  const navigation = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = {
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string().required("Password is required"),
  };

  const handleLogin = (values) => {
    if (values.email === "admin@gmail.com" && values.password === "letmein") {
      navigation("/employee", { state: { account: { email: values.email } } });
      toast.success("Login successfully!");
    } else {
      toast.error("Login failed! Please enter the right email and password!");
    }
  };

  return (
    <div className="container my-5">
      <h1 className="text-center my-5">Login page</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          // console.log(values);
          handleLogin(values);
          setTimeout(() => {
            setSubmitting(false);
          }, 3000);
        }}
        validationSchema={Yup.object(validationSchema)}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email:
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
              <label htmlFor="password" className="form-label">
                Password:
              </label>
              <Field
                type="password"
                className="form-control"
                id="password"
                name="password"
              />
              <ErrorMessage
                name="password"
                component="span"
                style={{ color: "red" }}
              ></ErrorMessage>
            </div>
            {isSubmitting ? (
              <></>
            ) : (
              <button
                type="submit"
                className="btn btn-primary w-50"
                style={{ display: "block", margin: "auto" }}
              >
                Gửi đi
              </button>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default LoginForm;
