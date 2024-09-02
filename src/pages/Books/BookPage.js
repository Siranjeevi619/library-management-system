import React from "react";
import SearchBar from "../../components/SearchBar";
import BooksCard from "../../components/BooksCard";

function BookPage() {
  return (
    <>
      {/* search section */}
      <div className="container">
        <div className="row">
          <div className="col-6 my-4">
            <h4 className="fw-light">Search Something Learn Anything</h4>
          </div>
          <div className="col-6 my-3">
            <SearchBar />
          </div>
        </div>
      </div>

      {/* display section */}
      <div className="container">
        <div className="row">
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
    </>
  );
}

export default BookPage;
