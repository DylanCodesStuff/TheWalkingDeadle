import React from "react";
import { useState } from "react";
import HellModeModal from "./HellModeModal";
export default function Navbar({ difficulty, setDifficulty, darkMode, setDarkMode }) {
  const [showHellModal, setShowHellModal] = useState(false);
  function handleDifficultyToggle() {
    if (difficulty == "easy") {
      setDifficulty("hard");
      document.body.classList.add("hardMode");
      setShowHellModal(true);
    } else if (difficulty == "hard") {
      setDifficulty("easy");
      document.body.classList.remove("hardMode");
    }
  }

  function handleDarkModeToggle() {
    setDarkMode(!darkMode);
  }

  return (
    <>
      <div className={`${darkMode ? "navbar-dark" : "navbar"} ${difficulty === "hard" ? " navbar-hardMode" : null}`}>
        <div className={`difficulty-toggle ${difficulty === "easy" ? "easy-btn" : "hard-btn"}`} onClick={handleDifficultyToggle}>
          {difficulty === "easy" ? "Easy Mode" : "Hell Mode"}
        </div>
        <div className={`title ${difficulty == "hard" ? "hardMode-title" : null}`}>
          <h1>The Walking Deadle</h1>
        </div>
        <div className="dark-mode-toggle">
          <input type="checkbox" id="darkmode-toggle" />
          <label onClick={handleDarkModeToggle} htmlFor="darkmode-toggle"></label>
        </div>
      </div>
      {showHellModal && <HellModeModal showHellModal={showHellModal} setShowHellModal={setShowHellModal} />}
    </>
  );
}
