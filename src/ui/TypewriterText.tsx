import { useState, useEffect } from "react";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  className?: string;
  highlightWords?: string[];
}

export default function TypewriterText({
  text,
  speed = 100,
  className = "",
  highlightWords = [],
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else {
      setIsTypingComplete(true);
    }
  }, [currentIndex, text, speed]);

  const renderText = (text: string) => {
    if (highlightWords.length === 0) {
      return <span className="font-bold text-onSurface">{text}</span>;
    }

    // Split the original text into words to get the structure
    const originalWords = text.split(" ");
    const currentWords = displayText.split(" ");

    return (
      <span className="font-bold">
        {currentWords.map((word, index) => {
          // Check if this word should be highlighted based on the original text
          const originalWord = originalWords[index];
          const isHighlighted =
            originalWord &&
            highlightWords.some((highlightWord) =>
              originalWord.toLowerCase().includes(highlightWord.toLowerCase())
            );

          return (
            <span
              key={index}
              className={isHighlighted ? "text-primary" : "text-onSurface"}
            >
              {word}
              {index < currentWords.length - 1 ? " " : ""}
            </span>
          );
        })}
        {/* Add non-breaking space before cursor to keep it with last word */}
        <span className="whitespace-nowrap">&nbsp;</span>
      </span>
    );
  };

  return (
    <div className={`inline ${className}`}>
      {renderText(text)}
      {!isTypingComplete && (
        <span className="inline-block font-bold text-primary animate-pulse">
          |
        </span>
      )}
      {isTypingComplete && (
        <span className="inline-block font-bold text-primary animate-bounce">
          |
        </span>
      )}
    </div>
  );
}
