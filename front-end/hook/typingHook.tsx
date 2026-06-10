'use client'

import { useState, useEffect, useRef } from "react";

export const useTypingEffect = (texts: string[]) => {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const currentFullText = texts[index];
    const typingSpeed = 150;
    const deletingSpeed = 75;
    const pauseTime = 1500;

    let frameId: number;

    function step(timestamp: number) {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;

      if (!isDeleting) {
        // Логіка друку
        const nextLength = Math.min(Math.floor(elapsed / typingSpeed), currentFullText.length);
        setDisplayedText(currentFullText.slice(0, nextLength));

        if (nextLength === currentFullText.length) {
          setTimeout(() => {
            setIsDeleting(true);
            startTimeRef.current = null;
          }, pauseTime);
        } else {
          frameId = requestAnimationFrame(step);
        }
      } else {
        // Логіка видалення
        const nextLength = Math.max(currentFullText.length - Math.floor(elapsed / deletingSpeed), 0);
        setDisplayedText(currentFullText.slice(0, nextLength));

        if (nextLength === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length); // Перехід до наступного слова
          startTimeRef.current = null;
        } else {
          frameId = requestAnimationFrame(step);
        }
      }
    }

    frameId = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(frameId);
      startTimeRef.current = null;
    };
  }, [index, isDeleting, texts]);

  return displayedText; // Хук має повертати поточний текст
};
