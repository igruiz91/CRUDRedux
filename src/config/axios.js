import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: `https://my-json-server.typicode.com/igruiz91/json-server`
});

export default clienteAxios;