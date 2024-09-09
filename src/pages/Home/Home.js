import React from "react";
import BooksCard from "../../components/BooksCard";

function Home() {
  return (
    <div className="container">
      <div className="row my-3">
        <div className="col-12 ">
          <div className=" ">
            <p className="display-2 text-center text-primary">Hello Learners</p>
            <p className="lead text-center">
              Know KnowLedge Gain Knowledge Earn Knowledge
            </p>
          </div>
        </div>
      </div>

      {/* promote area */}
      <div className="container">
        <div className="row ">
          <BooksCard />
          <BooksCard />
          <BooksCard />
          <BooksCard />
        </div>
      </div>
    </div>
  );
}

export default Home;
