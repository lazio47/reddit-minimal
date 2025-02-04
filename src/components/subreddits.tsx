import React from "react";
import { useState } from "react";
import { selectSubreddits } from "../app/slices/subredditsSlice";
import { useSelector } from "react-redux";

const Subreddits: React.FC = () => {
    interface subredd {
        data: {
            id: number,
            display_name: string,
            icon_img?: string | undefined
        }
    }

    const [active, setActive] = useState<number|string>();
    const [subreddits, setSubreddits] = useState<subredd[]>(useSelector(selectSubreddits).subreddits);

    return (
        <ul>
            {subreddits.map((subreddit:subredd, index: number | string) => {
                return (
                    <a href="#" key={index}>
                        <li className={`mx-2 transition duration-300 ease-in-out cursor-pointer hover:bg-gray-200 rounded-lg flex gap-2 p-2 ${index === active ? 'active' : ''}`} key={index} onClick={() => setActive(index)}>
                            <img className="h-5 rounded-full pl-1" src={subreddit.data.icon_img || 'src/assets/reddit-icon-small.png'} alt="Sureddit icon" />
                            <span className="text-[16px]">{subreddit.data.display_name}</span>
                        </li>
                    </a>
                )
            })}
        </ul>
    );
}

export default Subreddits;