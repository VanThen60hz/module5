import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as BookService from "../services/BookService";
import { toast } from "react-toastify";

function Library() {
  const [books, setBooks] = useState([]);
  const [deletingBook, setDeletingBook] = useState(null);

  useEffect(() => {
    getBooks();
  }, [deletingBook]);

  const getBooks = async () => {
    try {
      const books = await BookService.findAll();
      setBooks(books);
    } catch (error) {
      console.error(error);
    }
  };

  const handleOpenDeleteModal = (id, title) => {
    setDeletingBook({
      id: id,
      title: title,
    });
    console.log(deletingBook);
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
                  deleteBook(deletingBook.id);
                  setDeletingBook(null);
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

  const deleteBook = async (id) => {
    try {
      await BookService.deleteBook(id);
      toast.success("Delete successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {deletingBook && DeleteModal()}
      <div className="d-flex justify-content-between">
        <h1>Library</h1>
        <Link to={`add`} className="btn btn-success h-50">
          Add a new book
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books?.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.quantity}</td>
              <td>
                <Link
                  to={`edit/${book.id}`}
                  state={{ book }}
                  className="btn btn-primary me-5"
                >
                  Edit
                </Link>
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
