import { useData } from "../../context/DataContext/useData"

export function ProductList() {
    const { ProductList } = useData()

    return (
        <div>
            <ul>
                {ProductList.map((products) => {
                    <li key={products}>
                        <img src={products.img} alt="product-image" />
                    </li>
                })}
            </ul>
        </div>
    )
}