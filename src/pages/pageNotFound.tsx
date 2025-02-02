import React from "react";
import Highlights from "../components/highlights";
import Notfound from "../components/notFound";

const PageNotFound:React.FC = () => {
    return (
        <div className="w-screen flex flex-col gap-5">
            <Highlights />
            <Notfound />
        </div>
    )
};

export default PageNotFound;