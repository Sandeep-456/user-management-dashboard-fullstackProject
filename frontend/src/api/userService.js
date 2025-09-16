import axios from "axios";

const API_BASE_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:8080/api/users"
    : "https://user-management-dashboard-jjom.onrender.com/api/users"; // <<< IMPORTANT: Replace with your actual online API base URL

const API = axios.create({ baseURL: API_BASE_URL });

export const getUsers = () => API.get("/");
export const getUser = (id) => API.get(`/${id}`);
export const createUser = (body) => API.post("/", body);
export const updateUser = (id, body) => API.put(`/${id}`, body);
export const deleteUser = (id) => API.delete(`/${id}`);
