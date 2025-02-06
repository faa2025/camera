import axios from "axios";

const API_URL = "http://localhost:5000";

export const login = async (username: string, password: string) => {
  return axios.post(`${API_URL}/login`, { username, password });
};

export const signup = async (email: string, password: string) => {
  return axios.post(`${API_URL}/signup`, { email, password });
};

export const getProfile = async (token: string) => {
  return axios.get(`${API_URL}/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
