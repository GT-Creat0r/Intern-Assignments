// import Navbar from "./components/Navbar";
// import { Products } from "./components/Products";
// import { products } from "./db/products";
import "./App.css";
import {useState } from "react";
import ProductCard from "./components/ProductCard";
import Modal from "./components/Modal";
import useFetch from "./hooks";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [products, setProducts] = useState([]);

  const { data} = useFetch("https://dummyjson.com/products");
  console.log(data);

  return (
    <>
      {/* <div>
        <Navbar />
        <h1 className="product-info">Products</h1>
        <div className="products-container">
          {products?.length > 0 &&
            products.map((product) => (
              <Products key={product._id} product={product} />
            ))}
        </div>
      </div> */}

      {/* Modal pop Using Portal */}
      <div className="button-wrapper">
        <button onClick={() => setIsOpen(true)}>Open Modal</button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          Modal PopUp Portal
        </Modal>
      </div>

      <div className="other-content">Other Content</div>

      <div className="products-container">
        {data?.products &&
          data?.products.length > 0 &&
          data?.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default App;
