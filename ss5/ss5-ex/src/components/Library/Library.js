import { useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function Library() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Sách 1",
      number: 10,
    },
    {
      id: 2,
      title: "Sách 2",
      number: 5,
    },
    {
      id: 3,
      title: "Sách 3",
      number: 7,
    },
  ]);

  const [editingBook, setEditingBook] = useState();
  const [deletingBook, setDeletingBook] = useState(null);

  const initialValues = {
    title: "",
    number: "",
  };

  const validationSchema = {
    title: Yup.string().required("Title is required"),
    number: Yup.number()
      .required("Number is required")
      .min(0, "Number must be greater than or equal to 0"),
  };

  const handleEdit = (id, title, number) => {
    console.log(id, title, number);
    setEditingBook({
      id: id,
      title: title,
      number: number,
    });
  };

  const handleSubmit = (values) => {
    if (editingBook) {
      const updateBooks = books.map((book) =>
        book.id === editingBook.id ? { ...editingBook, ...values } : book
      );
      setBooks(updateBooks);
      setEditingBook(null);
      toast.success("Cập nhật thành công!");
    } else {
      const newBook = {
        id: books[books.length - 1].id + 1,
        title: values.title,
        number: values.number,
      };
      setBooks([...books, newBook]);
      toast.success("Thêm mới thành công!");
    }
  };

  const handleOpenDeleteModal = (id, title) => {
    setDeletingBook({
      id: id,
      title: title,
    });
  };

  const DeleteModal = () => {
    return (
      <div
        className="modal fade show"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-modal="true"
        role="dialog"
        style={{ display: "block" }}
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              Bạn có chắc chắn muốn xóa sách có tiêu đề là: {deletingBook.title}
              ?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setDeletingBook(null)}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => {
                  const newBooks = books.filter(
                    (book) => book.id !== deletingBook.id
                  );
                  setBooks(newBooks);
                  setDeletingBook(null);
                  toast.success("Xóa thành công!");
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const onAddFormHandler = (value) => {
    return (
      <Formik
        key={value?.id}
        initialValues={value}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          handleSubmit(values);
          setTimeout(() => {
            setSubmitting(false);
          }, 3000);
        }}
        validationSchema={Yup.object(validationSchema)}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Tiêu đề:
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
              <label htmlFor="number" className="form-label">
                Số lượng:
              </label>
              <Field
                type="number"
                className="form-control"
                id="number"
                name="number"
              />
              <ErrorMessage
                name="number"
                component="span"
                style={{ color: "red" }}
              ></ErrorMessage>
            </div>

            {isSubmitting ? (
              <></>
            ) : (
              <button
                type="submit"
                className="btn btn-primary w-25"
                style={{ display: "block", margin: "auto" }}
              >
                {editingBook ? "Cập nhật" : "Thêm mới"}
              </button>
            )}
          </Form>
        )}
      </Formik>
    );
  };

  return (
    <>
      <h1>Thư viện</h1>

      {editingBook && onAddFormHandler(editingBook)}
      {!editingBook && onAddFormHandler(initialValues)}

      {deletingBook && DeleteModal()}

      <table className="table table-hover table-bordered my-5 text-center">
        <thead className="table-light">
          <tr>
            <th>Title</th>
            <th>Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id} style={{ cursor: "pointer" }}>
              <td>{book.title}</td>
              <td>{book.number}</td>
              <td className="w-25">
                <button
                  onClick={() => handleEdit(book.id, book.title, book.number)}
                  className="btn btn-secondary mx-5"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleOpenDeleteModal(book.id, book.title)}
                  className="btn btn-danger mx-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Library;
