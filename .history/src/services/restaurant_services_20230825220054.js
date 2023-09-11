import { instance } from './axios';
import axios from 'axios';
const fetchLogin = (loginData) => {
    return instance.get('/login', loginData);
};

export {fetchLogin}