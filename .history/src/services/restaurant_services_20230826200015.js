import { instance } from './axios';
// import axios from 'axios';
const fetchLogin = () => {
    return instance.get('Login');
};

export { fetchLogin };
