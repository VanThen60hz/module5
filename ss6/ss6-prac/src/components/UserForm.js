import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as UserService from "../services/UserService";
import "bootstrap/dist/css/bootstrap.min.css";

function UserForm() {
  const navigation = useNavigate();
  const { state } = useLocation();
  const isEditing = state?.user?.id !== undefined;
  const initialValues = {
    id: state?.user?.id || "",
    name: state?.user?.name || "",
    birthday: state?.user?.birthday || "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    birthday: Yup.date().required("Birthday is required"),
  });

  const handleUserSubmit = async (values, { setSubmitting }) => {
    try {
      if (isEditing) {
        await updateUser(values);
        toast.success("User updated successfully");
      } else {
        await createUser(values);
        toast.success("User created successfully");
      }
      navigation("/users");
    } catch (error) {
      console.error(error);
      toast.error("Error processing user");
    } finally {
      setSubmitting(false);
    }
  };

  const createUser = async (newUser) => {
    try {
      await UserService.addUser(newUser);
    } catch (e) {
      console.error(e);
      throw e;
    }
  };

  const updateUser = async (updatedUser) => {
    try {
      await UserService.updateUser(updatedUser);
    } catch (e) {
      console.error(e);
      throw e;
    }
  };

  return (
    <div className="container my-5">
      <h1 className="text-center my-5">
        {isEditing ? "Edit User" : "Create User"}
      </h1>
      <Formik
        key={initialValues.id}
        initialValues={initialValues}
        onSubmit={handleUserSubmit}
        validationSchema={validationSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-3">
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
              />
            </div>
            <div className="mb-3">
              <label htmlFor="birthday" className="form-label">
                Birthday:
              </label>
              <Field
                type="date"
                className="form-control"
                id="birthday"
                name="birthday"
              />
              <ErrorMessage
                name="birthday"
                component="span"
                style={{ color: "red" }}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-50"
              style={{ display: "block", margin: "auto" }}
              disabled={isSubmitting}
            >
              {isSubmitting
                ? "Doing..."
                : isEditing
                ? "Save Changes"
                : "Create User"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default UserForm;
