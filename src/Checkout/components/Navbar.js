import React from "react";
import arrowBack from "../../assets/arrow-back.png";
import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <>
      <nav className="container-fluid">
        <div className="row">
          <div className="col-4 px-0 d-flex align-items-center">
            <img
              className="img img-fluid img-icon m-3"
              src={arrowBack}
              alt="arrowBack"
            />
          </div>
          <div className="col-4 px-0 d-flex align-items-center">
            <img className="img img-fluid" src={logo} alt="logo" />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
