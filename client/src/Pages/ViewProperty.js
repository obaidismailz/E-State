import "../Components/Assets/css/view.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer.js";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";


export default function ViewProperty() {
  return (
    <>
      <Header page={3}/>
      <main>
        <div
          class="container"
          style={{ marginTop: "30px", padding: "20px 0px" }}
        >
          <h2 className="h1 hero-title">Property Details</h2>
          <div class="properties-listing spacer" style={{ marginTop: "40px" }}>
            <div class="row">
              <div class="col-lg-9 ">
                <div class="row">
                  <div class="col-lg-8">
                    <h3>Images</h3>
                    <div class="property-images">
                      <div
                        id="myCarousel"
                        class="carousel slide"
                        data-ride="carousel"
                      >
                        <ol class="carousel-indicators hidden-xs">
                          <li
                            data-target="#myCarousel"
                            data-slide-to="0"
                            class="active"
                          ></li>
                          <li
                            data-target="#myCarousel"
                            data-slide-to="1"
                            class=""
                          ></li>
                          <li
                            data-target="#myCarousel"
                            data-slide-to="2"
                            class=""
                          ></li>
                          <li
                            data-target="#myCarousel"
                            data-slide-to="3"
                            class=""
                          ></li>
                        </ol>
                        <Carousel>
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={require("../Components/Assets/images/property-3.jpg")}
                              alt="First slide"
                            />
                            <Carousel.Caption>
                              <h3>First Room</h3>
                              <p>Beautiful floor boards</p>
                            </Carousel.Caption>
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={require("../Components/Assets/images/property-2.jpg")}
                              alt="Second slide"
                            />

                            <Carousel.Caption>
                              <h3>Second Room</h3>
                              <p>Beautiful floor boards</p>
                            </Carousel.Caption>
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={require("../Components/Assets/images/property-1.jpg")}
                              alt="Third slide"
                            />

                            <Carousel.Caption>
                              <h3>Kitchen</h3>
                              <p>Plenty of space to cook a meal</p>
                            </Carousel.Caption>
                          </Carousel.Item>
                        </Carousel>

                        <a
                          class="left carousel-control"
                          href="#myCarousel"
                          data-slide="prev"
                        >
                          <span class="glyphicon glyphicon-chevron-left"></span>
                        </a>
                        <a
                          class="right carousel-control"
                          href="#myCarousel"
                          data-slide="next"
                        >
                          <span class="glyphicon glyphicon-chevron-right"></span>
                        </a>
                      </div>
                    </div>

                    <div style={{ margin: "30px 0px" }} class="spacer">
                      <h4>
                        <span class="glyphicon glyphicon-th-list"></span>{" "}
                        Property Detail
                      </h4>
                      <p>
                        Efficiently unleash cross-media information without
                        cross-media value. Quickly maximize timely deliverables
                        for real-time schemas. Dramatically maintain
                        clicks-and-mortar solutions without functional
                        solutions.
                      </p>
                      <p>
                        Completely synergize resource sucking relationships via
                        premier niche markets. Professionally cultivate
                        one-to-one customer service with robust ideas.
                        Dynamically innovate resource-leveling customer service
                        for state of the art customer service
                      </p>
                    </div>
                    <Link
                      to="/order"
                      className="btn"
                      style={{ textDecoration: "none" , width:"30%"}}
                    >
                      Purchase
                    </Link>
                  </div>
                  <div class="col-lg-4">
                    <h3>Walkthrough</h3>
                    <iframe
                      style={{ width: "700px", height: "500px" }}
                      src="https://my.matterport.com/show/?m=mps7xSy5Q3B"
                    ></iframe>
                    <div>
                      <br />
                      <h4>
                        <span class="glyphicon glyphicon-map-marker"></span>{" "}
                        Location
                      </h4>
                      <div class="well">
                        <iframe
                          width="700px"
                          height="350"
                          frameborder="0"
                          scrolling="no"
                          marginheight="0"
                          marginwidth="0"
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.895737781036!2d73.03973794999999!3d33.711646699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbe52c55156f9%3A0x2ef246a5e0f7f790!2sF-8%20Markaz%20F%208%20Markaz%20F-8%2C%20Islamabad%2C%20Islamabad%20Capital%20Territory!5e0!3m2!1sen!2s!4v1671696371010!5m2!1sen!2s"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
