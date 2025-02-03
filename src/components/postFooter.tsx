import React from "react";
import { formatDistanceToNow } from "date-fns";
import { Hourglass, MessageSquare } from "lucide-react";

interface PostFooterInfo {
    num_comments: number,
    created_utc: string,
}

const PostFooter:React.FC<PostFooterInfo> = (props:PostFooterInfo) => {
    const date = new Date(props.created_utc);
    const passedTime = formatDistanceToNow(date, {addSuffix: true});
    return (
        <div className="flex justify-between items-center mt-4 text-xs text-[#878A8C]">
            <div className="flex items-center gap-2">
                <MessageSquare size={20} />
                <span>{`${props.num_comments} Comments`}</span>
            </div>
            <div className="flex items-center gap-2">
                <Hourglass size={20} />
                <span>{passedTime}</span>
            </div>
        </div>
    );
}

export default PostFooter;