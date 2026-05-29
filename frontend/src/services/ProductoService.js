import axios from 'axios';
import axiosRetry from 'axios-retry';

const API_URL = 'http://localhost:8080/api/productos';

axiosRetry(axios, { 
    retries: 3, 
    retryDelay: (retryCount) => {
        return retryCount * 1000;
    },
    retryCondition: (error) => {
        return axiosRetry.isNetworkOrIdempotentRequestError(error);
    }
});

export const getAllProductos = () => axios.get(API_URL);
export const crearProducto = (producto) => axios.post(API_URL, producto);