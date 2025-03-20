import { useData } from "../../hooks/useData";

export const ProductCard = () => {
  const { filteredProducts } = useData();

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => {
          return (
            <div
              key={product.id}
              className="flex flex-col items-center justify-center text-center p-8 gap-6 text-[#f1f1f1] rounded-[10px] cursor-pointer"
            >
              <img src={product.image} alt="product-image" className="w-[200px] h-[200px] object-scale-down rounded-[12px] bg-white"/>
              <h2 className="font-bold truncate w-full overflow-hidden hover:text-[#d1d1d1]">{product.title}</h2>
              <p className="italic">Price: ${product.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
