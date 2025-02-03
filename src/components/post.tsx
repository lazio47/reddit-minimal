import React from "react";
import Score from "./score";
import PostBody from "./postBody";

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
        <div className="p-4 border border-gray-400 rounded-sm grid grid-cols-[1fr_9fr]">
            <Score score={props.score} />
            <PostBody 
                    title={props.title}
                    author={props.author}
                    subreddit={props.subreddit}
                    icon_img={props.icon_img}
                    selftext={props.selftext}
                    imagem={props.imagem}
                    video={props.video}
                    num_comments={props.num_comments}
                    created_utc={props.created_utc} />
        </div>
    );
}

export default Post;