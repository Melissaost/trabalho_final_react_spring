import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080', 
});

const getToken = () => sessionStorage.getItem('token');

const removeToken = () => {
  sessionStorage.removeItem('token');
};

const validateToken = async (token) => {
  try {
    const response = await axios.get('http://localhost:8080/api/usuarios/my-profile', {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
    return response.status === 200;
  } catch (error) {
    return false;
  }
};

axiosInstance.interceptors.request.use(
  async (config) => {
    if (config.url && config.url.includes('/api/usuarios/login')) {
      return config; 
    }

    const token = getToken();
    if (token) {
      const isValid = await validateToken(token);

      if (!isValid) {
        alert("Token inválido ou expirado. Por favor, faça login novamente.");
        removeToken();
        window.location.href = '/login';
      }
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;