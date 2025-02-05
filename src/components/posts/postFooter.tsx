import React, { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { Hourglass, MessageSquare } from "lucide-react";
import api from "../../utils/api";
import Comments from "../comments/comments";
import { useNavigate } from "react-router-dom";

interface PostFooterInfo {
    num_comments: number,
    subreddit: string,
    id: string,
    created_utc: string,
    permalink: string | null
}

const PostFooter:React.FC<PostFooterInfo> = (props:PostFooterInfo) => {
    const date = new Date(props.created_utc);
    const passedTime = formatDistanceToNow(date, {addSuffix: true});
    const navigate = useNavigate();

    const test = async () => {
        navigate(`/comments/${props.subreddit}/${props.id}`);
    }
    return (
        <div>
            <div className="flex justify-between items-center mt-4 text-xs text-[#878A8C]">
                <div className="flex items-center gap-2">
                    <MessageSquare /* To Change */ onClick={() => test()} size={20} />
                    <span>{`${props.num_comments} Comments`}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Hourglass size={20} />
                    <span>{passedTime}</span>
                </div>
            </div>
        </div>
        
    );
}

export default PostFooter;