import React from "react";
import Highlights from "../components/highlights";
import Posts from "../components/posts/posts";

const PostsPage: React.FC = () => {
    return (
        <div className="w-screen flex flex-col gap-5">
            <Highlights />
            <Posts />
        </div>
    );
}

export default PostsPage;