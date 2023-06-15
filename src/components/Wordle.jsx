import React, { useEffect, useState } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";
import Keypad from "./Keypad";
import Modal from "./Modal";
//destructor the solution directly
export default function Wordle({ solution, darkMode, setSolution, difficulty }) {
  //returned from bottom of useWordle file.
  const { currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys } = useWordle(solution);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    if (isCorrect) {
      setTimeout(() => {
        setShowModal(true);
      }, 3000);
      window.removeEventListener("keyup", handleKeyup);
    }

    if (turn > 5 && !isCorrect) {
      setTimeout(() => {
        setShowModal(true);
      }, 3000);
      window.removeEventListener("keyup", handleKeyup);
    }
    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup, isCorrect, turn]);

  useEffect(() => {
    console.log(guesses, turn, isCorrect);
  }, [guesses, turn, isCorrect]);

  return (
    <>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} solution={solution} difficulty={difficulty} />
      <Keypad usedKeys={usedKeys} darkMode={darkMode} />
      {showModal && (
        <Modal darkMode={darkMode} setShowModal={setShowModal} isCorrect={isCorrect} turn={turn} difficulty={difficulty} solution={solution} setSolution={setSolution} />
      )}
    </>
  );
}
