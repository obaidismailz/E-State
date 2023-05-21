import './Assets/css/style.css'

export default function Footer() {
    return (
      <>
        <footer className="footer">
          <div className="footer-top">
            <div className="container">
              <div className="footer-brand">
              <a href="#" class="logo">
              <img
                src={require("./Assets/images/LOGO5.png")}
                alt="Homeverse logo"
                style={{width:"200px"}}
              />
             </a>
                <p className="section-text">
                  Ghar say Ghar Lo. Easily buy and sell real estates
                  with the option of view and creating 3d Walkthrough 
                  of real estates. 
                </p>
  
                <ul className="contact-list">
                  <li>
                    <a href="#" className="contact-link">
                      <ion-icon name="location-outline"></ion-icon>
  
                      <address>F8/3 Ambassador street 3</address>
                    </a>
                  </li>
  
                  <li>
                    <a href="tel:+0123456789" className="contact-link">
                      <ion-icon name="call-outline"></ion-icon>
  
                      <span>+92 3365447778</span>
                    </a>
                  </li>
  
                  <li>
                    <a href="jobsestate0@gmail.com" className="contact-link">
                      <ion-icon name="mail-outline"></ion-icon>
  
                      <span>jobsestate0@gmail.com</span>
                    </a>
                  </li>
                </ul>
  
                <ul className="social-list">
                  <li>
                    <a href="#" className="social-link">
                      <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                  </li>
  
                  <li>
                    <a href="#" className="social-link">
                      <ion-icon name="logo-twitter"></ion-icon>
                    </a>
                  </li>
  
                  <li>
                    <a href="#" className="social-link">
                      <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                  </li>
  
                  <li>
                    <a href="#" className="social-link">
                      <ion-icon name="logo-youtube"></ion-icon>
                    </a>
                  </li>
                </ul>
              </div>
  
              <div className="footer-link-box">
                <ul className="footer-list">
                  <li>
                    <p className="footer-list-title">Company</p>
                  </li>
  
                  <li>
                    <a href="#" className="footer-link">
                      Coming Soon
                    </a>
                  </li>
                </ul>
  
                <ul className="footer-list">
                  <li>
                    <p className="footer-list-title">Services</p>
                  </li>
  
                  <li>
                    <a href="#" className="footer-link">
                      Coming Soon
                    </a>
                  </li>
                </ul>
  
                <ul className="footer-list">
                  <li>
                    <p className="footer-list-title">Customer Care</p>
                  </li>
  
                  <li>
                    <a href="#" className="footer-link">
                      Login
                    </a>
                  </li>
  
                  <li>
                    <a href="#" className="footer-link">
                      My account
                    </a>
                  </li>
  
                  <li>
                    <a href="#" className="footer-link">
                      Contact us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
  
          <div className="footer-bottom">
            <div className="container">
              <p className="copyright">
                &copy; 2022 <a href="#">EState</a>. All Rights Reserved
              </p>
            </div>
          </div>
        </footer>
      </>
    );
  }