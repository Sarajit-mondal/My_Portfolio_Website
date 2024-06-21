/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const TypewriterEffect = ({ setTextLength, text, speed = 500 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index++;
      if (index === text.length - 1) {
        clearInterval(interval);
        setTextLength(index);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return <span>{displayedText}</span>;
};

export default TypewriterEffect;
