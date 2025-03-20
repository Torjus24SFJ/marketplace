import { createContext, useState, useEffect } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ProductListContext = createContext();

export const DataProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProductList(data);
        console.log(data);
      })
      .catch((error) => console.log("Error fetching product data", error));
  }, []);

  const categories = [
    "All",
    ...new Set(productList.map((product) => product.category)),
  ];

  const filteredProducts = selectedCategory ? productList.filter((product) => product.category === selectedCategory) : productList;

  const value = {
    categories,
    filteredProducts,
    selectedCategory,
    setSelectedCategory,
    productList,
    setProductList
  }

  return (
    <ProductListContext.Provider value={value}>
      {children}
    </ProductListContext.Provider>
  );
};


