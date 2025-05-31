import axios from "axios";
import type { Data } from "../types/types";

const BASE_URL = `http://localhost:3000`;

export const getData = async (page: number, limit: number = 5): Promise<{
  data: any;
  first: number,
  prev: number | null,
  next: number,
  last: number, 
  pages: number,
  items: number,
}> => {
  const response = await axios.get(`http://localhost:3000/posts`, {
    params: {
      _page: page,
      _per_page: limit,
      _order: "desc",
    },
  })

  return response.data;
};

export const postData = async (newPost: Data) => {
  const response = await axios.post(`${BASE_URL}/posts`, newPost);
  return response.data;
};
