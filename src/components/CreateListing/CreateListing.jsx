import { useState } from "react";
import { IoClose } from "react-icons/io5";

export function CreateListing({
    productList,
    setProductList,
    modalOpen,
    handleModal,
    filteredCategories,
}) {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    price: "",
    description: "",
    image: null,
  });

  //* Input change for modal
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
        
        if(!modalOpen) return null;

        return (
            <div className="fixed inset-0 bg-black/75 text-neutral-200  backdrop-blur-sm flex justify-center items-center z-10">
              <div className="bg-[#1c1c1d] border-2 border-[#1c1c1d]/50 rounded-xl p-6 w-full max-w-md">
                <div className="flex justify-between items-center mb-4">
                  <h1 className="font-bold text-xl">
                    Create New Listing!
                  </h1>
                  <div
                    className="p-2 cursor-pointer hover:text-neutral-300"
                    onClick={handleModal}
                  >
                    <IoClose size={30} />
                  </div>
                </div>
                <form
                  onSubmit={handleAddProduct}
                  className="flex flex-col gap-6"
                >
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    placeholder="Product name..."
                    onChange={handleInputChange}
                    className="w-full p-2 border border-neutral-200/50 rounded focus:outline-none"
                    required
                  />
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full p-2 border bg-[#252728] border-neutral-200/50 rounded focus:outline-none"
                    required
                  >
                    <option value="" disabled>
                      Select Category
                    </option>
                    {filteredCategories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                  <div className="relative">
                    <input
                      type="text"
                      name="price"
                      value={formData.price}
                      placeholder="Set price.."
                      onChange={handleInputChange}
                      className="w-full p-2 border border-neutral-200/50 rounded focus:outline-none pr-8"
                      required
                    />
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-200">$</span>
                  </div>
                  <textarea
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-neutral-200/50 rounded focus:outline-none h-20"
                    required
                  />
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleFilePreview}
                    className="w-full p-2 cursor-pointer bg-[#252728] border rounded border-neutral-200/50"
                  />
                  {formData.image && (
                    <img
                      src={formData.image}
                      alt="Preview"
                      className="w-full h-32 object-cover rounded mt-2"
                    />
                  )}
                  <button
                    type="submit"
                    className="bg-[#252728] text-white font-bold py-2 px-4 rounded cursor-pointer mt-4"
                  >
                    Add now
                  </button>
                </form>
              </div>
            </div>
          );
        }