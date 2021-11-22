import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import avis from "../../assets/avis.png";
import banner from "../../assets/banner.png";
import "../../assets/styles.css";
import "../../assets/fonts.css";
import Variants from "./Variants";

function Product() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 px-0">
            <img className="img img-fluid w-100" src={banner} alt="banner" />
          </div>
          <div className="col-md-6 p-4">
            <h1 className="text-main-color title1">Bio Magic - 500g</h1>
            <div className="h2 text-main-color title2c">PRIX : 2000 DA</div>
            <div>
              <span className="star">
                <img className="img img-fluid" src={avis} alt="avis" />
              </span>
              <span className="star">
                <img className="img img-fluid" src={avis} alt="avis" />
              </span>
              <span className="star">
                <img className="img img-fluid" src={avis} alt="avis" />
              </span>
              <span className="star">
                <img className="img img-fluid" src={avis} alt="avis" />
              </span>
              <span className="star">
                <img className="img img-fluid" src={avis} alt="avis" />
              </span>
              <p className="text-main-color mt-3 text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </p>
            </div>

            <div>
              <div className="h2 text-center text-main-color title2b">
                NOS GOÛTS
              </div>
              <Variants />
            </div>

            <div className="mt-3">
              <div className="h2 text-center text-main-color title1b">
                Où habitez-vous?
              </div>
              <label className="h4 text-main-color">VILLE*</label>
              <select className="form-select bg-black text-white">
                <option defaultValue>Choisissez votre ville</option>
                <option value="1">01 - Adrar</option>
                <option value="2">02 - Chlef</option>
                <option value="3">03 - Laghouat</option>
                <option value="4">04 - Oum El Bouaghi</option>
                <option value="5">05 - Batna</option>
                <option value="6">06 - Béjaïa</option>
                <option value="7">07 - Biskra</option>
                <option value="8">08 - Béchar</option>
                <option value="9">09 - Blida</option>
                <option value="10">10 - Bouira</option>
                <option value="11">11 - Tamanrasset</option>
                <option value="12">12 - Tébessa</option>
                <option value="13">13 - Tlemcen</option>
                <option value="14">14 - Tiaret</option>
                <option value="15">15 - Tizi Ouzou</option>
                <option value="16">16 - Alger</option>
                <option value="17">17 - Djelfa</option>
                <option value="18">18 - Jijel</option>
                <option value="19">19 - Sétif</option>
                <option value="20">20 - Saïda</option>
                <option value="21">21 - Skikda</option>
                <option value="22">22 - Sidi Bel Abbès</option>
                <option value="23">23 - Annaba</option>
                <option value="24">24 - Guelma</option>
                <option value="25">25 - Constantine</option>
                <option value="26">26 - Médéa</option>
                <option value="27">27 - Mostaganem</option>
                <option value="28">28 - M'Sila</option>
                <option value="29">29 - Mascara</option>
                <option value="30">30- Ouargla</option>
                <option value="31">31- Oran</option>
                <option value="32">32- El Bayadh</option>
                <option value="33">33 - Illizi</option>
                <option value="34">34 - Bordj Bou Arreridj</option>
                <option value="35">35 - Boumerdès</option>
                <option value="36">36 - El Tarf</option>
                <option value="37">37 - Tindouf</option>
                <option value="38">38 - Tissemsilt</option>
                <option value="39">39 - El Oued</option>
                <option value="40">40 - Khenchela</option>
                <option value="41">41 - Souk Ahras</option>
                <option value="42">42 - Tipaza</option>
                <option value="43">43 - Mila</option>
                <option value="44">44 - Aïn Defla</option>
                <option value="45">45 - Naâma</option>
                <option value="46">46 - Aïn Témouchent</option>
                <option value="47">47 - Ghardaïa</option>
                <option value="48">48 - Relizane</option>
                <option value="49">49 - Timimoun</option>
                <option value="50">50 - Bordj Badji Mokhtar</option>
                <option value="51">51 - Ouled Djellal</option>
                <option value="52">52 - Béni Abbès</option>
                <option value="53">53 - In Salah</option>
                <option value="54">54 - In Guezzam</option>
                <option value="55">55 - Touggourt</option>
                <option value="56">56 - Djanet</option>
                <option value="57">57 - El M'Ghair</option>
                <option value="58">58 - El Meniaa</option>
              </select>
            </div>

            <div className="d-flex mt-3 align-items-center">
              <div className="text-main-color pe-3">
                Total :<br /> 2000 DA
              </div>
              <div className="flex-grow-1 ps-3">
                <button className="btn border text-dark bg-btn-light w-100">
                  Commander
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
