import { DataProvider } from "./context/DataContext/DataContext";
import { ProductCard } from "./components/ProductCard/ProductCard";

function App() {
  return (
    <>
      <DataProvider>
        <ProductCard />
      </DataProvider>
    </>
  );
}

export default App;
