import React from "react";

export default function Modal({ isCorrect, turn, solution, setSolution, difficulty, setShowModal, darkMode }) {
  function handlePlayAgain() {
    if (difficulty == "easy") {
      fetch("http://localhost:3001/solutions")
        .then((res) => res.json())
        .then((json) => {
          const randomSolution = json[Math.floor(Math.random() * json.length)];
          setSolution(randomSolution.word);
        });
    } else if (difficulty == "hard") {
      fetch("http://localhost:3001/hardSolutions")
        .then((res) => res.json())
        .then((json) => {
          const randomSolution = json[Math.floor(Math.random() * json.length)];
          setSolution(randomSolution.word);
        });
    }
    setSolution(false);
    setShowModal(false);
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
