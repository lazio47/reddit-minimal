import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import UserProfile from "../components/userProfile";
import SideSection from "../components/side_section/sideSection";

const AppLayout: React.FC = () => {
    const onSearch = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('Submited...');
    }
    return (
        <div className="relative p-4">
            <nav className={'fixed top-0 right-0 left-0 h-12 border-double border-b-1 bg-white border-b-[#EDEFF1] max-w-5xl mx-auto'} >
                <ul className="flex  justify-around items-center">
                    <li>
                        <NavLink className={''} to={'/'}>
                            <img className="h-8 hidden sm:block" src="src/assets/reddit-icon-big.png" alt="Default logo" />
                            <img className="h-8 sm:hidden" src="src/assets/reddit-icon-small.png" alt="Mobile logo" />
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
                                <input type="search" id="default-search" className="block w-full h-8 p-4 ps-10 text-sm text-gray-900 border-2 focus:border-solid focus:border-redditorange border-redditorange rounded-full border-solid" placeholder="Search Reddit" required />
                            </div>
                        </form>
                    </li>
                    <li>
                        <div className="hidden sm:flex items-center justify-center gap-1">
                            <UserProfile />
                            <div>
                                <span className="text-xs">shelton</span>
                                <div className="flex justify-center items-center"><img className="w-4 h-4" src="src/assets/karma.png" alt="Karma icon" /><span className="text-xs text-gray-400">16 karma</span></div>
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