import { useState } from "react";

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([...Array(6)]); // each guess is an array
  const [history, setHistory] = useState([]); // each guess is a string
  const [isCorrect, setIsCorrect] = useState(false);
  const [usedKeys, setUsedKeys] = useState({});

  function resetState() {
    setTurn(0);
    setCurrentGuess("");
    setGuesses([...Array(6)]);
    setHistory([]);
    setIsCorrect(false);
    setUsedKeys({});
    console.log(solution, isCorrect, turn);
  }

  const formatGuess = () => {
    let solutionArray = [...solution];
    let formattedGuess = [...currentGuess].map((letter) => {
      return { key: letter.toLowerCase(), color: "grey" };
    });

    //find any green letters
    formattedGuess.forEach((letter, i) => {
      if (solutionArray[i] === letter.key) {
        formattedGuess[i].color = "green";
        solutionArray[i] = null;
      }
    });

    formattedGuess.forEach((letter, i) => {
      if (solutionArray.includes(letter.key) && letter.color !== "green") {
        formattedGuess[i].color = "yellow";
        solutionArray[solutionArray.indexOf(letter.key)] = null;
      }
    });
    return formattedGuess;
  };

  const addNewGuess = (formattedGuess) => {
    if (currentGuess === solution) {
      setIsCorrect(true);
    }
    setGuesses((prevGuesses) => {
      let newGuesses = [...prevGuesses];
      newGuesses[turn] = formattedGuess;
      return newGuesses;
    });
    setHistory((prevHistory) => {
      return [...prevHistory, currentGuess];
    });
    setTurn((prevTurn) => prevTurn + 1);
    setUsedKeys((prevUsedKeys) => {
      let newKeys = { ...prevUsedKeys };
      formattedGuess.forEach((letter) => {
        const currentColor = newKeys[letter.key];

        if (letter.color === "green") {
          newKeys[letter.key] = "green";
          return;
        }
        if (letter.color === "yellow" && currentColor !== "green") {
          newKeys[letter.key] = "yellow";
          return;
        }

        if (letter.color === "grey" && letter.color !== "yellow" && letter.color !== "green") {
          newKeys[letter.key] = "grey";
          return;
        }
      });
      return newKeys;
    });
    setCurrentGuess("");
  };

  //key from e
  const handleKeyup = ({ key }) => {
    if (key === "Enter") {
      if (turn > 5) {
        console.log("All guesses used");
        return;
      }

      if (history.includes(currentGuess)) {
        console.log("You already guessed that!");
        return;
      }

      if (currentGuess.length !== solution.length) {
        console.log("Word must use all the squares.");
        return;
      }
      const formatted = formatGuess();
      addNewGuess(formatted);
    }
    if (key === "Backspace") {
      setCurrentGuess((prev) => {
        return prev.slice(0, -1);
      });
      return;
    }

    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < solution.length) {
        setCurrentGuess((prev) => {
          return prev + key;
        });
      }
    }
  };

  return {
    turn,
    currentGuess,
    guesses,
    isCorrect,
    usedKeys,
    solution,
    handleKeyup,
    resetState,
  };
};

export default useWordle;
