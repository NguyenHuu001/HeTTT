import { instance } from './axios';
import axios from 'axios';
const fetchLogin = (loginData) => {
    console.log(loginData.username);
    return instance.post('/login', loginData);
};

export { fetchLogin };
