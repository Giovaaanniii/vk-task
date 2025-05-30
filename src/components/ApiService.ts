import axios from "axios";
import type { Data } from "../types/types";

const BASE_URL = `http://localhost:3000`;

export const getData = async (page: number, limit: number = 5) => {
  const response = await axios.get(`http://localhost:3000/posts`, {
    params: {
      _page: page,
      _limit: limit,
      _sort: "id",
      _order: "desc",
    },
  });

  const totalCount = parseInt(response.headers["x-total-count"] || "0", 10);

  return {
    posts: response.data,
    nextPage: page + 1,
    totalCount,
    hasMore: page * limit < totalCount,
  };
};

export const postData = async (newPost: Data) => {
  const response = await axios.post(`${BASE_URL}`, newPost);
  return response;
};
