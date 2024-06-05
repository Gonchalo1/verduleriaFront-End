//ESTE ARCHIVO SE ENCARGA DE MANEJAR LAS PETICIONES DE EL ARCHIVO DE PRODUCTOS

import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/api', // Actualiza esta URL según sea necesario
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
