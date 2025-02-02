import React from "react";
import { useState } from "react";

const Subreddits: React.FC = () => {
    /* mockup */
    interface subredd {
        data: {
            id: number,
            display_name: string,
            icon_img?: string | undefined
        }
    }
    const subreddits:subredd[] = [
        {
            'data': {
                'id': 1,
                'display_name': '/ONE',
                'icon_img': 'src/assets/karma.png'
            }
        },
        {
            'data': {
                'id': 2,
                'display_name': '/TWO',
            }
        },
        {
            'data': {
                'id': 3,
                'display_name': '/THREE',
            }
        },
        {
            'data': {
                'id': 4,
                'display_name': '/FOUR',
            }
        },
        {
            'data': {
                'id': 5,
                'display_name': '/FIVE',
            }
        }
    ];

    const [active, setActive] = useState<number|string>();

    return (
        <ul>
            {subreddits.map((subreddit:subredd, index: number | string) => {
                return (
                    <li className={`mx-2 transition duration-300 ease-in-out cursor-pointer hover:bg-gray-200 rounded-lg flex gap-2 p-2 ${index === active ? 'active' : ''}`} key={index} onClick={() => setActive(index)}>
                        <img className="h-5 rounded-full pl-1" src={subreddit.data.icon_img || 'src/assets/reddit-icon-small.png'} alt="Sureddit icon" />
                        <span className="text-[16px]">{subreddit.data.display_name}</span>
                    </li>
                )
            })}
        </ul>
    );
}

export default Subreddits;