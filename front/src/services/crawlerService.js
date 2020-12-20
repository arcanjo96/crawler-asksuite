import api from './api';
import * as dotenv from 'dotenv';
dotenv.config();

export const fetchRooms = async function(checkIn, checkOut) {
    const data = {
        checkIn,
        checkOut
    };
    const response = await api.post('search', data);
    return response.data;
}