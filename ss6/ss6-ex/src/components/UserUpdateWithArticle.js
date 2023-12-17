import { useLocation } from "react-router-dom";
import UserForm from "./User/UserForm";
import Article from "./Article/Article";
import { useState } from "react";
import ArticleForm from "./Article/ArticleForm";

function UserUpdateWithArticle() {
  const location = useLocation();

  const [articleAddedTime, setArticleAddedTime] = useState(null);

  const handleArticleAddedTime = () => {
    setArticleAddedTime(Date.now());
  };

  return (
    <div className="container my-5">
      <UserForm location={location} />
      <br />
      <ArticleForm
        user={location?.state?.user}
        onArticleAddedTime={handleArticleAddedTime}
      />
      <br />
      <Article
        user={location?.state?.user}
        articleAddedTime={articleAddedTime}
      />
    </div>
  );
}

export default UserUpdateWithArticle;
