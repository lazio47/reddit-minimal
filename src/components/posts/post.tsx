import React from "react";
import Score from "../score";
import PostBody from "./postBody";

export interface PostAtributes {
    "title": string,
    "id": string,
    "author": string,
    "score": number,
    "subreddit": string,
    "icon_img": string | null,
    "selftext": string | null,
    "imagem": string | null,
    "video": string | null,
    "num_comments": number,
    "created_utc": string,
    "permalink": string | null;
}

const Post:React.FC<PostAtributes> = (props: PostAtributes) => {
    return (
        <div className="p-4 border border-gray-400 rounded-sm grid grid-cols-[1fr_11fr] gap-4">
            <Score score={props.score} />
            <PostBody 
                    title={props.title}
                    id={props.id}
                    author={props.author}
                    subreddit={props.subreddit}
                    icon_img={props.icon_img}
                    selftext={props.selftext}
                    imagem={props.imagem}
                    video={props.video}
                    num_comments={props.num_comments}
                    created_utc={props.created_utc}
                    permalink={props.permalink} />
        </div>
    );
}

export default Post;