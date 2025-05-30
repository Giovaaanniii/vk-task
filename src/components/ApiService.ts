import axios from "axios";
import type { Data } from "../types/types";


const BASE_URL = `http://localhost:3000`;

export const getData = async () => {
  const response = await axios.get(`${BASE_URL}/posts`);
  return response;
};

export const postData = async (newPost: Data) => {
  const response = await axios.post(`${BASE_URL}/posts`, newPost);
  return response;
}