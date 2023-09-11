import { instance } from './axios';
import axios from 'axios';
const fetchLogin = (loginData) => {
    console.log(typeof loginData.password);
    return instance.post('/login', loginData);
};

export { fetchLogin };
