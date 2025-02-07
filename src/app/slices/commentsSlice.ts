import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { CommentsData } from "../../components/comments/comment";

interface CommentsListAtt {
    [id:string]: {
        [comments: string]: CommentsData[]
    }
}

const initialComments: CommentsListAtt = {};

const commentsSlice = createSlice({
    name: "commentsSlice",
    initialState: {
        comments: initialComments
    },
    reducers: {
        addComments: (state, action) => {
            state.comments = {...state.comments, [action.payload.id]: {comments: action.payload.comments}};
        }
    }
});

export default commentsSlice.reducer;
export const {addComments} = commentsSlice.actions;
export const selectComments = (id:string) => (state:RootState) => state.comments.comments[id]?.comments || [];
export const selectHasComments = (id:string) => (state:RootState) => state.comments.comments[id] ? true : false;
export const makeSelectComments = (id: string) =>
    createSelector(
      (state: RootState) => state.comments.comments[id]?.comments,
      (comments) => comments || []
    );
  