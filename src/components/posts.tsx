import React from "react";
import Post from "./post";
import { useSelector } from "react-redux";
import { selectPosts } from "../app/slices/postsSlice";

const Posts:React.FC = () => {

    const postsList = useSelector(selectPosts).posts;


    return (
        <div className="flex flex-col gap-2.5">
            {postsList.map((post, index) => {
                return <Post title={post.title} 
                                author={post.author} 
                                subreddit={post.subreddit} 
                                score={post.score} 
                                icon_img={post.icon_img} 
                                selftext={post.selftext} 
                                imagem={post.imagem} 
                                video={post.video} 
                                created_utc={post.created_utc}
                                num_comments={post.num_comments}
                                permalink={post.permalink} 
                                key={index}/>
            })}
        </div>
        
    )
}

export default Posts;