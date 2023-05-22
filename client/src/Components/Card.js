import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

export default function Cards(props) {
  const data = props.tempData;
  const base64img = data.image;
  useEffect(() => {
    function Base64ToImage(base64img, callback) {
      var img = new Image();
      img.onload = function() {
        callback(img);
      };
      img.src = base64img;
      img.className="w-100 h-100";
    }

    Base64ToImage(base64img, function(img) {
      document.getElementById(data._id).appendChild(img);
    });
  }, [base64img]);
  
  
  return (
    <>
      <div className="property-card">
        <figure className="card-banner">
          <a href="#" id={data._id}>

          </a>

          <div className="card-badge" style={{backgroundColor:"hsl(25.71deg 83.76% 54.12%)"}}>For {data.purpose}</div>

          <div className="banner-actions">
            <button className="banner-actions-btn">
              <ion-icon name="location"></ion-icon>

              <address>{data.address}</address>
            </button>

            <button className="banner-actions-btn">
              <ion-icon name="camera"></ion-icon>

              <span>{data.camera}</span>
            </button>

            <button className="banner-actions-btn">
              <ion-icon name="film"></ion-icon>

              <span>{data.walkthrough}</span>
            </button>
          </div>
        </figure>

        <div className="card-content">
          <div className="card-price">
            <strong>{data.price} PKR</strong>
          </div>

          <h3 className="h3 card-title">
            <Link to="/view">View Details</Link>
          </h3>

          <p className="card-text">{data.description}</p>

          <ul className="card-list">
            <li className="card-item">
              <strong>{data.rooms}</strong>

              <ion-icon name="bed-outline"></ion-icon>

              <span>Bedrooms</span>
            </li>

            <li className="card-item">
              <strong>{data.bath}</strong>

              <ion-icon name="man-outline"></ion-icon>

              <span>Bathrooms</span>
            </li>

            <li className="card-item">
              <strong>{data.area}</strong>

              <ion-icon name="square-outline"></ion-icon>

              <span>{data.unit}</span>
            </li>
          </ul>
        </div>

        <div className="card-footer">
          <div className="card-author">
            <figure className="author-avatar">
              <img
                src={require("./Assets/images/Umar.jpg")}
                alt="William Seklo"
                className="w-100 h-100"
              ></img>
            </figure>

            <div>
              <p className="author-name">
                <a href="#">Umar Akhtar</a>
              </p>

              <p className="author-title">Investor</p>
            </div>
          </div>

          <div className="card-footer-actions">
            <button className="card-footer-actions-btn">
              <ion-icon name="resize-outline"></ion-icon>
            </button>

            <button className="card-footer-actions-btn">
              <ion-icon name="heart-outline"></ion-icon>
            </button>

            <button className="card-footer-actions-btn">
              <ion-icon name="add-circle-outline"></ion-icon>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
