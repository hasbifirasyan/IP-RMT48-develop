import axios from 'axios';

export const hotelAPI = axios.create({
    baseURL: "https://booking-com.p.rapidapi.com"
})
