import axios, { CanceledError } from "axios";

const API_KEY: string = import.meta.env.VITE_API_KEY;
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: API_KEY,
  },
});

export { CanceledError };
