import { createContext, useState, useEffect } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ProductListContext = createContext();

export const DataProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProductList(data);
        console.log("Fetched productList: ", data);
      })
      .catch((error) => console.log("Error fetching product data", error));
  }, []);

  const categories = [
    "Browse All",
    ...new Set(productList.map((product) => product.category)),
  ];

  const filteredProducts = productList
    .filter((product) =>
      selectedCategory ? product.category === selectedCategory : true
    )
    .filter(
      (product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const value = {
    categories,
    filteredProducts,
    selectedCategory,
    productList,
    searchQuery,
    setSelectedCategory,
    setProductList,
    setSearchQuery,
  };

  return (
    <ProductListContext.Provider value={value}>
      {children}
    </ProductListContext.Provider>
  );
};
