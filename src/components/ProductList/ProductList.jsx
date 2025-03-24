// src/components/ProductList/ProductList.jsx
import { Link } from "react-router-dom";
import { useData } from "../../hooks/useData";

export const ProductList = () => {
  const { filteredProducts } = useData();

  if (!filteredProducts || filteredProducts.length === 0) {
    return <h4 className="text-[#f1f1f1] text-center p-4">No products available</h4>;
  }

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="flex flex-col items-center justify-center text-center p-8 gap-6 text-[#f1f1f1] rounded-[10px] cursor-pointer bg-[#252728] hover:bg-[#3b3d3e]"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-[200px] h-[200px] object-scale-down rounded-[12px] bg-white transform delay-50 hover:scale-105"
            />
            <h2 className="font-bold truncate w-full overflow-hidden hover:text-[#d1d1d1]">
              {product.title}
            </h2>
            <p className="italic">Price: ${product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
