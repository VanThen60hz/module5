import axios from "axios";

export const getUserIdWithArticleCount = async () => {
  try {
    const response = await axios.get("http://localhost:8080/articles");

    const userIdArticleCountMap = response.data.reduce((map, article) => {
      const userId = article.user_id;

      if (map.hasOwnProperty(userId)) {
        map[userId]++;
      } else {
        map[userId] = 1;
      }

      return map;
    }, {});
    return userIdArticleCountMap;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
