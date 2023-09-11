import { instance } from './axios';
import axios from 'axios';
const fetchLogin = (email, password) => {
    return instance.post('/api/v1/auth/login', { email, password });
};