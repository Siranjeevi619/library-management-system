import React from "react";
import BookImage from "../assets/BookPoster/component1.jpg";
import "../assets/styles/BooksCard.css";
function BooksCard() {
  return (
    <>
      <div className="col-12 col-md-4 col-lg-3 my-3">
        <div className="card" style={{ width: "18rem" }}>
          <div className="align-items-center mx-auto">
            <img src={BookImage} className="p-4  book-card-img" />
          </div>
          <div className="ms-4 my-1">
            <div className="card-title h4">A Delimit</div>
            <div className="card-subtitle text-muted h5">Steve</div>
            <div className="card-subtitle text-muted h6 my-1">1999</div>
            <button className="btn btn-primary my-2">
              Buy Now <i class="bi bi-bag-check"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BooksCard;
