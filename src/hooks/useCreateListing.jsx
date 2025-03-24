import { useState } from "react";

export const useCreateListing = (productList, setProductList, handleModal) => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    price: "",
    description: "",
    image: null,
  });

 

  //* Image preview
  const handleFilePreview = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        image: URL.createObjectURL(file),
      }));
    }
  };

  //* Adding product in modal
  const handleAddProduct = (e) => {
    e.preventDefault();

    const newProduct = {
      id: productList.length + 1,
      title: formData.title,
      category: formData.category,
      price: parseFloat(formData.price),
      description: formData.description,
      image: formData.image || "https://i.imgur.com/yQ7PDQj.png",
    };

    setProductList([...productList, newProduct]);
    setFormData({
      title: "",
      category: "",
      price: "",
      description: "",
      image: null,
    });
    handleModal();
  };

  return {
    formData,
    setFormData,
    handleAddProduct,
    handleFilePreview
  }
};
