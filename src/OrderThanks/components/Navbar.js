import React from "react";
import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <>
      <nav className="container-fluid bg-black pt-3">
        <div className="row">
          <div className="col-4 offset-4 px-0 d-flex align-items-center justify-content-center">
            <img className="img logo-navbar" src={logo} alt="logo" />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
