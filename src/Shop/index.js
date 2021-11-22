import React from "react";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import "../assets/styles.css";

function Shop() {
  return (
    <>
      <div className="bg-black">
        <Navbar />
        <Product />
      </div>
    </>
  );
}

export default Shop;
