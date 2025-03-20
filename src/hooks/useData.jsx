import { useContext } from "react";
import { ProductListContext } from "../context/DataContext/DataContext";

export function useData() {
  const context = useContext(ProductListContext);
  if (!context) {
    throw new Error("useData must be used inside DataProvider")
  }
  return context;
}
