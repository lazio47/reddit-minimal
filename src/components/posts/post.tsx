import React from "react";
import Score from "../score";
import PostBody from "./postBody";
import { ArrowBigLeftDash } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
    "created_utc": string|number,
    "permalink": string | null;
    "isComment": boolean
    "url_overridden_by_dest": string | null
    "post_hint": string | null
    "media": any | undefined
}

const Post:React.FC<PostAtributes> = (props: PostAtributes) => {
    const navigate = useNavigate();

    return (
        <div className="p-4 border border-gray-400 rounded-sm grid grid-cols-[1fr_11fr] gap-4">
            <div>
                {props.isComment && <ArrowBigLeftDash className="mb-5 cursor-pointer hover:text-orange-300" color="#FF4500" size={40} onClick={() => navigate(-1)} />}
                <Score score={props.score} />
            </div>
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