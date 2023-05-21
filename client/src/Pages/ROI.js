import "../Components/Assets/css/roi.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer.js";
export default function ROI() {
  return (
    <>
      <Header />
      <main id="mainDiv3">
        <div id="wow2">
          <h1>ROI Calculator</h1>
          <div id="containerss">
            <form style={{marginLeft: "40px"}}>
              <label for="cars" id="bill">
                Location:
              </label>
              <select name="cars" id="amount">
                <option value="volvo">Apartment E11/3</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
              <label id="tiplabel">Year </label>
              <br />
              <button class="btnss" id="btn11" value="5">
                1
              </button>
              <button class="btnss" id="btn2" value="10">
                2
              </button>
              <button class="btnss" id="btn3" value="15">
                3
              </button>
              <button class="btnss" id="btn4" value="25">
                4
              </button>
              <button class="btnss" id="btn5" value="50">
                5
              </button>
              <input
                type="number"
                class="custom"
                id="custom"
                placeholder="Custom"
              />
              <br />
              <br />
            </form>
            <aside id="showtip">
              <div id="tip">
                <p id="tipPrice">Price </p>
                <p class="person">/ current </p>
                <p id="tipamount">Rs0.00</p>
              </div>
              <div id="total">
                <p id="totalPrice">ROI</p>
                <p class="person2">/ price</p>
                <p id="totalamount">Rs0.00</p>
              </div>
              <button class="but" id="but">
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
