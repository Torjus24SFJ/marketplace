import { DataProvider } from "./context/DataContext/DataContext";
import { ProductCard } from "./components/ProductCard/ProductCard";
import { Layout } from "./components/Layout/Layout";
import { Router } from "react-router-dom";

function App() {
  return (
    <>
      <DataProvider>
        <Layout>
          <ProductCard />
        </Layout>
      </DataProvider>
    </>
  );
}

export default App;
