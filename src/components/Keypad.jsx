import React, { useEffect, useState } from "react";

export default function Keypad({ usedKeys, darkMode }) {
  const [letters, setLetters] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3001/letters")
      .then((res) => res.json())
      .then((json) => {
        setLetters(json);
      });
  }, []);
  return (
    <div className={darkMode ? "keypad-dark" : "keypad"}>
      {letters
        ? letters.map((letter) => {
            const color = usedKeys[letter.key];
            return (
              <div className={color} key={letter.key}>
                {letter.key}
              </div>
            );
          })
        : null}
    </div>
  );
}
