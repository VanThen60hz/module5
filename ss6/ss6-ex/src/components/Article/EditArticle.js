import React from "react";
import * as ArticleService from "../../services/ArticleService";
import { toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function EditArticle({ article, onCancel, onUpdate }) {
  const editValue = article;

  const validationSchema = {
    title: Yup.string().required("Title is required"),
  };

  const handleUpdate = async (article) => {
    try {
      await ArticleService.update(article.id, article);
      toast.success("Article updated successfully!");
      onUpdate();
    } catch (error) {
      console.error(error);
      toast.error("Error updating article");
    }
  };

  return (
    <>
      <Formik
        initialValues={editValue}
        onSubmit={(values, { setSubmitting }) => {
          handleUpdate(values);
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
              <>
                <button
                  type="submit"
                  className="btn btn-success"
                  style={{
                    width: "100px",
                    margin: "auto 10px 0px",
                  }}
                >
                  Update
                </button>
                <button
                  onClick={onCancel}
                  className="btn btn-warning"
                  style={{
                    width: "100px",
                    margin: "auto 3px 0px",
                  }}
                >
                  Cancel
                </button>
              </>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
}

export default EditArticle;
