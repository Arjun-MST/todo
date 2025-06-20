import React from "react";
import { createContext, useContext, useState } from 'react';

// Create context
const MyContext = createContext();

// Create provider
export const MyProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

  return (
    <MyContext.Provider value={{tasks, setTasks }}>
      {children}
    </MyContext.Provider>
  );
};

// Custom hook to use context
export const useMyContext = () => useContext(MyContext);