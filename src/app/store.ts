import { configureStore } from "@reduxjs/toolkit";
import subredditsReducer from "./slices/subredditsSlice";
import postsReducer from "./slices/postsSlice";
import commentsReducer from "./slices/commentsSlice";

const store = configureStore({
    reducer: {
        subreddits: subredditsReducer,
        posts: postsReducer,
        comments: commentsReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;