import React from "react";
import testProfile from "../assets/Images/profile.png";
import "../assets/styles/ProfilePage.css";
import BooksCard from "./BooksCard";
import RecentPublish from "./RecentPublish";
function ProfilePage() {
  return (
    <>
      <div className="container">
        <div className="row p-4">
          <div className="col-12 col-md-6 ">
            <div className="d-flex">
              <img
                src={testProfile}
                className="img-fluid profile-page-icon"
                alt="user-profile"
              />
              <div className="mt-md-4 ms-md-4">
                <h3 className="">Siranjeevi</h3>
                <h3 className="h5 text-muted ">Developer</h3>
              </div>
            </div>
            <div className="card mt-3" style={{ width: "auto"}}>
              <div className="card-body">
                <h3>S.D.Eaden Matric Hr Secondary School</h3>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 ">
            <div className="text-center d-flex flex-column justify-content-center align-items-center">
              <h3>Recent Publish</h3>
              {/* <BooksCard  /> */}
              <RecentPublish />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
