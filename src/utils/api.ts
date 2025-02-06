import axios from 'axios';
import { sleep } from './util';

const REDDIT_BASE_URL = 'https://www.reddit.com';

const api = axios.create({
  baseURL: REDDIT_BASE_URL,
  timeout: 5000,
  headers: {

  }
});

export const getPosts = async (sub:string) => {
        const data = await api.get(`https://www.reddit.com/r/${sub}/.json?limit=15`);
        return data.data;
    }

export const getIcon = async (author:string) => {
        if (author === '[deleted]') {
          return '';
        }
        const response = await api.get(`https://www.reddit.com/user/${author}/about.json`);
        await sleep(1000);
        try {
            const data = response.data;
            const icon:string = data.data.icon_img;
            const icon_link = icon.split('?')[0];
            return icon_link;
        } catch (e) {
            console.log(e);
        }
    }

export const getSubreddits = async () => {
        const data = await api.get("https://www.reddit.com/subreddits/popular/.json?limit=15");
        return data.data;
    }

export default api;