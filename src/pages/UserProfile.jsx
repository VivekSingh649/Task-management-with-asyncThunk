import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiUrl } from "../redux-toolkit/userSlice";
import axios from "axios";

function UserProfile() {
  const [profile, setProfile] = useState({});
  const { id } = useParams();

  const getUser = async (url) => {
    try {
      const response = await axios.get(url);
      const result = await response.data;
      setProfile(result);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    getUser(`${apiUrl}/${parseInt(id)}`);
  }, [id]);

  return (
    <>
      <div className="container mx-auto">
        <div className="py-10">
          <h1 className="text-3xl mb-7 text-center lg:text-7xl lg:leading-[120%] bg-gradient-to-r from-[#2828d9] to-[#6d28d9] bg-clip-text text-transparent font-bold">
            User Profile {id}
          </h1>
          <div className="profile_card max-w-xl p-5 bg-white shadow-md mx-auto rounded-sm">
            <div className="profile-img hidden">
              <img
                src={profile.avatar}
                alt={`${profile.firstName} ${profile.lastName}`}
              />
            </div>
            <p className="font-semibold">First Name: {profile.firstName}</p>
            <p className="font-semibold">Last Name: {profile.lastName}</p>
            <p className="font-semibold">UserName: {profile.userName}</p>
            <p className="font-semibold">Email Address: {profile.email}</p>
            <p className="font-semibold">Password: {profile.password}</p>
            <p className="font-semibold">Phone Number: {profile.phoneNumber}</p>
            <p className="font-semibold">Company: {profile.company}</p>
            <img src={profile.profileImage} alt={profile.firstName} />
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
