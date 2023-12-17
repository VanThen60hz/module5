import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import * as ArticleService from "../../services/ArticleService";
import { toast } from "react-toastify";

function ArticleForm({ user, onArticleAddedTime }) {
  const initialValues = {
    title: "",
    user_id: user?.id,
  };

  const validationSchema = {
    title: Yup.string().required("Title is required"),
  };

  const addArticle = async (article) => {
    try {
      await ArticleService.create(article);
      onArticleAddedTime();
      toast.success("Add new article successfully!");
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
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          addArticle(values);
          setTimeout(() => {
            setSubmitting(false);
          }, 3000);
        }}
        validationSchema={Yup.object(validationSchema)}
      >
        {({ isSubmitting }) => (
          <Form className="d-flex ">
            <div className="w-25">
              <label htmlFor="title">Article:</label>
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
                Add
              </button>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
}

export default ArticleForm;
