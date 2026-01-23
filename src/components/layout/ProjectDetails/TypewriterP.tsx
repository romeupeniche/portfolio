import { useState, useEffect, useRef } from "react";

const TypewriterP: React.FC<{
  children: string;
  isExpanded: boolean;
}> = ({ children, isExpanded }) => {
  const [displayedText, setDisplayedText] = useState("");
  const prevChildrenRef = useRef(children);

  const CHAR_LIMIT = 300;

  useEffect(() => {
    if (prevChildrenRef.current !== children) {
      setDisplayedText("");
      prevChildrenRef.current = children;
      return;
    }

    let i = displayedText.length;
    const targetLimit = isExpanded ? children.length : CHAR_LIMIT;

    if (i > targetLimit) {
      setDisplayedText(children.slice(0, targetLimit));
      return;
    }

    const timer = setInterval(() => {
      setDisplayedText(children.slice(0, i));
      i++;
      if (i > targetLimit) clearInterval(timer);
    }, 5);

    return () => clearInterval(timer);
  }, [children, isExpanded, CHAR_LIMIT, displayedText.length]);

  return (
    <div className="relative">
      <p
        className={`text-gray-400 text-sm leading-relaxed opacity-0 pointer-events-none select-none ${
          !isExpanded ? "line-clamp-4" : "pr-2"
        }`}
        aria-hidden="true"
      >
        {children}
      </p>

      <p
        className={`text-gray-400 text-sm leading-relaxed absolute top-0 left-0 ${
          !isExpanded ? "line-clamp-4" : "pr-2"
        }`}
      >
        {displayedText}
        {!isExpanded &&
          displayedText.length >= CHAR_LIMIT &&
          children.length > CHAR_LIMIT && (
            <span className="text-light-blue font-bold">...</span>
          )}
      </p>
    </div>
  );
};

export default TypewriterP;
