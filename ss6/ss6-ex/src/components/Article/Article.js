import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as ArticleService from "../../services/ArticleService";
import { toast } from "react-toastify";
import EditArticle from "./EditArticle";

function Article({ user, articleAddedTime }) {
  const [articles, setArticles] = useState([]);
  const [editingArticle, setEditingArticle] = useState(null);
  const [deletingArticle, setDeletingArticles] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    getArticleByUserId(user?.id);
  }, [user?.id, articleAddedTime, editingArticle, deletingArticle]);

  const getArticleByUserId = async (userId) => {
    try {
      const defaultUserId = userId ? userId : id;

      const articles = await ArticleService.findArticleByUserId(defaultUserId);
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

  const handleCancelEdit = async () => {
    setEditingArticle(null);
  };

  const handleUpdate = async () => {
    setEditingArticle(null);

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
