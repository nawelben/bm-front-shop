import React, { useEffect } from "react";
import logoFull from "../assets/logo-full.png";
import "../assets/styles.css";

function Home() {
  useEffect(() => {
    setTimeout(function () {
      window.location.replace("/shop");
    }, 3000);
  }, []);

  return (
    <>
      <div className="splash-screen-container bg-black d-flex align-items-center justify-content-center p-5 pt-0">
        <img className="img img-logo" src={logoFull} alt="logo full" />
      </div>
    </>
  );
}

export default Home;
