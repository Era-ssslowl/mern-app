import axiosInstance from './axiosInstance';

export const loginUser = async (email, password) => {
  const response = await axiosInstance.post('/api/auth/login', {
    email,
    password,
  });
  return response.data;
};

export const registerUser = async (email, password, name) => {
  const response = await axiosInstance.post('/api/auth/register', {
    email,
    password,
    name,
  });
  return response.data;
};
