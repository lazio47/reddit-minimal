import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import UserProfile from "../components/userProfile";
import SideSection from "../components/side_section/sideSection";

const AppLayout: React.FC = () => {
    const [keyWord, setKeyword] = useState<string>("");
    const navigate = useNavigate();

    const onSearch = (event: React.FormEvent) => {
        event.preventDefault();
        const link = `/posts/${keyWord.split(" ").join("")}`;
        setKeyword("");
        navigate(link);
    }
    return (
        <div className="relative p-4">
            <nav className={'fixed top-0 right-0 left-0 h-12 border-double border-b-1 bg-white border-b-[#EDEFF1] max-w-5xl mx-auto'} >
                <ul className="flex  justify-around items-center">
                    <li>
                        <NavLink className={'flex items-center gap-1'} to={'/'}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            version="1.1"
                            width="30"
                            height="30"
                            viewBox="0 0 256 256"
                            xmlSpace="preserve"
                            >
                            <defs></defs>
                            <g
                                style={{
                                stroke: "none",
                                strokeWidth: 0,
                                strokeDasharray: "none",
                                strokeLinecap: "butt",
                                strokeLinejoin: "miter",
                                strokeMiterlimit: 10,
                                fill: "none",
                                fillRule: "nonzero",
                                opacity: 1,
                                }}
                                transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                            >
                                <circle
                                cx="45"
                                cy="45"
                                r="45"
                                style={{
                                    stroke: "none",
                                    strokeWidth: 1,
                                    strokeDasharray: "none",
                                    strokeLinecap: "butt",
                                    strokeLinejoin: "miter",
                                    strokeMiterlimit: 10,
                                    fill: "rgb(255,69,0)",
                                    fillRule: "nonzero",
                                    opacity: 1,
                                }}
                                transform="matrix(1 0 0 1 0 0)"
                                />
                                <path
                                d="M 75.011 45 c -0.134 -3.624 -3.177 -6.454 -6.812 -6.331 c -1.611 0.056 -3.143 0.716 -4.306 1.823 c -5.123 -3.49 -11.141 -5.403 -17.327 -5.537 l 2.919 -14.038 l 9.631 2.025 c 0.268 2.472 2.483 4.262 4.955 3.993 c 2.472 -0.268 4.262 -2.483 3.993 -4.955 s -2.483 -4.262 -4.955 -3.993 c -1.421 0.145 -2.696 0.973 -3.4 2.204 L 48.68 17.987 c -0.749 -0.168 -1.499 0.302 -1.667 1.063 c 0 0.011 0 0.011 0 0.022 l -3.322 15.615 c -6.264 0.101 -12.36 2.025 -17.55 5.537 c -2.64 -2.483 -6.801 -2.36 -9.284 0.291 c -2.483 2.64 -2.36 6.801 0.291 9.284 c 0.515 0.481 1.107 0.895 1.767 1.186 c -0.045 0.66 -0.045 1.32 0 1.98 c 0 10.078 11.745 18.277 26.23 18.277 c 14.485 0 26.23 -8.188 26.23 -18.277 c 0.045 -0.66 0.045 -1.32 0 -1.98 C 73.635 49.855 75.056 47.528 75.011 45 z M 30.011 49.508 c 0 -2.483 2.025 -4.508 4.508 -4.508 c 2.483 0 4.508 2.025 4.508 4.508 s -2.025 4.508 -4.508 4.508 C 32.025 53.993 30.011 51.991 30.011 49.508 z M 56.152 62.058 v -0.179 c -3.199 2.405 -7.114 3.635 -11.119 3.468 c -4.005 0.168 -7.919 -1.063 -11.119 -3.468 c -0.425 -0.515 -0.347 -1.286 0.168 -1.711 c 0.447 -0.369 1.085 -0.369 1.544 0 c 2.707 1.98 6.007 2.987 9.362 2.83 c 3.356 0.179 6.667 -0.783 9.407 -2.74 c 0.492 -0.481 1.297 -0.47 1.779 0.022 C 56.655 60.772 56.644 61.577 56.152 62.058 z M 55.537 54.34 c -0.078 0 -0.145 0 -0.224 0 l 0.034 -0.168 c -2.483 0 -4.508 -2.025 -4.508 -4.508 s 2.025 -4.508 4.508 -4.508 s 4.508 2.025 4.508 4.508 C 59.955 52.148 58.02 54.239 55.537 54.34 z"
                                style={{
                                    stroke: "none",
                                    strokeWidth: 1,
                                    strokeDasharray: "none",
                                    strokeLinecap: "butt",
                                    strokeLinejoin: "miter",
                                    strokeMiterlimit: 10,
                                    fill: "rgb(255,255,255)",
                                    fillRule: "nonzero",
                                    opacity: 1,
                                }}
                                transform="matrix(1 0 0 1 0 0)"
                                strokeLinecap="round"
                                />
                            </g>
                            </svg>
                            <img className="h-4 hidden sm:inline-block" src="//upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Reddit_logo.svg/512px-Reddit_logo.svg.png" alt="Reddit" />
                        </NavLink>
                    </li>
                    <li>
                        <form className="max-w-md mx-auto " onSubmit={(event) => onSearch(event)}>   
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                </div>
                                <input value={keyWord} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setKeyword(e.target.value)} type="search" id="default-search" className="block w-full h-8 p-4 ps-10 text-sm text-gray-900 border-2 focus:border-solid focus:border-redditorange border-redditorange rounded-full border-solid" placeholder="Search Reddit" required />
                            </div>
                        </form>
                    </li>
                    <li>
                        <div className="hidden sm:flex items-center justify-center gap-1">
                            <UserProfile />
                            <div>
                                <span className="text-xs">shelton</span>
                                <div className="flex justify-center items-center"><img className="w-4 h-4" src="https://styles.redditmedia.com/t5_2qhhz/styles/communityIcon_6wrax3ocfar41.png" alt="Karma icon" /><span className="text-xs text-gray-400">16 karma</span></div>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
            <div className="p-10 max-w-5xl mx-auto flex items-start gap-6 mt-6">
                <Outlet />
                <SideSection />
            </div>
        </div>
    );
}

export default AppLayout;