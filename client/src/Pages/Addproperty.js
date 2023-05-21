import React from 'react';
import "../Components/Assets/css/addproperty.css";
import Header from '../Components/Header.js'
import Footer from '../Components/Footer';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
export default function Addproperty() {

  const [name, setname] = useState("Home");
  const [selectedOption, setSelectedOption] = useState('');
  const [property, setProperty] = useState({
    purpose: "",
    type: "Home",
    city: "",
    address: "",
    area: 0,
    unit: "marla",
    price: 0,
    rooms: 0,
    bath: 0,
    floors: 0,
    image: [],
    panorama: [],
    installment: false,
    description: "",
    agent: false,
  });

  const handleChange = (e) => {
    setProperty({
      ...property,
      [e.target.name]: e.target.value
    });
  };
  const handleChangeImage = (e) => {
    const fileList = Array.from(e.target.files);
    const encodedImages = [];

    fileList.forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        encodedImages.push(reader.result);
      };
    });
    setProperty({
      ...property,
      [e.target.name]: encodedImages
    });
  }
  const handleChangeRadio = (e) => {
    setSelectedOption(e.target.value);
    setProperty({
      ...property,
      [e.target.name]: e.target.value
    });
  };
  const handleCheckboxChange = (e) => {
    setProperty({
      ...property,
      [e.target.name]: e.target.checked
    });
  };
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(property);
    try {
      const response = await axios.post('http://localhost:3001/property', property);
      //const { token } = response.data;

      // Store the token in local storage or a cookie, depending on your implementation
      navigate("/view");
      // Redirect the user to the dashboard or protected page
      // You can use a router library like react-router-dom for this
      // Example: history.push('/dashboard');
    } catch (error) {
      console.error('Error saving property:', error);
      // Handle login error, display error message, etc.
    }
  };

  function Button() {

  }


  function Home() {
    if (name == "Home") {
      return (
        <>
          <div className="sell  " >
            <label className="label">
              <input type="radio" name="type" value="Home" checked={selectedOption === 'Home'} onChange={handleChangeRadio} onClick={() => { Button() }} />
              Home
            </label>
            <label className="label">
              <input type="radio" name="type" value="Flat" checked={selectedOption === 'Flat'} onChange={handleChangeRadio} />
              Flat  </label>
            <label className="label">
              <input type="radio" name="type" value="Upper Portion" checked={selectedOption === 'Upper Portion'} onChange={handleChangeRadio} />
              Upper Portion </label>
            <label className="label">
              <input type="radio" name="type" value="Lower Portion" checked={selectedOption === 'Lower Portion'} onChange={handleChangeRadio} />
              lower Portion </label>
            <label className="label">
              <input type="radio" name="type" value="Penthouse" checked={selectedOption === 'Penthouse'} onChange={handleChangeRadio} />
              Penthouse  </label>
          </div>
          <div className='type'>
            <h2>Rooms and Bathrooms </h2>
            <div>
              <input type="number" id="city-input" list="none" placeholder={"Room(s)"} name="rooms" onChange={handleChange} />
            </div>
            <div className='mt-4 '>
              <input type="number" id="city-input" list="none" placeholder={"Bathroom(s)"} name="bath" onChange={handleChange} />
            </div>
          </div>
        </>
      )
    }
    else if (name == "Commercial") {
      return (
        <>
          <div className="sell " >
            <div className="sell  " >
              <label className="label">
                <input type="radio" name="type" value="Office" checked={selectedOption === 'Office'} onChange={handleChangeRadio} />
                Office
              </label>
              <label className="label">
                <input type="radio" name="type" value="Shop" checked={selectedOption === 'Shop'} onChange={handleChangeRadio} />
                Shop  </label>
              <label className="label">
                <input type="radio" name="type" value="Warehouse" checked={selectedOption === 'Warehouse'} onChange={handleChangeRadio} />
                Warehouse </label>
              <label className="label">
                <input type="radio" name="type" value="Factory" checked={selectedOption === 'Factory'} onChange={handleChangeRadio} />
                Factory  </label><label className="label">
                <input type="radio" name="type" value="Building" checked={selectedOption === 'Building'} onChange={handleChangeRadio} />
                Building   </label>
            </div>

          </div>
          <div className='type'>
            <h2>Floors</h2>
            <div>
              <input type="number" id="city-input" list="none" placeholder={"Floor(s)"} name="floors" onChange={handleChange} />
            </div>
          </div>
        </>
      )
    }
    else {
      return (
        <></>
      )
    }
  }

  return (
    <div>

      <Header page={4} />
      <form onSubmit={handleSubmit}>
        <div class="main container">
          <h1>Purpose </h1>
          <div class="location container">
            <h2>Select Purpose </h2>

            <div className="sell ">
              <label className="label">
                <input type="radio" name="purpose" value="Sell" onChange={handleChange} />
                Sell
              </label>
              <label className="label">
                <input type="radio" name="purpose" value="Rent" onChange={handleChange} />
                Rent </label>
            </div>
            <div className='type'>
              <h2>Select property type </h2>

              {/* //////////////////select 000000 */}

              <div className='hpc '>

                <button type="button" class="btn" style={{ marginRight: "10px" }} onClick={() => { setname("Home"); Button() }}  >Home</button>
                <button type="button" class="btn" onClick={() => { setname("Commercial") }}>Commercial</button>
              </div>

              <Home />

            </div>

          </div>
        </div>

        <div className='main container'>
          <h1>Price and Area</h1>

          <div className='location'>
            <h2>
              Area Size
            </h2>
            <div className='flex '>
              <input type="number" id="city-input" list="none" placeholder={"Area"} name="area" onChange={handleChange} />

              <select name="unit" id="cars" onChange={handleChange}>
                <option value="marla">marla</option>
                <option value="Srfeet">Srfeet</option>
                <option value="kanal">kanal</option>
              </select>
            </div>


            <div className='flex mt-4 '>
              <h2>
                Price
              </h2>
              <input type="text" id="city-input" list="none" placeholder={"Price"} name="price" onChange={handleChange} />

              <select name="price" id="cars" >
                <option value="pkr">pkr</option>
              </select>
            </div>
            <div className='d-flex flex-row justify-content-between  mt-4'>
              <div >
                <h2>Installlment available </h2>
                <p>Enable if you want to give it in the installlment</p>
              </div>

              <div class="form-check form-switch mt-4">
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" name="installment" onChange={handleCheckboxChange} />
              </div>
            </div>
            <div className='d-flex flex-row justify-content-between  mt-4'>
              <div >
                <h2> Ready for possesion </h2>
                <p>Enable if Ready for possesion
                </p>
              </div>

              <div class="form-check form-switch mt-4">
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
              </div>




            </div>



          </div>

        </div>

        <div class="main container">
          <h1>Infromantion and details  </h1>


          <div class="location container">


            <h3 className='mt-3'>Description </h3>
            <div class="mb-3">
              <textarea class="form-control" id="description" rows="6" name="description" onChange={handleChange}></textarea>
            </div>

          </div>
        </div>

        <div class="main container">
          <h1>Images and Panorama </h1>


          <div class="location container">
            <div >
              <div >
                <h3 className='mt-3'>Add Images</h3>
                <div className='uploadimage  container m-5  p-4 '>
                  <div className='sizeimage '>
                    <label for="images" class="drop-container">
                      <span class="drop-title">Drop files here</span>
                      or
                      <input type="file" id="images" accept="image/*" name="image" required multiple onChange={handleChangeImage} />
                    </label>
                  </div>
                </div>
              </div>
              <div >
                <h3 className='mt-3'>Add Panorama </h3>
                <div className='uploadimage  container m-5  p-4 '>
                  <div className='sizeimage '>
                    <label for="panoramas" class="drop-container">
                      <span class="drop-title">Drop files here</span>
                      or
                      <input type="file" id="panoramas" accept="image/*" name="panorama" required multiple onChange={handleChangeImage} />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className='d-flex flex-row justify-content-between  mt-4' style={{ width: "85%" }}>
              <div >
                <h2>Hire Agent with 360 camera</h2>
                <p>Enable if you want to see better results of the virtual tour.</p>
                <p>Agent fee would be discussed later.</p>
              </div>

              <div class="form-check form-switch mt-4">
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" name="agent" onChange={handleCheckboxChange} />
              </div>
            </div>

          </div>


        </div>
        <div class="main container">
          <h1>Location </h1>


          <div class="location container">
            <div className='city' >
              <h2> City</h2>

              <input type="text" id="city-input" name="city" list="city-options" onChange={handleChange} placeholder={"Enter City Name"} />

              <datalist id="city-options">
                <option value="Islamabad" />
                <option value="Rawal Pindi" />
              </datalist>


            </div>
            <h3 className='mt-3'>Address</h3>

            <input type="text" id="city-input" name="address" list="city-options" placeholder={"Enter the location "} onChange={handleChange} />





          </div>
          <button class="btn" style={{ left: "80%" }}>List Property</button>

        </div>
      </form>

      <Footer />
    </div>
  )
}
