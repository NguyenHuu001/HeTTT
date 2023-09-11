import { instance } from './axios';
import axios from 'axios';
const fetchLogin = (loginData) => {
    return instance.post('/login', loginData);
};

export { fetchLogin };
