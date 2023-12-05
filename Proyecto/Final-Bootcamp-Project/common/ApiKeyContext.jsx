// ApiKeyContext.js
import React, { createContext, useContext, useState } from "react";

// Crea el contexto
const ApiKeyContext = createContext();

// Proveedor del contexto
export const ApiKeyProvider = ({ children }) => {
  const [apiKey, setApiKey] = useState("718630c252996a0ac1289f104e53625e");

  return (
    <ApiKeyContext.Provider value={{ apiKey, setApiKey }}>
      {children}
    </ApiKeyContext.Provider>
  );
};

// Función de utilidad para acceder al contexto
export const useApiKey = () => {
  const context = useContext(ApiKeyContext);
  if (!context) {
    throw new Error("useApiKey debe ser utilizado dentro de un ApiKeyProvider");
  }
  return context;
};
