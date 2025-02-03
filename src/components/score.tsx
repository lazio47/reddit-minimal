import { ArrowBigDown, ArrowBigUp } from "lucide-react";
import React, { useState } from "react";

interface ScoreAtribute {
    "score": number,
}

const Score:React.FC<ScoreAtribute> = ({score}: ScoreAtribute) => {
    const [colorUp, setColorUP] = useState("#878A8C");
    const [colorDown, setColorDown] = useState("#878A8C");
    const [scoreValue, setScoreValue] = useState(score);

    const handleClickArrow = (color: string, theOtherColor: string, setColor:React.Dispatch<React.SetStateAction<string>>, setTheOtherColor:React.Dispatch<React.SetStateAction<string>>, upOrDown: string) => {
        if (color === "#FF4500") {
            setColor("#878A8C");
            upOrDown === "up" ? setScoreValue(prev => prev-1) : setScoreValue(prev => prev+1);
        } else {
            setTheOtherColor(color);
            setColor("#FF4500");
            upOrDown === "up" ? 
                            theOtherColor ==="#878A8C" ? setScoreValue(prev => prev+1) : setScoreValue(prev => prev+2) 
                            : theOtherColor ==="#878A8C" ? setScoreValue(prev => prev-1) : setScoreValue(prev => prev-2);
        }
    }
    return (
        <div className="max-w-6 max-h-18 flex flex-col justify-center items-center">
            <ArrowBigUp className="p-0.5" onClick={() => handleClickArrow(colorUp, colorDown, setColorUP, setColorDown, "up")} color={colorUp} size={24} />
            <div className="text-xs font-bold">{scoreValue}</div>
            <ArrowBigDown className="p-0.5" onClick={() => handleClickArrow(colorDown, colorUp, setColorDown, setColorUP, "down")} color={colorDown} size={24} />
        </div>
    );
}

export default Score;