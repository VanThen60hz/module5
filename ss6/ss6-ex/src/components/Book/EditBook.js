import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import * as BookService from "../../services/BookService";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

function EditBook() {
  const location = useLocation();
  const navigate = useNavigate();

  const initialValues = {
    id: location?.state?.book?.id,
    title: location?.state?.book?.title,
    quantity: location?.state?.book?.quantity,
  };

  const validationSchema = {
    title: Yup.string().required("Title is required"),
    quantity: Yup.number()
      .required("Quantity is required")
      .min(1, "Quantity must be greater than 0"),
  };

  const updateBook = async (book) => {
    try {
      await BookService.update(book.id, book);
      navigate("/library");
      toast.success("Update book successfully!");
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
    <div className="container my-5">
      <h1>Edit book</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          updateBook(values);
          setTimeout(() => {
            setSubmitting(false);
          }, 3000);
        }}
        validationSchema={Yup.object(validationSchema)}
      >
        {({ isSubmitting }) => (
          <Form className="w-50">
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
              <label htmlFor="quantity" className="form-label">
                Quantity:
              </label>
              <Field
                type="number"
                className="form-control"
                id="quantity"
                name="quantity"
              />
              <ErrorMessage
                name="quantity"
                component="span"
                style={{ color: "red" }}
              ></ErrorMessage>
            </div>
            {isSubmitting ? (
              <></>
            ) : (
              <button
                type="submit"
                className="btn btn-success w-50"
                style={{ display: "block", margin: "auto" }}
              >
                Edit book
              </button>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default EditBook;
