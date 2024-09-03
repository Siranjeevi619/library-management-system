import React from "react";
import RecentPublishImage from "../assets/BookPoster/component10.jpg";
function RecentPublish() {
  return (
    <div className="card" style={{ width: "fit-content" }}>
      <div className="m-4">
        <img
          src={RecentPublishImage}
          className=""
          style={{ width: "150px", height: "150px" }}
        />
        <div className="d-flex flex-column">
          <div className="card-title">Devil the black Book</div>
          <div className="card-text text-muted">1909</div>
          <button className="btn btn-outline-primary mt-2">
            View Book <i className="bi bi-book-fill"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecentPublish;
