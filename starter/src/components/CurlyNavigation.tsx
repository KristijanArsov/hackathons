import React from "react";
import NavigationButton from "./NavigationButton";
import Link from "next/link";

const CurlyNavigation = () => {
  return (
    <div className="curlyNavigation">
      <div className="container">
        <div className="row justify-content-center aling-items-center">
          <div className="col-4 text-center">
            <i className="fa-solid fa-house white-icon"></i>
          </div>
          <div className="col-4 text-center">
            <Link href={"/testMapWithoutUser"}>
              <NavigationButton />
            </Link>
          </div>
          <div className="col-4 text-center">
            <i className="fa-solid fa-user white-icon"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurlyNavigation;
