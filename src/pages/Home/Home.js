import React from "react";
import BooksCard from "../../components/BooksCard";

function Home() {
  return (
    <div className="container">
      <div className="row my-3">
        <div className="col-12 text-center">
          <div className="display-1 text-primary">Hello Learners</div>
          <p className="lead">Know KnowLedge Gain Knowledge Earn Knowledge</p>
        </div>
      </div>

      {/* promote area */}
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3">
            <BooksCard />
          </div>
          <div className="col-12 col-md-3">
            <BooksCard />
          </div>
          <div className="col-12 col-md-3">
            <BooksCard />
          </div>
          <div className="col-12 col-md-3">
            <BooksCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
