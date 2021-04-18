import React, { useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isModalShown, setIsModalShown] = useState(false);
  const [isNavbarWhite, setIsNavbarWhite] = useState(false);

  return (
    <AppContext.Provider value={{ isModalShown, setIsModalShown, isNavbarWhite, setIsNavbarWhite }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
