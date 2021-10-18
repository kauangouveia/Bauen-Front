import React, { useState } from "react";

export const RegisterContext = React.createContext("");

export const RegisterProvider = ({ children }) => {
  const [registerValue, setRegisterValue] = useState({
    name: "",
    email: "",
    phone: "",
    address: {
      zipcode: "",
      street: "",
      neighborhood: "",
      city: "",
      state: "",
      number: "",
    },
    cpf: "",
    rg: "",
    born: "",
    password: "",
    confirmPassword: "",
    userType: "",
  });
  return (
    <RegisterContext.Provider
      value={{
        registerValue,
        setRegisterValue,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};
