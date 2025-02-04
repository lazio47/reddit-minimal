import React from "react";
import { CircleUser, Github } from "lucide-react";

const MyInfo: React.FC = () => {
    return (
        <div className="p-2 border border-gray-400 rounded-sm">
            <div className="flex items-center gap-1">
                <CircleUser color="#000000" size={45} />
                <div>
                    <span className="text-xl">Shelton Agostinho</span>
                    <div className="text-xs text-gray-400">See my other projects here!</div>
                </div>
            </div>
            <a href="https://github.com/lazio47" target="_blank" rel="noopener noreferrer">
                <button className="cursor-pointer h-8 w-9/10 my-4 mx-auto flex gap-2 items-center justify-center bg-redditorange rounded-full">
                    <Github color="#ffffff" size={20}/>
                    <p className="text-white text-sm" >My Github</p>
                </button>
            </a>
        </div>
    )
}

export default MyInfo;