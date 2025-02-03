import React from "react";

interface HeaderInfo {
    subreddit: string | null,
    author: string,
    icon_img: string | null
}

const PostHeader:React.FC<HeaderInfo> = (props:HeaderInfo) => {
    return (
        <div className="flex">
            <img src={props.icon_img || "src/assets/reddit-icon-small.png"} />
            <span className="font-bold text-xs">`r/${props.subreddit}`</span>
            <span className="inline-block my-0">•</span>
            <span>`Posted by u/${props.author}`</span>
        </div>
    )
}

export default PostHeader;