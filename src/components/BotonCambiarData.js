import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

export const BotonCambiarData = () => {
  const { setData } = useContext(DataContext);

  const data = {
    name: "Matias",
    age: 5,
  };

  return (
    <div>
      <button onClick={() => setData(data)} className="btn btn-outline-primary">
        Cambiar Data
      </button>
    </div>
  );
};
