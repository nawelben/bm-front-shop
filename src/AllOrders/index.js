import React from "react";
import "../assets/styles.css";
import Navbar from "./components/Navbar";
import savedOrder from "../assets/saved-order.png";
import orderDelivered from "../assets/order-delivered.png";

function AllOrders() {
  return (
    <>
      <Navbar />
      <div className="container-fluid full-container bg-black">
        <div className="row">
          <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 px-4">
            <div className="h2 text-main-color mt-3 mb-5 title1">
              Vos commandes
            </div>
            <div className="d-flex justify-content-between ">
              <p className="text-main-color title1b">Commande n° 0DA894</p>
              <img
                src={savedOrder}
                alt="saved order"
                className="img saved-order-img"
              />
            </div>
            <div className="d-flex justify-content-between ">
              <p className="text-main-color title1b">Commande n° 0FR862</p>
              <img
                src={orderDelivered}
                alt="order delivered"
                className="img saved-order-img"
              />
            </div>
            <div className="d-flex justify-content-between ">
              <p className="text-main-color title1b">Commande n° 1D5881</p>
              <img
                src={orderDelivered}
                alt="order delivered"
                className="img saved-order-img"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllOrders;
