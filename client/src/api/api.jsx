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


const handleRequest = async (request) => {
    try{
        const response = await request;
        return {data: response.data, error: null};
    } catch (error) {
        console.error("API request error:", error.response?.data?.message || error.message);
        return { data: null, error: error.response?.data?.message || "Ошибка запроса" };
    }

}

// Функции API-запросов
const apiRequests = {
  // Получить список альбомов
  Authorize: (AuthData) => handleRequest(() => api.post("/login", AuthData)),
};

export default apiRequests;
