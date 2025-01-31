import axios from 'axios';

interface Post {
  data: {
    id: string;
    title: string;
    author: string;
    num_comments: number;
    permalink: string;
  };
}

interface Subreddit {
  data: {
    id: string;
    display_name: string;
  };
}

// Configurações
const REDDIT_BASE_URL = 'https://oauth.reddit.com';
const AUTH_URL = 'https://www.reddit.com/api/v1/access_token';
const CLIENT_ID = process.env.REACT_APP_REDDIT_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_REDDIT_CLIENT_SECRET;
const USER_AGENT = 'myApp/1.0';

let token: string | null = null;

// token de acesso
export const getAccessToken = async (): Promise<string | null> => {
  if (token) return token;

  try {
    const response = await axios.post(
      AUTH_URL,
      new URLSearchParams({
        grant_type: 'client_credentials',
      }),
      {
        auth: {
          username: CLIENT_ID!,
          password: CLIENT_SECRET!,
        },
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    token = response.data.access_token;
    return token;
  } catch (error) {
    console.error('Erro ao obter o token de acesso:', error);
    throw error;
  }
};

// posts of a subreddit
export const fetchSubredditPosts = async (subreddit: string): Promise<Post[]> => {
  const token = await getAccessToken();

  try {
    const response = await axios.get(`${REDDIT_BASE_URL}/r/${subreddit}/hot`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'User-Agent': USER_AGENT,
      },
    });

    return response.data.data.children;
  } catch (error) {
    console.error('Erro ao buscar posts do subreddit:', error);
    throw error;
  }
};

// popular subreddits
export const fetchPopularSubreddits = async (): Promise<Subreddit[]> => {
  const token = await getAccessToken();

  try {
    const response = await axios.get(`${REDDIT_BASE_URL}/subreddits/popular`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'User-Agent': USER_AGENT,
      },
    });

    return response.data.data.children;
  } catch (error) {
    console.error('Erro ao buscar subreddits populares:', error);
    throw error;
  }
};
