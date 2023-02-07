import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGY0MTJlYjZkYWNkZWRmMDQ4MTVkOCIsImlhdCI6MTY3NTc1NTMwOSwiZXhwIjoxNjc2NjE5MzA5fQ.r13zFBcI2XxNDkoTMhHdoFCYmh6zt1uKjr-oZxwZhWU";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
