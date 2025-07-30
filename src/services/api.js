import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  headers: {
    accept: 'application/json',
  },
});

const sheets = ({
  getPosts: () => api.get("posts"),
  getTodos: () => api.get("todos"),
  getUsers: () => api.get("users"),
});

export default sheets;
