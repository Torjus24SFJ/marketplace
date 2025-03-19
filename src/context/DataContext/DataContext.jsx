import { createContext, useState, useEffect } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ProductListContext = createContext();

export const DataProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProductList(data);
        console.log(data); 
      });
  }, []);

  return (
    <ProductListContext.Provider value={{ productList }}>
        {children}
    </ProductListContext.Provider>
  )
};

