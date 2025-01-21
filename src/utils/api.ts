import axios from 'axios';

const REDDIT_BASE_URL = 'https://oauth.reddit.com';
const AUTH_URL = 'https://www.reddit.com/api/v1/access_token';


const CLIENT_ID = process.env.REACT_APP_REDDIT_CLIENT_ID!;
const CLIENT_SECRET = process.env.REACT_APP_REDDIT_CLIENT_SECRET!;
const USER_AGENT = 'myApp/1.0';

let token: string | null = null;

export const getAccessToken = async (): Promise<string | null> => {
    if (token) return token;
  
    const response = await axios.post(
      AUTH_URL,
      new URLSearchParams({
        grant_type: 'client_credentials',
      }),
      {
        auth: {
          username: CLIENT_ID,
          password: CLIENT_SECRET,
        },
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
  
    token = response.data.access_token;
    return token;
};