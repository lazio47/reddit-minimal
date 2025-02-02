import React from "react";

const Notfound:React.FC = () => {
    return (
        <div className="h-56 max-1/2 flex flex-col items-center justify-center gap-7 border border-gray-400">
            <p className="text-redditorange text-8xl">404</p>
            <p className="text-sm">Page not found - Return <span className="text-redditorange">HOME</span></p>
        </div>
    )
}

export default Notfound;