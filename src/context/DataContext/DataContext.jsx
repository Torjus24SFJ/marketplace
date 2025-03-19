import { useContext, useState, useEffect } from "react";

// eslint-disable-next-line react-hooks/rules-of-hooks
export const DataContent = useContext();

export const DataProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <>
    </>
  )
};
