import React from "react";
import UserProfile from "./userProfile";
import { Image, Link } from "lucide-react";

const Highlights:React.FC = () => {
    return (
        <div className="py-2 px-4 hidden sm:flex justify-between items-center border border-gray-400 rounded-sm">
            <UserProfile />
            <div className="flex gap-5 items-center">
                <Image size={20} color="#878A8C" />
                <Link size={20} color="#878A8C" />
            </div>
        </div>
    );
}

export default Highlights;