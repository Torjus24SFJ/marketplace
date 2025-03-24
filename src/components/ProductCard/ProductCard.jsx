import { useData } from "../../hooks/useData";

export function ProductCard() {
  const { productList } = useData();
  return (
    <div>
      {productList.map((product) => (
        <ProductList key={product.id} product={product} />
      ))}
    </div>
  );
}


