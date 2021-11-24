import axios from 'axios';
import {BASE_URL} from "./const";

export const getCats = async (value) => {
  const URL = `${BASE_URL}=${value}`;

  try {
    const res = await axios.get(URL);
    return res;
  } catch (error) {
    console.log(error);
  }
}