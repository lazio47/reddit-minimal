import React from "react";
import PostHeader from "./postHeader";
import PostFooter from "./postFooter";

interface PostInfo {
    "title": string,
    "author": string,
    "subreddit": string,
    "icon_img": string | null,
    "selftext": string | null,
    "imagem": string | null,
    "video": string | null,
    "num_comments": number,
    "created_utc": string,
}

const PostBody:React.FC<PostInfo> = (props:PostInfo) => {
    return (
        <div>
            <PostHeader icon_img={props.icon_img} subreddit={props.subreddit} author={props.author} />
            <div className="font-bold text-lg">{props.title}</div>
            {
                props.video ? <video src={props.video} ></video> :
                props.imagem ? <img src={props.imagem} alt="Post image" /> : 
                <div className="text-sm">{props.selftext}</div>
            }
            <PostFooter num_comments={props.num_comments} created_utc={props.created_utc} />
        </div>
    );
}

export default PostBody;