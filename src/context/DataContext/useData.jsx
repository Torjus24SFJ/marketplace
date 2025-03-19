import { useContext } from "react";
import { ProductListContext } from "../DataContext/DataContext";

export function useData() {
  const { productList } = useContext(ProductListContext);
  return { productList };
}
