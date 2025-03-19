import { useContext, useState } from "react";

fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => console.log(data));
  