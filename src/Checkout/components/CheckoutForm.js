import React from "react";
import "../../assets/styles.css";

function CheckoutForm() {
  return (
    <>
      <div className="container-fluid checkout-form-container bg-black">
        <div className="row">
          <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
            <div className="h2 text-main-color text-center">
              Vos informations personnelles
            </div>
            <form className="text-main-color mt-3">
              <label htmlFor="NameInputValue">NOM*</label>
              <input
                type="text"
                className="form-control bg-black text-main-color mt-1 mb-3 p-2"
                id="NameInputValue"
                placeholder="Saisissez votre nom"
              />
              <label htmlFor="PhoneInputValue">TELEPHONE*</label>
              <input
                type="text"
                className="form-control bg-black text-main-color mt-1 mb-3 p-2"
                id="PhoneInputValue"
                placeholder="Saisissez votre n° de téléphone"
              />
              <label htmlFor="AdresseInputValue">ADRESSE*</label>
              <input
                type="text"
                className="form-control bg-black text-main-color mt-1 mb-3 p-2"
                id="AdresseInputValue"
                placeholder="Saisissez votre adresse"
              />
              <label htmlFor="PictureInputValue">PHOTO DU REÇU*</label>
              <input
                type="file"
                className="form-control bg-black text-main-color mt-1 mb-5 p-2"
                id="PictureInputValue"
                placeholder="Cliquez ici pour ajouter la photo du reçu de versement"
              />
              <div className="d-flex align-items-end text-center col-6 offset-3 mt-5">
                <button
                  type="submit"
                  className="btn border text-dark bg-btn-light w-100"
                >
                  Valider la commande
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckoutForm;
