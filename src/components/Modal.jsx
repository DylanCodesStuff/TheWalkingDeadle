import React from "react";
import { data } from "../../data/db";
export default function Modal({ isCorrect, turn, solution, setSolution, difficulty, setShowModal, darkMode, resetState }) {
  function handlePlayAgain() {
    // if (difficulty == "easy") {
    //   const randomSolution = data.solutions[Math.floor(Math.random() * data.solutions.length)];
    //   setSolution(randomSolution.word);
    // } else if (difficulty == "hard") {
    //   const randomSolution = data.hardSolutions[Math.floor(Math.random() * data.hardSolutions.length)];
    //   setSolution(randomSolution.word);
    // }
    resetState();
    setShowModal(false);
    setSolution("");
  }

  return (
    <div className="modal">
      {isCorrect && (
        <div className={`modal-div ${darkMode ? "modal-dark" : ""}`}>
          <h2>You Win!</h2>
          <p className="solution">The word was: {solution}</p>
          <p>You found the solution in {turn} guesses!</p>
          <button className="play-again-btn" onClick={handlePlayAgain}>
            Play Again
          </button>
        </div>
      )}
      {!isCorrect && (
        <div className={`modal-div ${darkMode ? "modal-dark" : ""}`}>
          <h1>You lost!</h1>
          <p className="solution">The word was: {solution}</p>
          <button className="play-again-btn" onClick={handlePlayAgain}>
            Play Again
          </button>
        </div>
      )}
    </div>
  );
}
