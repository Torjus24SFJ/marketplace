import { useData } from "../../context/DataContext/useData";

export const ProductCard = () => {
  const { productList } = useData();
  console.log("Product-List:", productList);

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {productList.map((product) => {
          return (
            <div
              key={product.id}
              className="flex flex-col items-center justify-center text-center p-8 gap-6"
            >
              <img src={product.image} alt="product-image" className="" />
              <h2 className="font-bold truncate w-full overflow-hidden">{product.title}</h2>
              {/* <p>{product.description}</p> */}
              <p className="italic">Price: ${product.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
