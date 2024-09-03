import React from "react";
import BookImage from "../assets/BookPoster/component1.jpg";
import "../assets/styles/BooksCard.css";

function BooksCard() {
  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-3 my-3">
      <div className="card" style={{ width: "18rem" }}>
        <div className="d-flex justify-content-center">
          <img src={BookImage} className="p-2 book-card-img" alt="Book" />
        </div>
        <div className="card-body text-center text-md-start">
          <h5 className="card-title">A Delimit</h5>
          <h6 className="card-subtitle text-muted">Steve</h6>
          <p className="card-subtitle text-muted my-1">1999</p>
          <button className="btn btn-primary my-2">
            Buy Now <i className="bi bi-bag-check"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BooksCard;
