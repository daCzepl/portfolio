import { useState, useEffect } from "react";

export const useCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [innerCursorVariant, setInnerCursorVariant] = useState("innerCursorDefault");
  const [outerCursorVariant] = useState("outerCursorDefault");

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  const enterHover = () => setInnerCursorVariant("hover");
  const exitHover = () => setInnerCursorVariant("innerCursorDefault");

  return { mousePosition, innerCursorVariant, outerCursorVariant, enterHover, exitHover };
};
