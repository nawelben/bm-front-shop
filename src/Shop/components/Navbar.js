import React from "react";
import language from "../../assets/language.svg";
import logo from "../../assets/logo.png";
import suiviCommande from "../../assets/suivi-commande.svg";

function Navbar() {
  return (
    <>
      <nav className="container-fluid">
        <div className="row">
          <div className="col-4 px-0 d-flex align-items-center">
            <img
              className="img img-fluid img-icon m-3"
              src={language}
              alt="language"
            />
          </div>
          <div className="col-4 px-0 d-flex align-items-center">
            <img className="img img-fluid" src={logo} alt="logo" />
          </div>
          <div className="col-4 px-0 d-flex justify-content-end align-items-center">
            <img
              className="img img-fluid img-icon m-3"
              src={suiviCommande}
              alt="suivi de commande"
            />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
