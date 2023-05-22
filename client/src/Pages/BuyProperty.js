import Card from "../Components/Card";
import Header from '../Components/Header'
import Footer from '../Components/Footer.js'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Components/Assets/css/buyProperty.css'

export default function BuyProperty() {
  const [data, setData] = useState([]);
  const [purpose, setPurpose] = useState("Rent");
 

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/data');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      <Header page={3} />
      <section className="property" id="property">
        <div className="container">
          <div style={{display:"flex",width:"40%",margin:"auto"}}>
            <button className="section-subtitle" onClick={() => {setPurpose("Sale")}}>Properties for Sale</button>
            <button className="section-subtitle" onClick={() => {setPurpose("Rent")}}>Properties for Rent</button>
          </div>
          <div className="grid-containerS">
            {data.map((data) => {
              if(purpose === data.purpose){
                return(
                  <Card tempData={data} />
                );
              }
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
