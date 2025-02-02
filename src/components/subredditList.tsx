import React from "react";
import Subreddits from "./subreddits";

const SubredditList:React.FC = () => {
    return (
        <div className="max-w-[312px] border border-gray-400 rounded-sm">
            <img src="src/assets/head-subreddits.png" alt="Simple image" />
            <Subreddits />
        </div>
    );
}

export default SubredditList;