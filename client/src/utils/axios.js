import axios from 'axios';

export const hotelAPI = axios.create({
    baseURL: "https://booking-com.p.rapidapi.com"
});

export const serverAPI = axios.create({
    baseURL: "https://localhost:3000"
});
