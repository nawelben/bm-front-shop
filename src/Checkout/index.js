import React from "react";
import "../assets/styles.css";
import Navbar from "./components/Navbar";
import CheckoutForm from "./components/CheckoutForm";

function Checkout() {
  return (
    <>
      <div className="bg-black">
        <Navbar />
        <CheckoutForm />
      </div>
    </>
  );
}

export default Checkout;
