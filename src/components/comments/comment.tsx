import React from "react";
import CommentScore from "../commentScore";
import { formatDistanceToNow } from "date-fns";

export interface CommentsData {
    "body": string,
    "author": string,
    "icon_img": string,
    "score": number,
    "created_utc": string,
    "replies": CommentsData[]
}

const Comment:React.FC<CommentsData> = (comment:CommentsData) => {
    const createdUtc = comment.created_utc;
    if (!createdUtc) {
        return <></>
    }
    const date = typeof createdUtc === 'number'
            ? new Date(createdUtc * 1000)
            : new Date(createdUtc);
    const passedTime = formatDistanceToNow(date, {addSuffix: true})
    return (
        <div className="border-l border-l-gray-400 rounded-sm m-2 p-4 grid grid-cols-[8px_1fr] gap-4">
            <CommentScore score={comment.score} />
            <div>
                <div>
                    {comment.body}
                </div>
                <div className="flex justify-around items-center mt-4 text-xs text-[#878A8C]">
                    <span className="font-bold">{comment.author}</span>
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