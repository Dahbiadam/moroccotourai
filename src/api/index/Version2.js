import axios from "axios";

// Replace with your ngrok URL or backend URL
const BASE_URL = "https://72cf-34-148-143-244.ngrok-free.app";

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
