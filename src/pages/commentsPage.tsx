import React, { useEffect, useMemo } from "react";
import { addPosts, createSelectOnePost } from "../app/slices/postsSlice";
import { useDispatch, useSelector } from "react-redux";
import Post from "../components/posts/post";
import Comments from "../components/comments/comments";
import { useNavigate, useParams } from "react-router-dom";
import { selectHasComments, addComments } from "../app/slices/commentsSlice";
import { getComments } from "../utils/api";
import { RootState } from "../app/store";

const CommentsPage: React.FC = () => {
    const {subreddit, id} = useParams<{subreddit: string, id: string}>();
    const dispatch = useDispatch();
    const hasComments = useSelector(selectHasComments(id!));
    const navigate = useNavigate();

    const selectOnePost = useMemo(() => createSelectOnePost(id!, subreddit!), [id, subreddit]);
    const post = useSelector(selectOnePost);

    useEffect(() => {
        const lookForComments = async () => {
            if (!post.author) {
                const cachedPosts = localStorage.getItem(`posts${subreddit}`);
                console.log(cachedPosts)
                dispatch(
                    addPosts({
                        subreddit: subreddit || "",
                        posts: JSON.parse(cachedPosts || "")
                    })
                );
                
                if (!post.author) navigate("/notfound");
            }

            if (!hasComments) {
                const cached = localStorage.getItem(`comments${id}`);
                if (cached) {
                    const cachedJson = JSON.parse(cached);
                    dispatch(addComments({
                        id: post.id,
                        comments: cachedJson
                    }))
                } else {
                    const comments = await getComments(post.permalink!);
                    dispatch(addComments({
                        id: post.id,
                        comments
                    }));
                    localStorage.setItem(`comments${id}`, JSON.stringify(comments));
                }
            }
        };
        lookForComments();
    }, [id]);

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