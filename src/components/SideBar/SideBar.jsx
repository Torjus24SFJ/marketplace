import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { useData } from "../../hooks/useData";
import { CreateListing } from "../CreateListing/CreateListing";

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
  const handleMenu = () => setIsOpen(!isOpen);;
  const handleCategoryClick = (category) => {
    setSelectedCategory(category === "Browse All" ? null : category);
  };
  const handleSearchQuery = (e) => setSearchQuery(e.target.value);

  //* Open / close modal
  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  const filteredCategories = categories.filter(
    (category) => category !== "Browse All"
  );

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
                className="h-20 bg-green-500 text-white font-bold cursor-pointer hover:bg-green-600"
              >
                Create New Listing
              </button>
              <CreateListing
                modalOpen={modalOpen}
                handleModal={handleModal}
                filteredCategories={filteredCategories}
                productList={productList}
                setProductList={setProductList}
              />
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
//!TODO Search within category will only search for category products - should be all products
//!TODO Fix - Hamburger bar vanishing*/
