import { createContext, useState } from "react";
import type { ReactNode } from "react";
import { set } from "react-hook-form";

export const DataContext = createContext({});

const DataPorvider = ({ children }: { children: ReactNode }) => {
  let [dataflight, setdataflight] = useState({
    Location: "",
    Destination: "",
    Date: "",
    ReturnDate: "",
  });
  return (
    <DataContext.Provider value={{ dataflight, setdataflight }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataPorvider;
