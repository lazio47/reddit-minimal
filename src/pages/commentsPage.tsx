import React from "react";
import { selectOnePost } from "../app/slices/postsSlice";
import { useSelector } from "react-redux";
import Post from "../components/posts/post";
import Comments from "../components/comments/comments";
import { useParams } from "react-router-dom";

const CommentsPage: React.FC = () => {
    const {subreddit, id} = useParams<{subreddit: string, id: string}>();

    const post = useSelector(selectOnePost(id!)(subreddit!));

    return (
        <div className="w-screen flex flex-col gap-5">
            <Post title={post.title} 
                                id={post.id}
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
                                isComment={true} />
            
            <Comments id={post.id} />
        </div>
    )
}

export default CommentsPage;