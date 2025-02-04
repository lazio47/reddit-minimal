import { configureStore } from "@reduxjs/toolkit";
import subredditsReducer from "./slices/subredditsSlice";
import postsReducer from "./slices/postsSlice";

const store = configureStore({
    reducer: {
        subreddits: subredditsReducer,
        posts: postsReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;