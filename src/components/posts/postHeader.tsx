import React from "react";

interface HeaderInfo {
    subreddit: string | null,
    author: string,
    icon_img: string | null
}

const PostHeader:React.FC<HeaderInfo> = (props:HeaderInfo) => {
    return (
        <div className="flex">
            <img className="w-5 rounded-full mr-2" src={props.icon_img || "src/assets/reddit-icon-small.png"} />
            <span className="font-bold text-xs">r/{props.subreddit}</span>
            <span className="relative bottom-0.5 px-1">•</span>
            <span className="text-xs">Posted by u/{props.author}</span>
        </div>
    )
}

export default PostHeader;