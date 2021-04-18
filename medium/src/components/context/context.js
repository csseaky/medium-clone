import React, { useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isModalShown, setIsModalShown] = useState(false);
  return (
    <AppContext.Provider value={{ isModalShown, setIsModalShown }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
