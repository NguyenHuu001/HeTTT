import { instance } from './axios';
import axios from 'axios';
const fetchLogin = (loginData) => {
    return instance.post('/api/v1/auth/login', { email, password });
};