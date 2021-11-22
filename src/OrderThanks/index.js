import React from "react";
import "../assets/styles.css";
import Navbar from "./components/Navbar";

function OrderThanks() {
  return (
    <>
      <Navbar />
      <div className="container-fluid full-container bg-black pt-4 pb-4 px-2">
        <div className="row text-main-color p-2">
          <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
            <div className="h5">Votre commande a bien été enregistrée.</div>
            <p>
              Merci pour votre confiance, votre numéro de commande est le:{" "}
              <br />
              0DA849
            </p>
            <div className="d-flex align-items-end justify-content-center col-6 offset-3 mt-5">
              <a href="/all-orders">
                <button className="btn border text-dark bg-light w-100">
                  Voir mes commandes
                </button>
              </a>
            </div>
            <div className="d-flex align-items-end justify-content-center col-6 offset-3 mt-3 text-main-color">
              <a className="text-main-color text-decoration-none" href="/shop">
                Retour à l'accueil
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderThanks;
