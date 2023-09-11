import { instance } from './axios';
import axios from 'axios';
const fetchLogin = (loginData, config) => {
    console.log(loginData);
    return instance.post('/login', loginData, config);
};

export { fetchLogin };
