import axios from 'axios';
import { sleep } from './util';
import { CommentsData } from '../components/comments/comment';

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

const processComments = async (comment:any):Promise<CommentsData> => {
    const data = comment.data;
    const author = data.author;
    const body = data.body;
    const score = data.score;
    const created_utc = data.created_utc;
    const icon_img = await getIcon(author) || "";
    const replies = [];

    const repliesData = data.replies;
    if (repliesData && typeof repliesData === "object" && repliesData.data && repliesData.data.children) {
        const children = repliesData.data.children;

        for (const child of children) {
            if (child.kind !== "t1") continue;
            const processedchild = await processComments(child);
            replies.push(processedchild);
        }
    }

    return {
        body,
        author,
        icon_img,
        score,
        created_utc,
        replies
    }
}

export const getComments = async (permalink:string) => {
    const data = await api.get(`https://www.reddit.com${permalink}.json?limit=30`);
    try {
        const commentsData = data.data[1].data.children;
        const comments = await Promise.all(commentsData.map( async (comment:any) => {
            const res = await processComments(comment);
            return res;
        }));
        console.log(comments);
        return comments;
    } catch(e) {
        console.log(e);
        return [];
    }
}

export default api;