import "./Assets/css/style.css";
import "./Assets/css/header.css";
import { Link } from "react-router-dom";
import logo from "./Assets/images/logo-light.png";

export default function Header(props) {
  const array = [];

  for (var i = 1; i < 5; i++) {
    if (i === props.page) {
      array.push("Links active");
    } else {
      array.push("Links");
    }
  }
  const links = {
    color: "white",
  };
  return (
    <>
      {/*<header className="header" data-header>
          <div className="header-container">
            <a href="#" class="logo">
              <img
                src={require("./Assets/images/LOGO5.png")}
                alt="Homeverse logo"
                style={{ width: "150px" }}
              />
            </a>
            <nav className="navbar" data-navbar>
              <div className="navbar-bottom">
                <ul style={{ marginTop: "20px" }} className="navbar-list">
                  <li>
                    <Link to="/home" className="navbar-link" style={links}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <a
                      href="#about"
                      style={links}
                      className="navbar-link"
                      data-nav-link
                    >
                      About
                    </a>
                  </li>

                  <li>
                    <Link to="/buy" className="navbar-link" style={links}>
                      Find Property
                    </Link>
                  </li>

                  {/* <li>
                    <a href="#" className="navbar-link" style={links}>
                      SwitchAccount
                    </a>
                  </li> 
                  <li>
                    <Link to="/addproperty" className="navbar-link" style={links}>
                      add Property
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>

            <div className="header-bottom-actions">
              <div style={{ marginTop: "10px" }} class="input-group">
                <div class="form-outline">
                  <input type="search" id="form1" class="form-control" />
                </div>
                <button
                  style={{ width: "50px", height: "38px" }}
                  type="button"
                  class="btn"
                >
                  <ion-icon name="search-outline"></ion-icon>
                </button>
              </div>
              <Link className="nav-link " to="/profile">
                <img
                  src={require("./Assets/images/Obaid.PNG")}
                  style={{
                    width: "60px",
                    height: "60px",
                    marginTop: "10px",
                    border: "2px solid red",
                    borderRadius: "50%",
                    overflow: "auto",
                    objectFit: "cover",
                  }}
                />
              </Link>
            </div>
          </div>
                </header>*/}
      <div className="header-container">
        <div className="Logo">
          <img src={require('./Assets/images/LOGO5.png')} className='tinyLogo'></img>
        </div>
        <div className="list">
          <ul className="ul">
            <li className="li">
              <Link to="/home" className={array[0]}>Home</Link>
            </li>
            <li className="li">
              <a href="#about"  className={array[1]} data-nav-link>About</a>
            </li>
            <li className="li">
              <Link to="/buy" className={array[2]}>Explore Properties</Link>
            </li>
            <li className="li">
              <Link to="/addproperty" className={array[3]}>Sell Property</Link>
            </li>
            <li className="li">
              <Link to="/" className="Links">Logout</Link>
            </li>
          </ul>
        </div>
        <div className="header-bottom-actions">
              <div style={{ marginTop: "10px" }} class="input-group">
                <div class="form-outline">
                  <input type="search" id="form1" class="form-control" />
                </div>
                <button
                  style={{ width: "50px", height: "38px" }}
                  type="button"
                  class="btn"
                >
                  <ion-icon name="search-outline"></ion-icon>
                </button>
              </div>
              <Link className="nav-link " to="/profile">
                <img
                  src={require("./Assets/images/Obaid.PNG")}
                  style={{
                    width: "60px",
                    height: "60px",
                    marginTop: "10px",
                    border: "2px solid red",
                    borderRadius: "50%",
                    overflow: "auto",
                    objectFit: "cover",
                  }}
                />
              </Link>
            </div>
      </div>
    </>
  );
}
