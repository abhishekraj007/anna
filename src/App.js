import React from "react";
import "./App.scss";
import RecommendedProducts from "./components/RecommendedProducts/RecommendedProducts";
import ProductDetailContainer from "./components/ProductDetail/ProductDetailContainer";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />

      <main class="main">
        <ProductDetailContainer />
        <RecommendedProducts />
      </main>
      <Footer />
    </div>
  );
}

export default App;
