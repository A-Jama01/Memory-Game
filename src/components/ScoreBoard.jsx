import React from "react";

function ScoreBoard({ score, highScore }) {

    return (
        <>
            <div>SCORE:  {score}</div>
            <div>HIGHSCORE:  {highScore}</div>
        </>
    )
}

export default ScoreBoard;