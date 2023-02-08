import axios from "axios";
import { useSelector } from "react-redux";

const BASE_URL = "http://localhost:5000/api/";

const TOKEN = JSON.parse(window.localStorage.getItem("Token"));

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
