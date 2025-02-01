import React from "react";
import { Link } from "react-router-dom";
import { CircleUser, Github } from "lucide-react";

const MyInfo: React.FC = () => {
    return (
        <div className="border border-gray-400 rounded-sm">
            <div className="flex items-center gap-1">
                <CircleUser color="#000000" size={45} />
                <div>
                    <span className="text-xl">Shelton Agostinho</span>
                    <div className="text-xs text-gray-400">See my other projects here!</div>
                </div>
            </div>
            <Link className="bg-redditorange rounded-full" to={'https://github.com/lazio47'}>
                <Github color="#FFFFFF" size={24}/>
                <p className="text-white text-sm" >My Github</p>
            </Link>
        </div>
    )
}

export default MyInfo;