import React from "react";
import SearchBar from "../../components/SearchBar";
import BooksCard from "../../components/BooksCard";

function BookPage() {
  return (
    <>
      {/* Search section */}
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-4 col-12 mt-2 my-md-3">
            <h4 className="fw-light text-center">
              Search Something Learn Anything
            </h4>
          </div>
          <div className="col-md-6  col-lg-6 col-12 my-1 my-md-3">
            <SearchBar />
          </div>
        </div>
      </div>

      {/* Display section */}
      <div className="container">
        <div className="row">
          <div className="d-flex flex-wrap justify-content-center">
            <BooksCard />
            <BooksCard />
            <BooksCard />
            <BooksCard />
            <BooksCard />
            <BooksCard />
            <BooksCard />
            <BooksCard />
            <BooksCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default BookPage;
