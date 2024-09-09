import React from "react";
import BookImage from "../assets/BookPoster/component1.jpg";
import "../assets/styles/BooksCard.css";

function BooksCard() {
  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-4 mx-auto">
      <div className="d-flex justify-content-center align-items-center">
        <div className="card my-3 shadow-sm" style={{ width: "18rem" }}>
          <div className="mx-auto">
            <img
              src={BookImage}
              className="mt-2 book-card-img img-fluid"
              alt="Book"
            />
          </div>
          <div className="card-body text-center ms-4 text-md-start">
            <h5 className="card-title mb-2">A Delimit</h5>
            <h6 className="card-subtitle mb-2 text-muted">Steve</h6>
            <p className="card-subtitle mb-3 text-muted">1999</p>
            <button className="btn btn-primary">
              Buy Now <i className="bi bi-bag-check"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BooksCard;
