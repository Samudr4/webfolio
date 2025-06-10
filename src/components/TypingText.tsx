import React, { useState, useEffect } from "react";

const words = ["developer", "designer", "editor"];

export default function TypingText() {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [typing, setTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (typing) {
      if (charIndex < words[wordIndex].length) {
        timeout = setTimeout(() => {
          setText((prev) => prev + words[wordIndex][charIndex]);
          setCharIndex(charIndex + 1);
        }, 150);
      } else {
        timeout = setTimeout(() => {
          setTyping(false);
        }, 1500);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setText((prev) => prev.slice(0, -1));
          setCharIndex(charIndex - 1);
        }, 100);
      } else {
        setTyping(true);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, typing, wordIndex]);

  return (
    <>
      <span className="text-4xl font-semibold tracking-wide whitespace-nowrap text-gray-900 dark:text-white font-sans">
        {text}
        <span className="inline-block w-1 ml-1 bg-gray-900 dark:bg-white animate-blink" />
      </span>

      <style jsx>{`
        @keyframes blink {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
        .animate-blink {
          animation: blink 1.2s step-start infinite;
          height: 1.2em;
        }
      `}</style>
    </>
  );
}
