import React from "react";

//function component to display the score and allow the user to play again
const Result = ({score, playAgain}) => (
    <div className="score-board">
        <div className="score">
            You score {score}/5 correct answers!
        </div>
        <button className="playBtn" onClick={playAgain}>
            Play again!
        </button>
    </div>
);

export default Result;