import { DataProvider } from "./context/DataContext/DataContext";
import { ProductCard } from "./components/ProductCard/ProductCard";
import { Layout } from "./components/Layout/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <DataProvider>
          <Layout>
            <ProductCard />
          </Layout>
        </DataProvider>
      </Router>
    </>
  );
}

export default App;
