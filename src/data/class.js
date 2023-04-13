import axios from 'axios';

const API_URL = 'http://localhost:3000/classroom';

const getClass = () => {
  return axios.get(API_URL)
    .then(res => res.data);
};

export { getClass };