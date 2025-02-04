import React, { useState } from "react";
import { selectComments } from "../../app/slices/commentsSlice";
import { useSelector } from "react-redux";
import Comment from "./comment";

interface commentsId {
    id: string
}

const Comments:React.FC<commentsId> = ({id}:commentsId) => {
    const [comments, setComents] = useState(useSelector(selectComments).comments);
    return (
        <div>
            {comments.aaa.comments.map((comment) => {
                return <Comment body={comment.body}
                                author={comment.author}
                                icon_img={comment.icon_img}
                                score={comment.score}
                                created_utc={comment.created_utc}
                                replies={comment.replies}  />
            })}
        </div>
    );
}

export default Comments;