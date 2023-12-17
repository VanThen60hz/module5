import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as ArticleService from "../../services/ArticleService";
import { toast } from "react-toastify";
import EditArticle from "./EditArticle";

function Article({ user, articleAddedTime }) {
  const [articles, setArticles] = useState([]);
  const [editingArticle, setEditingArticle] = useState(null);
  const [deletingArticle, setDeletingArticles] = useState(null);

  useEffect(() => {
    getArticleByUserId(user?.id);
  }, [user?.id, articleAddedTime, editingArticle]);

  const getArticleByUserId = async (userId) => {
    try {
      const articles = await ArticleService.findArticleByUserId(userId);
      setArticles(articles);
    } catch (error) {
      console.error(error);
    }
  };

  const handleOpenDeleteModal = (article) => {
    setDeletingArticles(article);
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
              Do you sure delete article with title: {deletingArticle.title}?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setDeletingArticles(null)}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => {
                  deleteArticle(deletingArticle.id);
                  setDeletingArticles(null);
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

  const deleteArticle = async (id) => {
    try {
      await ArticleService.remove(id);
      toast.success("Delete successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (article) => {
    setEditingArticle(article);
  };

  const handleCancelEdit = () => {
    // vì sao ko set lại null cho editingArticle
    setEditingArticle(null);
  };

  const handleUpdate = () => {
    setEditingArticle(null);
    // vì sao ko có null mà lại là giá trị trong khi đã set ở trên
    console.log(editingArticle);
    console.log(
      "Vào hàm handle Update gọi từ onUpdate() sau khi nhấn button update"
    );
    console.log("Thế méo nào méo setState editingArticle thành null");
    getArticleByUserId(user?.id);
  };

  return (
    <>
      {deletingArticle && DeleteModal()}

      {editingArticle ? (
        <EditArticle
          article={editingArticle}
          onCancel={handleCancelEdit}
          onUpdate={handleUpdate}
        />
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Articles</th>
            </tr>
          </thead>
          <tbody>
            {articles?.map((article) => (
              <tr key={article.id}>
                <td>{article.title}</td>
                <td>
                  <Link
                    onClick={() => handleEdit(article)}
                    className="btn btn-primary me-5"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleOpenDeleteModal(article)}
                    className="btn btn-danger mx-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default Article;
