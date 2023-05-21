import Header from "../Components/Header";
import Footer from "../Components/Footer.js";
import "../Components/Assets/css/payment.css";

export default function Payment() {
  return (
    <>
      <Header />
      <main id="mainDiv">
        <div className="cardss">
          <div className="image"></div>
          <div className="content">
            <h1 className="title">Complete Payment</h1>
            <p className="description"></p>
            <div class="creditCardForm" style={{margin: '30px'}}>
                <div class="payment">
                  <form>
                    <div class="form-group owner">
                      <label for="owner">Owner</label>
                      <input type="text" class="form-control" id="owner" />
                    </div>
                    <div class="form-group CVV">
                      <label for="cvv">CVV</label>
                      <input type="text" class="form-control" id="cvv" />
                    </div>
                    <div class="form-group" id="card-number-field">
                      <label for="cardNumber">Card Number</label>
                      <input type="number" class="form-control" id="cardNumber" />
                    </div>
                    <div class="form-group" id="expiration-date">
                      <label>Expiration Date</label>
                      <select>
                        <option value="01">January</option>
                        <option value="02">February </option>
                        <option value="03">March</option>
                        <option value="04">April</option>
                        <option value="05">May</option>
                        <option value="06">June</option>
                        <option value="07">July</option>
                        <option value="08">August</option>
                        <option value="09">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                      </select>
                      <select>
                        <option value="16"> 2016</option>
                        <option value="17"> 2017</option>
                        <option value="18"> 2018</option>
                        <option value="19"> 2019</option>
                        <option value="20"> 2020</option>
                        <option value="21"> 2021</option>
                      </select>
                    </div>
                    <div class="form-group" id="credit_cards">
                      <img src={require("../Components/Assets/images/visa.jpg")} id="visa" />
                      <img src={require("../Components/Assets/images/mastercard.jpg")} id="mastercard" />
                    </div>
                  </form>
                </div>
              </div>
            <button className="btn-process">Confirm Payment</button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
