import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import chocolat from "../../assets/chocolat.png";
import caramel from "../../assets/caramel.png";
import "../../assets/styles.css";

function Variants() {
  return (
    <>
      <div className="conatainer-fluid">
        <div className="row">
          <div className="col-6 text-center">
            <div className="h2 text-main-color title1b">Chocolat</div>
            <img src={chocolat} alt="chocolat" className="img-fluid mb-3" />
            <div>
              <span className="me-4 span-rounded border rounded-circle text-main-color">
                -
              </span>
              <span className="text-main-color">0</span>
              <span className="ms-4 span-rounded border rounded-circle text-main-color">
                +
              </span>
            </div>
          </div>
          <div className="col-6 text-center">
            <div className="h2 text-main-color title1b">Caramel</div>
            <img src={caramel} alt="caramel" className="img-fluid mb-3" />
            <div>
              <span className="me-4 span-rounded border rounded-circle text-main-color">
                -
              </span>
              <span className="text-main-color">0</span>
              <span className="ms-4 span-rounded border rounded-circle text-main-color">
                +
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Variants;
