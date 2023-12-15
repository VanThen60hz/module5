import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as ContactService from "../services/ContactService";
// import { toast } from "react-toastify";

function Contact() {
  const [contacts, setContacts] = useState([]);
  //   const [deletingBook, setDeletingBook] = useState(null);

  useEffect(() => {
    getContacts();
  }, []);

  const getContacts = async () => {
    try {
      const books = await ContactService.findAll();
      setContacts(books);
    } catch (error) {
      console.error(error);
    }
  };

  //   const handleOpenDeleteModal = (id, title) => {
  //     setDeletingBook({
  //       id: id,
  //       title: title,
  //     });
  //     console.log(deletingBook);
  //   };

  //   const DeleteModal = () => {
  //     return (
  //       <div
  //         className="modal fade show"
  //         id="exampleModal"
  //         tabIndex="-1"
  //         aria-labelledby="exampleModalLabel"
  //         aria-modal="true"
  //         role="dialog"
  //         style={{ display: "block" }}
  //       >
  //         <div className="modal-dialog modal-dialog-centered" role="document">
  //           <div className="modal-content">
  //             <div className="modal-body">
  //               Bạn có chắc chắn muốn xóa sách có tiêu đề là: {deletingBook.title}
  //               ?
  //             </div>
  //             <div className="modal-footer">
  //               <button
  //                 type="button"
  //                 className="btn btn-secondary"
  //                 onClick={() => setDeletingBook(null)}
  //               >
  //                 Close
  //               </button>
  //               <button
  //                 type="button"
  //                 className="btn btn-danger"
  //                 onClick={() => {
  //                   deleteBook(deletingBook.id);
  //                   setDeletingBook(null);
  //                 }}
  //               >
  //                 Delete
  //               </button>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   };

  //   const deleteBook = async (id) => {
  //     try {
  //       await BookService.deleteBook(id);
  //       toast.success("Delete successfully!");
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  return (
    <>
      {/* {deletingBook && DeleteModal()} */}
      <div className="d-flex justify-content-between">
        <h1>Contacts</h1>
        <Link to={`add`} className="btn btn-success h-50">
          Add contact
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts?.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img
                  src={`${contact.image}`}
                  alt="avatar"
                  style={{
                    height: "50px",
                    width: "50px",
                    borderRadius: "50%",
                    marginRight: "5px",
                  }}
                />
                {contact.name}
              </td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
              <td>
                <Link
                  to={`edit/${contact.id}`}
                  className="btn btn-primary mx-2"
                >
                  Edit
                </Link>
                <button
                  className="btn btn-danger"
                  //   onClick={() => handleOpenDeleteModal(contact.id, contact.title)}
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

export default Contact;
