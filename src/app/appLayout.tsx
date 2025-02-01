import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const AppLayout: React.FC = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to={'/home'}>
                            <img className="hidden sm:block" src="src/assets/reddit-icon-big.png" alt="Default logo" />
                            <img className="sm:hidden" src="src/assets/reddit-icon-small.png" alt="Mobile logo" />
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}

export default AppLayout;