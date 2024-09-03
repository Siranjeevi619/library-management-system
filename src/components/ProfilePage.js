import React from "react";
import testProfile from "../assets/Images/profile.png";
import "../assets/styles/ProfilePage.css";
// import BooksCard from "./BooksCard";
import RecentPublish from "./RecentPublish";
function ProfilePage() {
  return (
    <>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-12 col-md-6 col-lg-8 ">
            <div className="d-flex">
              <img
                src={testProfile}
                className="img-fluid profile-page-icon"
                alt="user-profile"
              />
              <div className="mt-md-3 mt-3 ms-2 ms-md-4">
                <h3 className="">Siranjeevi</h3>
                <h3 className="h5 text-muted ">Developer</h3>
              </div>
            </div>
            <div className="card my-3 text-md-start text-center">
              <div className="card-body">
                <h5 className="mt-2">List Of Publish</h5>
                <ul class="list-group">
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    Item 1<span class="badge bg-primary rounded-pill">4</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    Item 2<span class="badge bg-primary rounded-pill">2</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    Item 2<span class="badge bg-primary rounded-pill">2</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    Item 2<span class="badge bg-primary rounded-pill">2</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    Item 2<span class="badge bg-primary rounded-pill">2</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    Item 2<span class="badge bg-primary rounded-pill">2</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 my-3 col-md-6 col-lg-4">
            <div className="text-center text-md-start d-flex flex-column justify-content-center align-items-center">
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
