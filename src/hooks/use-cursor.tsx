import { useState, useEffect } from "react";

export const useCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [innerCursorVariant, setInnerCursorVariant] = useState("innerCursorDefault");
  const [outerCursorVariant] = useState("outerCursorDefault");
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    if (!window.matchMedia("(pointer: coarse)").matches) {
      window.addEventListener("mousemove", mouseMove);
    } else {
      console.log("is touch!");
      setIsTouchDevice(true);
    }
    return () => {
      if (!window.matchMedia("(pointer: coarse)").matches) {
        window.removeEventListener("mousemove", mouseMove);
      }
    };
  }, []);

  const enterHover = () => setInnerCursorVariant("hover");
  const exitHover = () => setInnerCursorVariant("innerCursorDefault");

  return { mousePosition, innerCursorVariant, outerCursorVariant, enterHover, exitHover, isTouchDevice };
};
