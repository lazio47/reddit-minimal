import axios from 'axios';

const REDDIT_BASE_URL = 'https://www.reddit.com';

const api = axios.create({
  baseURL: REDDIT_BASE_URL,
  timeout: 5000,
  headers: {

  }
});

export default api;