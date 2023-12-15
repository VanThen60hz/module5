import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import * as ContactService from "../../services/ContactService";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { storage } from "../../config/firebaseConfig";

function EditContact() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef();

  const initialValues = {
    id: location?.state?.contact?.id,
    name: location?.state?.contact?.name,
    image: location?.state?.contact?.image,
    email: location?.state?.contact?.email,
    phone: location?.state?.contact?.phone,
  };

  const validationSchema = {
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string().required("Phone is required"),
  };

  const updateContact = async (contact) => {
    try {
      await ContactService.update(contact.id, contact);
      navigate("/contact");
      toast.success("Update contact successfully!");
      console.log(contact);
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

  const handleImageChange = async (e, setFieldValue) => {
    try {
      const selectedFile = e.target.files[0];
      const imageUrl = URL.createObjectURL(selectedFile);
      setSelectedImage(imageUrl);
      setFieldValue("image", selectedFile);
      // console.log(selectedFile);
      console.log(imageUrl);

      // Create a reference to the storage root
      const storageRef = storage.ref();

      // Create a reference to the file in storage
      const imageRef = storageRef.child(`${selectedFile.name}`);

      // Upload the file to Firebase Storage
      const snapshot = await imageRef.put(selectedFile);

      // Get the download URL of the uploaded file
      const downloadURL = await snapshot.ref.getDownloadURL();
      console.log(downloadURL);
      // Update the state and form field with the download URL
      // setSelectedImage(downloadURL);
      setFieldValue("image", downloadURL);
    } catch (error) {
      console.error("Error uploading image to Firebase Storage:", error);
      // Handle the error as needed
    }
  };

  const openFileDialog = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="container my-5">
      <h1>Add contact</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          updateContact(values);
          setTimeout(() => {
            setSubmitting(false);
          }, 3000);
        }}
        validationSchema={Yup.object(validationSchema)}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form className="w-50">
            <div className="mb-3 d-flex align-items-center">
              {/* Chưa xử lý add ảnh do chưa sử dụng firebase */}
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt="Selected Avatar"
                  className="rounded-circle"
                  style={{ width: "100px", marginRight: "20px" }}
                />
              ) : (
                <img
                  className="rounded-circle"
                  src={`${location?.state?.contact?.image}`}
                  alt="Selected Avatar"
                  style={{
                    width: "100px",
                    height: "100px",
                    marginRight: "20px",
                    border: "1px solid black",
                    backgroundColor: "#dedede",
                  }}
                ></img>
              )}
              <button
                type="button"
                className="btn btn-primary"
                onClick={openFileDialog}
              >
                Add Image
              </button>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                style={{ display: "none" }}
                ref={fileInputRef}
                onChange={(e) => handleImageChange(e, setFieldValue)}
              />
              <ErrorMessage
                name="image"
                component="span"
                style={{ color: "red" }}
              />
            </div>
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
              ></ErrorMessage>
            </div>

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
              <label htmlFor="phone" className="form-label">
                Phone:
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
            {isSubmitting ? (
              <></>
            ) : (
              <button
                type="submit"
                className="btn btn-success w-50"
                style={{ display: "block", margin: "auto" }}
              >
                Edit contact
              </button>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default EditContact;
