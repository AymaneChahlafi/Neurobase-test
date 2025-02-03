import axios from 'axios';

const jwtToken = localStorage.getItem('jwt_token'); // Or use cookies if you're storing it that way

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api/products';

axios.defaults.baseURL = 'http://localhost:8000/api'; // Set the base URL for the API

axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-TOKEN': window.csrf_token,  // Ensure CSRF token is included
    'Authorization': jwtToken ? `Bearer ${jwtToken}` : '', // Include JWT if it exists
};

export const getProducts = async () => {
    try {
        const response = await axios.get('/products'); // Using relative path, as baseURL is set
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

export const getProduct = async (id) => {
    try {
        const response = await axios.get(`/products/${id}`); // Using relative path
        return response.data;
    } catch (error) {
        console.error('Error fetching product:', error);
        throw error;
    }
};

export const createProduct = async (product) => {
    try {
        const response = await axios.post('/api/product/create', product); // Updated URL
        return response.data;
    } catch (error) {
        console.error('Error creating product:', error);
        throw error;
    }
};

export const updateProduct = async (id, product) => {
    try {
        const response = await axios.put(`/products/${id}`, product);
        return response.data;
    } catch (error) {
        console.error('Error updating product:', error);
        throw error;
    }
};

export const deleteProduct = async (id) => {
    try {
        await axios.delete(`/products/${id}`); // Using relative path
    } catch (error) {
        console.error('Error deleting product:', error);
        throw error;
    }
};
