import "../Components/Assets/css/unit.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer.js";
import { useState } from "react";

export default function UnitConvertor() {
  const [inMarla, setInMarla] = useState("0.00");
  const [inSqft, setInSqft] = useState("0.00");

  function weightConverter(event) {
    let n = (event.target.value * 272.25).toFixed(2);
    setInSqft(n);
  }
  function marla(event) {
    let m = (event.target.value / 272.25).toFixed(2);
    setInMarla(m);
  }

  return (
    <>
      <Header />
      <main id="mainDiv2">
        <div id="wow">
          <h1>Unit Convertor</h1>
          <div id="containers">
            <form>
              <label id="bills">AREA IN SQUARE FEET </label>
              <br />
              <input
                type="number"
                id="amounts"
                placeholder="0"
                onInput={marla}
                onChange={marla}                                                          
              />

              <div id="counts" class="count">
                <label id="noofpeople">AREA IN MARLA </label>
                <br />
                <input
                  type="number"
                  id="peoplecounts"
                  placeholder="0"
                  onInput={weightConverter}
                  onChange={weightConverter}
                />
              </div>
            </form>
            <aside id="showtips">
              <div id="tip">
                <p id="tipPrices">AREA </p>
                <p class="person">/ SQUARE FEET</p>
                <p id="tipamounts">{inSqft}</p>
              </div>
              <div id="totals">
                <p id="totalPrices">AREA</p>
                <p class="person2">/in marla </p>
                <p id="totalamounts">{inMarla}</p>
              </div>
              <button class="buts" id="buts">
                Reset
              </button>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
