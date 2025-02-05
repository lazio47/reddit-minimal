import React from "react";
import Subreddits from "./subreddits";

const SubredditList:React.FC = () => {
    return (
        <div className="border border-gray-400 rounded-sm">
            <div className="w-full h-9 overflow-hidden">
                <img className="w-full object-cover object-center" src="https://d28jbe41jq1wak.cloudfront.net/BlogsImages/Pop_Art_ThumbNail_638237807737883291.webp" alt="Simple image" />
            </div>
            <Subreddits />
        </div>
    );
}

export default SubredditList;