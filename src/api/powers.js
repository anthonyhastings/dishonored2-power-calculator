import axios from 'axios';

export const getPowers = () => axios.get('/powers.json');
