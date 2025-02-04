import React from "react";
import MyInfo from "./myInfo";
import SubredditList from "./subredditList";
import Name from "./name";

const SideSection:React.FC = () => {
    return (
        <div className="hidden sm:block max-w-[250px]">
            <MyInfo />
            <SubredditList />
            <Name />
        </div>
    );
}

export default SideSection;