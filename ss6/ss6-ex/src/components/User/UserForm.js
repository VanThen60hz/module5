import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import * as UserService from "../../services/UserService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function UserForm({ location }) {
  const navigate = useNavigate();

  const initialValues = {
    id: location?.state?.user?.id,
    name: location?.state?.user?.name,
  };

  const validationSchema = {
    name: Yup.string().required("Name is required"),
  };

  const addUser = async (user) => {
    try {
      await UserService.create(user);
      navigate("/user");
      toast.success("Add new user successfully!");
    } catch (error) {
      if (error.response) {
        const responseData = error.response.data;
        toast.error(`Error: ${responseData.message}`);
      } else if (error.request) {
        toast.error("Error: No response received from the server");
      } else {
        toast.error(`Error: ${error.message}`);
      }
      console.error(error);
    }
  };

  const editUser = async (user) => {
    try {
      await UserService.update(user.id, user);
      navigate("/user");
      toast.success("Update user successfully!");
    } catch (error) {
      if (error.response) {
        const responseData = error.response.data;
        toast.error(`Error: ${responseData.message}`);
      } else if (error.request) {
        toast.error("Error: No response received from the server");
      } else {
        toast.error(`Error: ${error.message}`);
      }
      console.error(error);
    }
  };

  return (
    <>
      <h1>User Detail</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          location.state ? editUser(values) : addUser(values);
          setTimeout(() => {
            setSubmitting(false);
          }, 3000);
        }}
        validationSchema={Yup.object(validationSchema)}
      >
        {({ isSubmitting }) => (
          <Form className="d-flex ">
            <div className="w-25">
              <label htmlFor="name" className="form-label">
                Name:
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
            {isSubmitting ? (
              <></>
            ) : (
              <button
                type="submit"
                className="btn btn-success"
                style={{
                  margin: "auto 20px 0px",
                }}
              >
                {location?.state ? "Update" : "Add"}
              </button>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
}

export default UserForm;
