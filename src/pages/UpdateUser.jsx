import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import UserForm from "../components/UserForm";
import { apiUrl, updateUser } from "../redux-toolkit/userSlice";
import axios from "axios";

function UpdateUser() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(null);

  const getUser = async (url) => {
    try {
      const response = await axios.get(url);
      const result = await response.data;
      setFormData(result);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    getUser(`${apiUrl}/${parseInt(id)}`);
  }, [id]);

  const handleUpdateUser = (updatedUser) => {
    dispatch(updateUser({ id: Number(id), user: updatedUser }));
  };

  return (
    <div className="container mx-auto">
      <div className="py-10">
        <h1 className="text-3xl mb-7 text-center lg:text-7xl lg:leading-[120%] bg-gradient-to-r from-[#2828d9] to-[#6d28d9] bg-clip-text text-transparent font-bold">
          Update User ID: {id}
        </h1>
        <UserForm user={formData} onSubmit={handleUpdateUser} />
      </div>
    </div>
  );
}

export default UpdateUser;
