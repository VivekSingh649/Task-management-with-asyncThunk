import React from "react";
import UserForm from "../components/UserForm";

function Useradd() {
  return (
    <>
      <div className="container mx-auto pb-10">
        <div className="py-10">
          <h1 className="text-3xl text-center lg:text-7xl lg:leading-[120%] bg-gradient-to-r from-[#2828d9] to-[#6d28d9] bg-clip-text text-transparent font-bold">
            Add user
          </h1>
        </div>
        <UserForm />
      </div>
    </>
  );
}

export default Useradd;
