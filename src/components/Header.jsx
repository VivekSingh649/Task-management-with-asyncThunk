import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="p-5 w-full shadow-lg">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <Link className="logo" to={"/"}>
              <h1 className="uppercase text-2xl font-extrabold">
                Task <span className="text-primary-700">Manger</span>
              </h1>
            </Link>
            <Link
              to={"/user/add"}
              className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
            >
              New User
              <i className="bi bi-arrow-right-short ml-1"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
