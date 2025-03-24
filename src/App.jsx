// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DataProvider } from "./context/DataContext/DataContext";
import { Layout } from "./components/Layout/Layout";
import { ProductList } from "./components/ProductList/ProductList";
import { ItemPage } from "./components/ItemPage/ItemPage";

function App() {
  return (
    <Router>
      <DataProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ItemPage />} />
          </Routes>
        </Layout>
      </DataProvider>
    </Router>
  );
}

export default App;