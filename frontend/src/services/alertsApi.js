import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

export const fetchAlerts = async () => {
  const response = await axios.get(`${API_BASE_URL}/alerts`);
  return response.data;
};