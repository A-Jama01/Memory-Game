import React from "react";

function ScoreBoard({ score, highScore }) {

    return (
        <div className="flex flex-row justify-center gap-16 custom-font mt-6">
            <div>SCORE:  {score}</div>
            <div>HIGHSCORE:  {highScore}</div>
        </div>
    )
}

export default ScoreBoard;