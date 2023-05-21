import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import '../Components/Assets/css/bootstrap.css'
import axios from 'axios';
//import '../Components/Assets/css/templatemo-sixteen.css'

function Login() {

  const [user,setUser] = useState({
    email:"",
    password:"",
  });

  const [invalid,setInvalid] = useState({
    border:"2px solid black"
  });

  const [statemenet,setStatement] = useState("");
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login', user);
      const { token } = response.data;

      // Store the token in local storage or a cookie, depending on your implementation
      localStorage.setItem('token', token);
      navigate("/home");
      // Redirect the user to the dashboard or protected page
      // You can use a router library like react-router-dom for this
      // Example: history.push('/dashboard');
    } catch (error) {
      console.error('Error logging in:', error);
      setInvalid({
        ...invalid,
        ["border"]:"2px solid red"
      })
      setStatement("Invalid email or password");
      // Handle login error, display error message, etc.
    }
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  
  return (
    <>
      <section className="vh-100" style={{ backgroundColor: "hsl(227, 29%, 13%)" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-5 col-xl-5 d-flex flex-column align-items-center order-1 order-lg-1">
                      <div>
                        <img
                          src={require("../Components/Assets/images/signin-image.jpg")}
                          className="img-fluid"
                          alt="Sample image"
                        />
                      </div>
                      <div className="m-4">
                        <Link
                          to="/signup"
                          style={{
                            textDecoration: "none",
                            color: "#f33f3f",
                          }}
                        >
                          Create an account
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 order-2 order-lg-2">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign in
                      </p>

                      <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <p style={{color:"red"}}>{statemenet}</p>
                            <input
                              type="email"
                              name="email"
                              id="form3Example3c"
                              style={invalid}
                              className="form-control"
                              onChange={handleChange}
                              required
                            />
                            <label className="form-label" for="form3Example3c">
                              Your Email
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              name="password"
                              id="form3Example4c"
                              style={invalid}
                              className="form-control"
                              onChange={handleChange}
                              required
                            />
                            <label className="form-label" for="form3Example4c">
                              Password
                            </label>
                          </div>
                        </div>
                        <div class="row mb-4">
                          <div class="col-md-6 d-flex justify-content-center">
                            <a
                              href="#!"
                              style={{
                                textDecoration: "none",
                                color: "#f33f3f",
                              }}
                            >
                              Forgot password?
                            </a>
                          </div>
                        </div>
                        <div className="d-flex justify-content-center mx-4  mb-3 mb-lg-4">
                          <button className="btn" type="submit">
                            Sign in
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
      </section>
    </>
  );
}

function Signup() {
  const [statemenet,setStatement] = useState("");
  const [user,setUser] = useState({
    name:"",
    email:"",
    password:"",
    address:"G8 Markaaz ISB",
    phoneNumber:"03365447778",
    CNIC:"1231231231",
  });

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/signup', user);
      console.log(response.data);
      alert("You are registered please log in to continue");
      navigate("/");
    } catch (error) {
      setStatement("Email already in use");
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };
  return (
    <>
      <section className="vh-100" style={{ backgroundColor: "hsl(227, 29%, 13%)" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-4">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-7 order-2 order-lg-1">
                      <p className="text-center h1 ">
                        Sign up
                      </p>

                      <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                          <p style={{color:"red"}}>{statemenet}</p>
                            <input
                              type="text"
                              style={{border:"1px solid black"}}
                              name="name"
                              id="form3Example1c"
                              className="form-control"
                              onChange={handleChange}
                              required
                            />
                            <label className="form-label" for="form3Example1c">
                              Name
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              style={{border:"1px solid black"}}
                              name="email"
                              id="form3Example3c"
                              className="form-control"
                              onChange={handleChange}
                              required
                            />
                            <label className="form-label" for="form3Example3c">
                              Email
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              style={{border:"1px solid black"}}
                              name="password"
                              id="form3Example4c"
                              className="form-control"
                              onChange={handleChange}
                              required
                            />
                            <label className="form-label" for="form3Example4c">
                              Password
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                          <input
                              type="number" 
                              style={{border:"1px solid black"}}
                              pattern="[1-9]{1}[0-9]{11}" 
                              maxlength="11"
                              minlength="11"
                              name="phoneNumber"
                              id="form3Example1c"
                              className="form-control"
                              onChange={handleChange}
                              required
                            />
                            <label className="form-label" for="form3Example1c">
                              Contact
                            </label>
                            
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                          <input
                              type="text" 
                              style={{border:"1px solid black"}}
                              name="address"
                              id="form3Example1c"
                              className="form-control"
                              onChange={handleChange}
                              required
                            />
                            <label className="form-label" for="form3Example1c">
                              Address
                            </label>
                            
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                          <input
                              type="number"  
                              style={{border:"1px solid black"}}
                              maxlength="13"
                              minlength="13"
                              name="CNIC"
                              id="form3Example1c"
                              className="form-control"
                              onChange={handleChange}
                              required
                            />
                            <label className="form-label" for="form3Example1c">
                              CNIC
                            </label>
                            
                          </div>
                        </div>

                        <div className="d-flex justify-content-center ">
                          <button className="btn" type="submit">
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-5 d-flex flex-column align-items-center order-1 order-lg-2">
                      <div className="m-4">
                        <img
                          src={require("../Components/Assets/images/signup-image.jpg")}
                          className="img-fluid"
                          alt="Sample image"
                        />
                      </div>
                      <div className="m-4 col-xl-5">
                        <Link
                          to="/"
                          style={{
                            textDecoration: "none",
                            color: "rgb(223, 71, 89)",
                          }}
                        >
                          Already have an account. Signin
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export { Login, Signup };
