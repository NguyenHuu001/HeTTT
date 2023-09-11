import { instance } from './axios';
// import axios from 'axios';
const fetchLogin = () => {
    return instance.post('/login');
};

export { fetchLogin };
