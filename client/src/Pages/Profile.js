import Header from '../Components/Header'
import Footer from '../Components/Footer.js'

export default function Profile() {
  return (
    <>
    <Header/>
      <div style={{ paddingTop: "70px" }} class="">
        <div className="container">
          <div id="wrapper">
            <div className="d-flex flex-column" id="content-wrapper">
              <div id="content">
                <div className="container-fluid">
                  <div class="col-md-12">
                    <div class="section-heading">
                      <h2 style={{color:"hsl(9, 100%, 62%)"}}>Update Your Profile</h2>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-lg-4">
                      <div className="card mb-3">
                        <div className="card-body text-center shadow">
                          <img
                            className=" mb-4 mt-5"
                            src={require("../Components/Assets/images/Obaid.PNG")}
                            width="160"
                            height="160"
                          />
                          <div className="mb-3">
                            <button className="btn" type="button">
                              Change Photo
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="card shadow mb-5">
                        <div className="card-header py-3">
                          <p style={{color:"hsl(9, 100%, 62%)"}} className=" m-0 fw-bold">
                            Additional settings
                          </p>
                        </div>
                        <div className="card-body">
                          <div className="row">
                            <div className="col-md-6">
                              <form>
                                <div className="mb-3">
                                  <label
                                    className="form-label"
                                    htmlFor="signature"
                                  >
                                    <strong>Description</strong>
                                    <br />
                                  </label>
                                  <textarea
                                    className="form-control"
                                    id="signature"
                                    rows="6"
                                    name="signature"
                                  ></textarea>
                                </div>
                                <div className="mb-3"></div>
                                <div className="mb-3">
                                  <button
                                    className="btn"
                                    type="submit"
                                  >
                                    Save Settings
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="row">
                        <div className="col">
                          <div className="card shadow mb-3">
                            <div className="card-header py-3">
                              <p style={{color:"hsl(9, 100%, 62%)"}} className=" m-0 fw-bold">
                                User Settings
                              </p>
                            </div>
                            <div className="card-body">
                              <form>
                                <div className="row">
                                  <div className="col">
                                    <div className="mb-3">
                                      <label
                                        className="form-label"
                                        htmlFor="username"
                                      >
                                        <strong>Username</strong>
                                      </label>
                                      <input
                                        className="form-control"
                                        type="text"
                                        id="username"
                                        placeholder="user.name"
                                        name="username"
                                      />
                                    </div>
                                  </div>
                                  <div className="col">
                                    <div className="mb-3">
                                      <label
                                        className="form-label"
                                        htmlFor="email"
                                      >
                                        <strong>Email Address</strong>
                                      </label>
                                      <input
                                        className="form-control"
                                        type="email"
                                        id="email"
                                        placeholder="user@example.com"
                                        name="email"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col">
                                    <div className="mb-3">
                                      <label
                                        className="form-label"
                                        htmlFor="first_name"
                                      >
                                        <strong>First Name</strong>
                                      </label>
                                      <input
                                        className="form-control"
                                        type="text"
                                        id="first_name"
                                        placeholder="John"
                                        name="first_name"
                                      />
                                    </div>
                                  </div>
                                  <div className="col">
                                    <div className="mb-3">
                                      <label
                                        className="form-label"
                                        htmlFor="last_name"
                                      >
                                        <strong>Last Name</strong>
                                      </label>
                                      <input
                                        className="form-control"
                                        type="text"
                                        id="last_name"
                                        placeholder="Doe"
                                        name="last_name"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="mb-3">
                                  <button
                                    className="btn"
                                    type="submit"
                                  >
                                    Save Settings
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                          <div className="card shadow">
                            <div className="card-header py-3">
                              <p style={{color:"hsl(9, 100%, 62%)"}} className=" m-0 fw-bold">
                                Contact Settings
                              </p>
                            </div>
                            <div className="card-body">
                              <form>
                                <div className="mb-3">
                                  <label
                                    className="form-label"
                                    htmlFor="address"
                                  >
                                    <strong>Address</strong>
                                  </label>
                                  <input
                                    className="form-control"
                                    type="text"
                                    id="address"
                                    placeholder="Sunset Blvd, 38"
                                    name="address"
                                  />
                                </div>
                                <div className="row">
                                  <div className="col">
                                    <div className="mb-3">
                                      <label
                                        className="form-label"
                                        htmlFor="city"
                                      >
                                        <strong>City</strong>
                                      </label>
                                      <input
                                        className="form-control"
                                        type="text"
                                        id="city"
                                        placeholder="Los Angeles"
                                        name="city"
                                      />
                                    </div>
                                  </div>
                                  <div className="col">
                                    <div className="mb-3">
                                      <label
                                        className="form-label"
                                        htmlFor="country"
                                      >
                                        <strong>Country</strong>
                                      </label>
                                      <input
                                        className="form-control"
                                        type="text"
                                        id="country"
                                        placeholder="USA"
                                        name="country"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="mb-3">
                                  <button
                                    className="btn"
                                    type="submit"
                                  >
                                    Save&nbsp;Settings
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
