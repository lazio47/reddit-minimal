import React from "react";
import Score from "./score";

interface PostAtributes {
    "title": string,
    "author": string,
    "score": number,
    "subreddit": string,
    "icon_img": string | null,
    "selftext": string | null,
    "imagem": string | null,
    "video": string | null,
    "num_comments": number,
    "created_utc": string,
}

const Post:React.FC<PostAtributes> = (props: PostAtributes) => {
    return (
        <div className="p-4 border border-gray-400 rounded-sm grid grid-cols-[1fr_4fr]">
            <Score score={props.score} />
        </div>
    );
}

export default Post;