import React, { createContext, useContext } from "react";
import { useCursor } from "../../hooks/use-cursor";

const CursorContext = createContext<any>(null);

export const CursorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const cursor = useCursor();
  return <CursorContext.Provider value={cursor}>{children}</CursorContext.Provider>;
};

export const useCursorContext = () => useContext(CursorContext);
