import { useContext } from "react"
import { ProductListContext } from "../DataContext/DataContext"

export const useData = () => useContext(ProductListContext);
