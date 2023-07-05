import React, { ReactNode, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface WritingAnimationTextProps {
  children: ReactNode;
  styling: string;
}

const textVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const WritingAnimationText: React.FC<WritingAnimationTextProps> = ({
  children,styling
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

   const textArray = React.Children.toArray(children).filter(
    (child): child is string => typeof child === "string"
  );

  return (
    <div>
      <h1>
        {textArray.map((line, index) => (
          <AnimatePresence key={index}>
            {visible && (
              <motion.div
                className={styling}
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
                <br />
              </motion.div>
            )}
          </AnimatePresence>
        ))}
      </h1>
    </div>
  );
};
