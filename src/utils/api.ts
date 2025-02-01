import axios, { AxiosError } from 'axios';

const REDDIT_BASE_URL = 'https://oauth.reddit.com';
const AUTH_URL = 'https://www.reddit.com/api/v1/access_token';


const CLIENT_ID: string = process.env.REACT_APP_REDDIT_CLIENT_ID!;
const CLIENT_SECRET:string = process.env.REACT_APP_REDDIT_CLIENT_SECRET!;
const USERNAME: string = process.env.REACT_APP_REDDIT_USERNAME!;
const PASSWORD: string = process.env.REACT_APP_REDDIT_PASSWORD!;

let accessToken: string | undefined = process.env.REACT_APP_REDDIT_TOKEN;

const getAccessToken = async (): Promise<string | undefined> => {  
    try {
      const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": `MyApp/0.1 by ${CLIENT_ID}`,
        Authorization: `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64")}`
      };

      const data = new URLSearchParams();
      data.append("grant_type", "password");
      data.append("username", USERNAME);
      data.append("password", PASSWORD);

      const response = await axios.post(AUTH_URL, data, {headers});
      return response.data.access_token;
    } catch(error) {
      console.error("Error getting the access token.");
      return ;
    }
};

const api = axios.create({
  baseURL: REDDIT_BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  }
});

api.interceptors.request.use( async (config) => {
  if(!accessToken) {
    accessToken = await getAccessToken();
    process.env.REACT_APP_REDDIT_TOKEN = accessToken;
  }
  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});

api.interceptors.response.use(
  (respose) => respose,
  async (error: AxiosError) => {
    if (error.response?.status === 401) {
      console.warn("expired token. refreshing...");

      try {
        const newAccessToken: string|undefined = await getAccessToken();

        if (newAccessToken) {
          error.config!.headers.Authorization = `Bearer ${newAccessToken}`;
          return api(error.config!);
        }
      } catch (refreshError) {
        console.error("Error refreshing the token: ", refreshError);
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default api;