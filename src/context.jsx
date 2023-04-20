import { createContext, useState, useContext } from "react";

import React from "react";
const appContext = createContext();
const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  return <appContext.Provider value={{ isSidebarOpen, openSidebar, closeSidebar }}>{children}</appContext.Provider>;
};

export default AppProvider;

export const useGlobalContext = () => {
  return useContext(appContext);
};
