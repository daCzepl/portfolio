import React, { ReactNode, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface WritingAnimationTextProps {
  children: ReactNode;
  delay?: number;
}

const textVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const WritingAnimationText: React.FC<WritingAnimationTextProps> = ({
  children,
  delay = 0,
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const textArray = React.Children.toArray(children).filter(
    (child): child is string => typeof child === "string"
  );

  return (
    <div>
      {textArray.map((line, index) => (
        <AnimatePresence key={index}>
          {visible && (
            <motion.div
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: index * 0.25,
              }}
            >
              {line}
            </motion.div>
          )}
        </AnimatePresence>
      ))}
    </div>
  );
};
