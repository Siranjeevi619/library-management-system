import React from "react";
import component1 from "../assets/BookPoster/component1.jpg";
import "../assets/styles/BookInfo.css";
function BookInfo() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 my-md-4 my-2">
            <div className="">
              <img src={component1} className="img-fluid  p-md-1 mx-auto" />
            </div>
          </div>
          <div className="col-12 col-md-8 my-md-4 my-1  ">
            <h3 className="card-title  display-3 text-center text-md-start">
              A reader lives thousand lives before he dies
            </h3>
            <h1>
              <span className="text-muted h1 text-lg"> steve</span>
            </h1>
            <h3 className="display-4">
              Genre <span className="text-success"> Romance</span>
            </h3>
            <h4>*99</h4>

            <div className="text-justify pb-4">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <h4>
                a product from
                <span className="text-success"> marvel studios</span>
              </h4>
            </div>

            <div className="mx-auto py-3 py-md-0 text-center text-md-start d-block fixed-bottom bg-white fixed-bottom-md">
              <button className="btn btn-outline-primary">
                Add to Cart <i className="bi bi-cart-fill"></i>
              </button>
              <button className="btn ms-1 btn-primary">
                Buy Now <i className="bi bi-bag-fill"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookInfo;
