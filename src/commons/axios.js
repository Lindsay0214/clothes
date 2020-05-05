import _axios from 'axios';

const axios = baseURL => {
    
    const instance = _axios.create({
        baseURL: baseURL || 'http://localhost:3005',
        timeout: 1000,
    });
    return instance;
}

export default axios();