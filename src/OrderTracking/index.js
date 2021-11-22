import React from "react";
import "../assets/styles.css";
import Navbar from "./components/Navbar";

function OrderTracking() {
  return (
    <>
      <Navbar />
      <div className="container-fluid full-container bg-black">
        <div className="row">
          <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 px-4">
            <div className="h2 text-main-color mt-3">
              Suivi de votre commande
            </div>
            <p className="text-main-color">
              Commande n° 0DA894 <br />
              03 Novembre 2021
            </p>
            <div className="order-state passed-state">
              <p className="text-main-color">COMMANDE ENREGISTRÉE</p>
            </div>
            <div className="order-state actual-state">
              <p className="text-main-color">COMMANDE ENVOYÉE</p>
            </div>
            <div className="order-state futur-state">
              <p className="text-main-color">EN COURS DE LIVRAISON</p>
            </div>
            <div className="order-state last-state">
              <p className="text-main-color">COMMANDE LIVRÉE</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderTracking;
