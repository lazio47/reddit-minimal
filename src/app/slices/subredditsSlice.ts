import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface subreddit {
    data: {
        id: number,
        display_name: string,
        icon_img?: string | undefined
    }
}
const subreddits:subreddit[] = [];

const subredditsSlice = createSlice({
    name: 'subredditsSlice',
    initialState: {
        subreddits
    },
    reducers: {
        addSubreddits: (state, action) => {
            state.subreddits = [...new Set([...state.subreddits, ...action.payload])];
        }
    }
});

export const selectSubreddits = (state: RootState) => state.subreddits.subreddits;
export const {addSubreddits} = subredditsSlice.actions;
export default subredditsSlice.reducer;