import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "https://api.example.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
