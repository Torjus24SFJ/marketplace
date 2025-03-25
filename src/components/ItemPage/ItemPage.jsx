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
    <section className="px-4 py-8">
        <div className="w-100 h-fit bg-[#252728] text-[#f1f1f1] p-8 rounded-[10px] flex flex-col">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[300px] object-scale-down rounded-[12px] bg-white mb-4"
          />
          <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="italic">Price: ${product.price}</p>
          <p className="text-[14px] text-neutral-400 first-letter:capitalize">{product.description}</p>
          </div>
        </div>
    </section>
  );
};
