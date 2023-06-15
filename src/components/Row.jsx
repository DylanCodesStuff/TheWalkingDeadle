import { nanoid } from "nanoid";
import React from "react";

//destructured from Grid.jsx

export default function Row({ guess, currentGuess, solution, difficulty }) {
  const testDummy = [...Array(8)];

  if (guess) {
    return (
      <div className="row past">
        {guess.map((letter, i) => (
          <div key={i} className={letter.color}>
            {letter.key}
          </div>
        ))}
      </div>
    );
  }

  if (currentGuess) {
    let letters = currentGuess.split("");

    return (
      <div className="row current">
        {letters.map((letter, i) => (
          <div key={i} className={`filled ${difficulty === "hard" ? "filled-hard" : ""}`}>
            {letter}
          </div>
        ))}
        {[...Array(solution.length - letters.length)].map((_, i) => (
          <div key={i}></div>
        ))}
      </div>
    );
  }

  if (solution) {
    return (
      <div className="row">
        {solution.split("").map(() => (
          <div key={nanoid()}></div>
        ))}
      </div>
    );
  }
}
