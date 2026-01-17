import React, { useState, useEffect, useCallback, useRef } from "react";

interface QueueItem {
  from: string;
  to: string;
  start: number;
  end: number;
  char: string | undefined;
}

interface TextScrambleLoopProps {
  phrases: string[];
  loopDelay?: number;
  className?: string;
  dudClassName?: string;
}

const CHARS = "!<>-_\\/[]{}—=+*^?#________";

const TextScrambleLoop: React.FC<TextScrambleLoopProps> = ({
  phrases,
  loopDelay = 1000,
  className,
  dudClassName = "text-gray-400 opacity-70",
}) => {
  const [scrambledContent, setScrambledContent] = useState<React.ReactNode[]>(
    []
  );

  const frameRef = useRef(0);
  const frameRequestRef = useRef<number>(0);
  const queueRef = useRef<QueueItem[]>([]);
  const resolveRef = useRef<() => void>(null);
  const textRef = useRef("");

  const randomChar = useCallback(() => {
    return CHARS[Math.floor(Math.random() * CHARS.length)];
  }, []);

  const update = useCallback(() => {
    const output: React.ReactNode[] = [];
    let complete = 0;

    const currentQueue = queueRef.current;
    const currentFrame = frameRef.current;

    for (let i = 0; i < currentQueue.length; i++) {
      const item = currentQueue[i];

      if (currentFrame >= item.end) {
        complete++;
        output.push(item.to);
      } else if (currentFrame >= item.start) {
        if (!item.char || Math.random() < 0.28) {
          item.char = randomChar();
          currentQueue[i].char = item.char;
        }
        output.push(
          <span key={i} className={dudClassName}>
            {item.char}
          </span>
        );
      } else {
        output.push(item.from);
      }
    }

    setScrambledContent(output);

    if (complete === currentQueue.length) {
      if (resolveRef.current) resolveRef.current();
    } else {
      frameRef.current++;
      frameRequestRef.current = requestAnimationFrame(update);
    }
  }, [randomChar, dudClassName]);

  const setText = useCallback(
    (newText: string) => {
      const oldText = textRef.current || "";
      textRef.current = newText;

      const length = Math.max(oldText.length, newText.length);

      const promise = new Promise<void>((resolve) => {
        resolveRef.current = resolve;
      });

      const newQueue: QueueItem[] = [];
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || "";
        const to = newText[i] || "";
        const start = Math.floor(Math.random() * 40);
        const end = start + Math.floor(Math.random() * 40);

        newQueue.push({ from, to, start, end, char: undefined });
      }

      queueRef.current = newQueue;

      cancelAnimationFrame(frameRequestRef.current!);
      frameRef.current = 0;

      update();

      return promise;
    },
    [update]
  );

  useEffect(() => {
    let counter = 0;
    let isCancelled = false;

    if (!phrases || phrases.length === 0) return;

    const loop = async () => {
      while (!isCancelled) {
        const newText = phrases[counter % phrases.length];

        await setText(newText);

        await new Promise((resolve) => setTimeout(resolve, loopDelay));

        counter++;
      }
    };

    loop();

    return () => {
      isCancelled = true;
      cancelAnimationFrame(frameRequestRef.current!);

      setScrambledContent([phrases[counter % phrases.length] || ""]);
    };
  }, [phrases, loopDelay, setText]);

  return <div className={className}>{scrambledContent}</div>;
};

export default TextScrambleLoop;
