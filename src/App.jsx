import { DataProvider } from "./context/DataContext/DataContext";
import { ProductCard } from "./components/ProductCard/ProductCard";
import { Layout } from "./components/Layout/Layout";

function App() {
  return (
    <>
    {/* <Layout> */}
      <DataProvider>
        <ProductCard />
      </DataProvider>
    {/* </Layout> */}
    </>
  );
}

export default App;
