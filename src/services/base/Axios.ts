import axios from 'axios';

const Axios = axios.create({
  baseURL: 'https://api.api-ninjas.com/v1/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'X-Api-Key': '9Dbd2Jht3NoqZMIi1ls9SA==FqzvbtzFotW8lmhZ',
  },
});

export default Axios;
