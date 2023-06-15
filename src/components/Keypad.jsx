import React, { useEffect, useState } from "react";
import { data } from "../../data/db";
export default function Keypad({ usedKeys, darkMode }) {
  const [letters, setLetters] = useState(null);
  useEffect(() => setLetters(data.letters), []);
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
