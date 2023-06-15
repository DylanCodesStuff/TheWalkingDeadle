import { useEffect, useState } from "react";
import Wordle from "./components/Wordle";
import Navbar from "./components/Navbar";
import { data } from "../data/db";
function App() {
  const [solution, setSolution] = useState(null);
  const [difficulty, setDifficulty] = useState("easy");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (difficulty == "easy") {
      const randomSolution = data.solutions[Math.floor(Math.random() * data.solutions.length)];
      setSolution(randomSolution.word);
    } else if (difficulty == "hard") {
      const randomSolution = data.hardSolutions[Math.floor(Math.random() * data.hardSolutions.length)];
      setSolution(randomSolution.word);
    }
  }, [setSolution]);

  return (
    <div className={`${darkMode ? "App-darkmode" : "App"} ${difficulty === "hard" ? "App-hardMode" : null}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} difficulty={difficulty} setDifficulty={setDifficulty} />
      {solution && <Wordle solution={solution} darkMode={darkMode} setSolution={setSolution} difficulty={difficulty} />}
    </div>
  );
}

export default App;
