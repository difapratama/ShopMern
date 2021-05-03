import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Metadata from "../layout/MetaData";
import Loader from "../layout/Loader";

const Profile = () => {
  const { user, loading } = useSelector((state) => state.auth);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <Metadata title={"Your Profile"} />
          <div class="main-body">
            <div class="row gutters-sm">
              <div class="col-md-4 mb-3">
                <div class="card">
                  <div class="card-body">
                    <div class="d-flex flex-column align-items-center text-center">
                      <img
                        src={user.avatar.url}
                        alt={user.name}
                        class="rounded-circle img-fluid"
                        width="150"
                      />
                      <div class="mt-3">
                        <Link
                          to="/me/update"
                          id="edit_profile"
                          className="btn btn-primary btn-block my-5"
                        >
                          Edit Profile
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-8">
                <div class="card mb-0">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">Full Name :</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">{user.name}</div>
                    </div>
                    <hr />
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">Email : </h6>
                      </div>
                      <div class="col-sm-9 text-secondary">{user.email}</div>
                    </div>
                    <hr />
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">Joined On : </h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                        {String(user.createdAt).substring(0, 10)}
                      </div>
                    </div>
                    <div class="row mt-5">
                      <div className="col-md-6">
                        {user.role !== "admin" && (
                          <Link
                            to="/orders/me"
                            className="btn btn-danger btn-block"
                          >
                            My Orders
                          </Link>
                        )}
                      </div>
                      <div className="col-md-6">
                        <Link
                          to="/password/update"
                          className="btn btn-primary btn-block"
                        >
                          Change Password
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
