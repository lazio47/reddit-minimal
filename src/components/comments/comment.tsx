import React from "react";
import formatNumber from "../../utils/formats";
import CommentScore from "../commentScore";
import { formatDistanceToNow } from "date-fns";

interface CommentsData {
    "body": string,
    "author": string,
    "icon_img": string,
    "score": number,
    "created_utc": string,
    "replies": CommentsData[]
}

const Comment:React.FC<CommentsData> = (comment:CommentsData) => {
    const date = new Date(comment.created_utc);
    const passedTime = formatDistanceToNow(date, {addSuffix: true})
    return (
        <div>
            <CommentScore score={formatNumber(comment.score)} />
            <div>
                <div>
                    {comment.body}
                </div>
                <div>
                    <span>{comment.author}</span>
                    <span>{passedTime}</span>
                </div>
                {
                    comment.replies && comment.replies.map((comment, index) => {
                        return <Comment body={comment.body}
                                        author={comment.author}
                                        icon_img={comment.icon_img}
                                        score={comment.score}
                                        created_utc={comment.created_utc}
                                        replies={comment.replies}
                                        key={index} />
                    })
                }
            </div>
        </div>
    )
}

export default Comment;