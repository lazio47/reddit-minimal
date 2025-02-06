import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { PostAtributes } from "../../components/posts/post";

interface PostsListsAtt {
    [posts: string]: PostAtributes[]
}

const postsList:PostsListsAtt = {};

interface AddPostsPayload {
    subreddit: string;
    posts: PostAtributes[];
  }

const postSlice = createSlice({
    name: "postSlice",
    initialState: {
        posts: postsList
    },
    reducers: {
        addPosts: (state, action: PayloadAction<AddPostsPayload>) => {
            state.posts = {...state.posts, [action.payload.subreddit]: action.payload.posts};
        }
    }
});

export default postSlice.reducer;
export const selectPosts = (post:string) => (state:RootState) => state.posts.posts[post];
export const selectOnePost = (id:string) => (post:string) => (state:RootState) => state.posts.posts[post].filter((post) => post.id === id)[0] || {};
export const {addPosts} =  postSlice.actions;