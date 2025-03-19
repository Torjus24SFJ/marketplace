import { useData } from "../context/DataContext/useData";
import { ProductCard } from "../ProductCard/ProductCard";

export function ProductList() {
  const { productList } = useData();
  if (!productList || productList.length === 0) {
    return <h4>No products available</h4>
  }

  return (
    <div>
      {productList.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
