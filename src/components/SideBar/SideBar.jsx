import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { useData } from "../../hooks/useData";

export function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const {
    categories,
    setSelectedCategory,
    setSearchQuery,
    productList,
    setProductList,
  } = useData();
  const [modalOpen, setModalOpen] = useState(false);

  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === "Browse All" ? null : category);
  };

  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  };

  // const handleAddProduct = (e) => {
  //   e.preventDefault()
  //   const formData = new FormData(e.target)
  //   const newProduct = {
  //     id: productList.length + 1,
  //     title: formData.get("title"),
  //     category: formData.get("category"),
  //     price: parseFloat(formData.get("price")),
  //     description: formData.get("description"),
  //     image: "https://via.placeholder.com/1",
  //   }
  //   setProductList([...productList, newProduct])
  //   setIsAdded(false)
  //   e.target.reset()
  // }

  return (
    <div
      className={`min-h-auto transition-all duration-300 bg-[#202020] ${
        isOpen ? "w-40 md:w-72" : "w-20"
      } text-black`}
    >
      <div className="sticky top-0 left-0">
        <div className="p-4">
          <RxHamburgerMenu
            size={30}
            onClick={handleMenu}
            className="cursor-pointer text-neutral-600 hover:text-neutral-500"
          />
        </div>
        {isOpen && (
          <div className="h-screen text-center overflow-y-auto">
            <ul className="flex flex-col mt-8">
              <button
                onClick={handleModal}
                className="h-20 bg-amber-300 cursor-pointer"
              >
                Click me!
              </button>
              {modalOpen && (
                <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-10">
                  <div className="bg-white rounded-1g h-150 w-150">
                    <h1 className="text-black font-bold mb-4 text-xl">
                      Modal Title
                    </h1>
                    <p className="text-gray-700">This is modal text</p>
                    <button
                      onClick={handleModal}
                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}

              {/* ADD MODAL */}
              {/* <form onSubmit={handleAddProduct} className="text-white">
                <input type="text" name="title" placeholder="Product Name" required />
                <select name="categories" required></select>
                <input type="number" name="price" placeholder="Price" required />
                <textarea name="description" placeholder="Description" required />
                <button type="submit">Submit</button>
              </form> */}
              {/* className="w-full p-4 bg-neutral-600 text-neutral-400 hover:text-neutral-300 font-bold cursor-pointer" */}
              {categories.map((category) => (
                <li
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className="bg-[#272626] p-10 cursor-pointer text-neutral-600 hover:text-neutral-500 font-bold capitalize"
                >
                  {category}
                </li>
              ))}
              <li className="bg-[#4a4949] p-4 cursor-pointer text-neutral-600">
                <form
                  action=""
                  className="flex"
                  onClick={(e) => e.preventDefault()}
                >
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full bg-transparent focus:outline-none focus:ring-0 text-neutral-400 placeholder-neutral-400 text-center"
                    onChange={handleSearchQuery}
                  />
                </form>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

//!TODO Search field pushes content out of page if search query is too long (mobile resolution)*/
//!TODO Fix - Hamburger bar vanishing*/
