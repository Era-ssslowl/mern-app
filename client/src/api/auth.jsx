import axiosInstance from './axiosInstance';

export const loginUser = async (email, password) => {
  const response = await axiosInstance.post('/login', {
    email,
    password,
  });
  return response.data;
};

export const registerUser = async (email, password, name) => {
  const response = await axiosInstance.post('/register', {
    email,
    password,
    name,
  });
  return response.data;
};
