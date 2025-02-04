import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface subreddit {
    data: {
        id: number,
        display_name: string,
        icon_img?: string | undefined
    }
}
const subreddits:subreddit[] = [
    {
        'data': {
            'id': 1,
            'display_name': '/ONE',
            'icon_img': 'src/assets/karma.png'
        }
    },
    {
        'data': {
            'id': 2,
            'display_name': '/TWO',
        }
    },
    {
        'data': {
            'id': 3,
            'display_name': '/THREE',
        }
    },
    {
        'data': {
            'id': 4,
            'display_name': '/FOUR',
        }
    },
    {
        'data': {
            'id': 5,
            'display_name': '/FIVE',
        }
    }
];

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

export const selectSubreddits = (state: RootState) => state.subreddits;
export const {addSubreddits} = subredditsSlice.actions;
export default subredditsSlice.reducer;