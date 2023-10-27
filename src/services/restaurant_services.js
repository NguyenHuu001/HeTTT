import { instance } from './axios';
// import axios from 'axios';
const fetchLogin = (loginData) => {
    return instance.post('/login', loginData);
};
const fetchDish = (config) => {
    return instance.get('/MonAn', config);
};
const getOneDish = (id, config) => {
    return instance.get(`/dish/${id}`, config);
};
const fetchCart = (config) => {
    return instance.get(`/GioHang`, config);
};
const DeleteItemCard = (id, config) => {
    return instance.delete(`/DeleteCartItem/${id}`, config);
};
const AddtoCart = (data, config) => {
    return instance.post('/AddToCart', data, config);
};

const AddDishItem = (data, config) => {
    return instance.post('/AddDish', data, config);
};
const EditDish = (data, config) => {
    return instance.post('/EditDish', data, config);
};
const DeleteDish = (data, config) => {
    return instance.post('/DeleteDish', data, config);
};
const getAllCitizen = (config) => {
    return instance.get('/getAllKhachHang', config);
};
export {
    fetchLogin,
    fetchDish,
    getOneDish,
    fetchCart,
    DeleteItemCard,
    AddtoCart,
    AddDishItem,
    EditDish,
    DeleteDish,
    getAllCitizen,
};
