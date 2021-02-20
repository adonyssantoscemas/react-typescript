import React, { createContext, useState } from "react";

export const DataContext = createContext();

const dataFix = {
  name: "Adonys",
  age: 17,
};

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(dataFix);

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
