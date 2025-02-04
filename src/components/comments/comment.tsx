import React from "react";
import formatNumber from "../../utils/formats";

interface CommentsData {
    "body": string,
    "author": string,
    "icon_img": string,
    "score": number,
    "created_utc": string,
    "replies": CommentsData[]
}

const Comment:React.FC<CommentsData> = (comment:CommentsData) => {
    return (
        <div>
            
        </div>
    )
}

export default Comment;