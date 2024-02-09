import React from "react";
import "./singleUser.css";
import Single from "../../components/single/Single";
import { singleUser } from "../../data";

function SingleUser() {
  return (
    <>
      <div className="singleUser">
        <Single {...singleUser} />
      </div>
    </>
  );
}

export default SingleUser;
