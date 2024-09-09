import React from "react";
import BooksCard from "../../components/BooksCard";

function OrderPage() {
  return (
    <div className="z-1">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center my-4">Your Orders</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
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
  );
}

export default OrderPage;
