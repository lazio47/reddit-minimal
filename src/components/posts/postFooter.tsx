import React, { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { Hourglass, MessageSquare } from "lucide-react";
import api from "../../utils/api";
import Comments from "../comments/comments";

interface PostFooterInfo {
    num_comments: number,
    id: string,
    created_utc: string,
    permalink: string | null
}

const PostFooter:React.FC<PostFooterInfo> = (props:PostFooterInfo) => {
    const date = new Date(props.created_utc);
    const passedTime = formatDistanceToNow(date, {addSuffix: true});
    const [showComments, setShowcomments] = useState(false);

    const test = async () => {
        // if (props.permalink) {
        //     const res = await api.get(`${props.permalink}.json?limit=8`);
        //     const data = res.data;
        //     console.log(data);
        // }
        setShowcomments(prev => !prev);
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
            {showComments && <Comments id={props.id} />}
        </div>
        
    );
}

export default PostFooter;