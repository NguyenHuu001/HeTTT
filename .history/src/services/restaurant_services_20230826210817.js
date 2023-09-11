import { instance } from './axios';
// import axios from 'axios';
const fetchLogin = (loginData,config) => {
    return instance.post('/login',loginData);
};

export { fetchLogin };
