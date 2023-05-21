import { Link } from "react-router-dom";

export default function Cards(props) {
  return (
    <>
      <div className="property-card">
        <figure className="card-banner">
          <a href="#">
            <img
              src={require("./Assets/images/property-2.jpg")}
              alt="New Apartment Nice View"
              className="w-100"
            ></img>
          </a>

          <div className="card-badge green">For Sale</div>

          <div className="banner-actions">
            <button className="banner-actions-btn">
              <ion-icon name="location"></ion-icon>

              <address>{props.address}</address>
            </button>

            <button className="banner-actions-btn">
              <ion-icon name="camera"></ion-icon>

              <span>{props.camera}</span>
            </button>

            <button className="banner-actions-btn">
              <ion-icon name="film"></ion-icon>

              <span>{props.walkthrough}</span>
            </button>
          </div>
        </figure>

        <div className="card-content">
          <div className="card-price">
            <strong>{props.price}</strong>
          </div>

          <h3 className="h3 card-title">
            <Link to="/view">View Details</Link>
          </h3>

          <p className="card-text">{props.detail}</p>

          <ul className="card-list">
            <li className="card-item">
              <strong>{props.beds}</strong>

              <ion-icon name="bed-outline"></ion-icon>

              <span>Bedrooms</span>
            </li>

            <li className="card-item">
              <strong>{props.bathrooms}</strong>

              <ion-icon name="man-outline"></ion-icon>

              <span>Bathrooms</span>
            </li>

            <li className="card-item">
              <strong>{props.size}</strong>

              <ion-icon name="square-outline"></ion-icon>

              <span>Square Ft</span>
            </li>
          </ul>
        </div>

        <div className="card-footer">
          <div className="card-author">
            <figure className="author-avatar">
              <img
                src={require("./Assets/images/Umar.jpg")}
                alt="William Seklo"
                className="w-100"
              ></img>
            </figure>

            <div>
              <p className="author-name">
                <a href="#">{props.name}</a>
              </p>

              <p className="author-title">{props.author}</p>
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
