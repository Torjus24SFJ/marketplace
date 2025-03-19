import { useData } from "../../context/DataContext/useData";

export const ProductCard = () => {
  const { productList } = useData();
  console.log("Product-List:", productList);

  return (
    <div>
      {productList.map((product) => {
        return (
          <li key={product.id}>
            <div className="">
            <img src={product.image} alt="product-image" className=""/>
            </div>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </li>
        );
      })}
    </div>
  );
};
