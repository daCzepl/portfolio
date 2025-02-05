import { motion } from "framer-motion";
import { useCursorContext } from "./providers/CursorContext";

export const Cursor = () => {
  const { mousePosition, innerCursorVariant, outerCursorVariant, isTouchDevice } = useCursorContext();
  const variants = {
    innerCursorDefault: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      transition: { type: "tween", duration: 0.0005 },
    },
    outerCursorDefault: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: { type: "tween", duration: 0.05 },
    },
    hover: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
      height: 24,
      width: 24,
      transition: { type: "tween", duration: 0.0005 },
    },
  };

  if (isTouchDevice) {
    return null;
  }

  return (
    <div>
      <motion.div
        className="fixed top-0 left-0 bg-light-blue w-2 h-2 rounded-full pointer-events-none z-50"
        variants={variants}
        animate={innerCursorVariant}
      />
      <motion.div
        className="fixed top-0 left-0 outline outline-1 outline-light-blue w-8 h-8 rounded-full pointer-events-none z-50"
        variants={variants}
        animate={outerCursorVariant}
      />
    </div>
  );
};
