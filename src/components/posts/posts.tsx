import React, { useEffect, useState } from "react";
import Post from "./post";
import { useDispatch, useSelector } from "react-redux";
import { selectPosts } from "../../app/slices/postsSlice";
import { useParams } from "react-router-dom";
import { PostAtributes } from "./post";
import { addPosts } from "../../app/slices/postsSlice";
import { getPosts, getIcon } from "../../utils/api";
const Posts:React.FC = () => {
    interface PostFetchAttributes {
        data : PostAtributes
    }

    let {subreddit} = useParams<{subreddit: string}>();
    if (!subreddit) {
        subreddit = "Home"
    }

    const [postsList, setPostsLists] = useState<PostAtributes[]>();
    const posts = useSelector(selectPosts(subreddit));
    const dispatch = useDispatch();
    
    useEffect(() => {
        const fetchPosts = async() => {
            const data = await getPosts(subreddit.split(" ").join(""));
            console.log(data.data.children)
            const processed = await Promise.all(
                data.data.children.map(async (post: PostFetchAttributes) => {
                    return {
                        "title": post.data.title,
                        "id": post.data.id,
                        "author": post.data.author,
                        "score": post.data.score,
                        "subreddit": post.data.subreddit,
                        "icon_img": await getIcon(post.data.author),
                        "selftext": post.data.selftext,
                        "imagem": post.data.post_hint === "image" ? post.data.url_overridden_by_dest : null,
                        "video": post.data.media?.reddit_video?.fallback_url,
                        "num_comments": post.data.num_comments,
                        "created_utc": post.data.created_utc,
                        "permalink": post.data.permalink,
                        "isComment": false
                    }
                })
            );
            console.log(processed);
            dispatch(addPosts({
                subreddit: processed[0]?.subreddit,
                posts: processed
            }))

            localStorage.setItem(`posts${processed[0]?.subreddit}`, JSON.stringify(processed))
            setPostsLists(processed);
        }

        if (!posts){
            const cached = localStorage.getItem(`posts${subreddit}`);
            if (cached){
                const cachedJson = JSON.parse(cached);
                dispatch(addPosts({
                    subreddit,
                    posts: cachedJson
                }));
                setPostsLists(cachedJson);
            } else {
                fetchPosts();
            }
        } else {
            setPostsLists(posts);
        }

        
    }, [subreddit]);

    return (
        <div className="flex flex-col gap-2.5">
            {postsList?.map((post, index) => {
                return <Post title={post.title} 
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
                                key={index}
                                isComment={false}
                                url_overridden_by_dest={null}
                                post_hint={null}
                                media={undefined} />
            })}
        </div>
        
    )
}

export default Posts;