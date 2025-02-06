import React, { useMemo } from "react";
import { makeSelectComments } from "../../app/slices/commentsSlice";
import { useSelector } from "react-redux";
import Comment from "./comment";
import { RootState } from "../../app/store";

interface commentsId {
    id: string
}

const Comments:React.FC<commentsId> = ({id}:commentsId) => {
    const selectComments = useMemo(() => makeSelectComments(id), [id]);
    const comments = useSelector((state:RootState) => selectComments(state));

    return (
        <div>
            {comments.length ? comments.map((comment, index) => {
                return <Comment body={comment.body}
                                author={comment.author}
                                icon_img={comment.icon_img}
                                score={comment.score}
                                created_utc={comment.created_utc}
                                replies={comment.replies}
                                key={index}  />
            }):
            <div className="w-full h-40 bg-gray-300 rounded animate-pulse"></div>
            }
        </div>
    );
}

export default Comments;