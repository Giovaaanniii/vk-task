import axios from "axios";
import type { Data } from "../types/types";


const BASE_URL = `http://localhost:3000`;

export const getData = async (page: number, limit: number = 5) => {
  const response = await axios.get(`http://localhost:3000/posts?_page=${page}&_limit=${limit}`);
  return {
    posts: response.data,
    nextPage: page + 1
  };
};

export const postData = async (newPost: Data) => {
  const response = await axios.post(`${BASE_URL}`, newPost);
  return response;
}