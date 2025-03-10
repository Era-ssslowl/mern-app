import axios from "axios";

// Создаем экземпляр axios с базовыми настройками
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Добавляем интерцептор для токена (если требуется авторизация)
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Функции API-запросов
const apiRequests = {
  // Получить список альбомов
  getAlbums: () => api.get("/albums"),
};

export default apiRequests;
