import React, { useState } from "react";

export const RegisterContext = React.createContext("");

export const PendingInformations = ({ children }) => {
  const [pedingRegisterValue, setPendingRegister] = useState({
    photo_url: "",
    typeOfServices: "",
  });
  return (
    <RegisterContext.Provider
      value={{
        pedingRegisterValue,
        setPendingRegister,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};
