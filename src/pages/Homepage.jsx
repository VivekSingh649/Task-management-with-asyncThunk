import React from "react";
import Userlist from "../components/Userlist";

function Homepage() {
  return (
    <>
      <div className="container mx-auto px-10 pb-10">
        <div className="w-full py-10">
          <h1 className="text-3xl text-center lg:text-7xl lg:leading-[120%] bg-gradient-to-r from-[#2828d9] to-[#6d28d9] bg-clip-text text-transparent font-bold">
            Lists of users
          </h1>
        </div>
        <Userlist />
      </div>
    </>
  );
}

export default Homepage;
