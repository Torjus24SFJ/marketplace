import { useParams } from "react-router-dom";
import { useData } from "../../hooks/useData";

export const ItemPage = () => {
  const { id } = useParams();
  const { filteredProducts } = useData();

  const product = filteredProducts.find((p) => p.id === Number(id));

  if (!product) {
    return <div className="p-4 text-[#f1f1f1]">Product not found</div>;
  }

  return (
    <div className="min-h-screen px-4 py-8 text-[#f1f1f1]">
        <div className="w-100 h-fit bg-[#252728] p-8 ml-10 rounded-[10px] flex flex-col">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[300px] object-scale-down rounded-[12px] bg-white mb-4"
          />
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <p className="italic mb-2">Price: ${product.price}</p>
          <p className="mb-2">Category: {product.category}</p>
          <p>{product.description}</p>
        </div>
    </div>
  );
};
