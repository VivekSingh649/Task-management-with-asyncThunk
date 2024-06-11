import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeUser, showUser } from "../redux-toolkit/userSlice";

function UserList() {
  const { users, loading, error } = useSelector((state) => state.userLists);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showUser());
  }, [dispatch]);

  const handleClick = (userID) => {
    dispatch(removeUser(userID));
  };

  return (
    <table className="min-w-full bg-white border border-primary-300">
      <thead>
        <tr className="bg-primary-700 py-5">
          <th className="py-4 px-4 border-b text-white text-left">#</th>
          <th className="py-4 px-4 border-b text-white text-left">Name</th>
          <th className="py-4 px-4 border-b text-white text-left">User Name</th>
          <th className="py-4 px-4 border-b text-white text-left">Email</th>
          <th className="py-4 px-4 border-b text-white text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr
            key={user.id}
            className={`${
              loading ? "animate-pulse" : ""
            } hover:bg-primary-50 transition`}
          >
            <td className="py-5 font-semibold text-lg px-5 border-b border-primary-300">
              {index + 1}
            </td>
            <td className="py-5 font-semibold text-lg px-5 border-b border-primary-300">
              {user.firstName}
            </td>
            <td className="py-5 font-semibold text-lg px-5 border-b border-primary-300">
              {user.userName}
            </td>
            <td className="py-5 font-semibold text-lg px-5 border-b border-primary-300">
              {user.email}
            </td>
            <td className="py-5 font-semibold text-lg px-5 border-b border-primary-300">
              <Link
                to={`user/profile/${user.id}`}
                className="text-primary-500 hover:underline mr-4"
              >
                <i className="bi bi-eye"></i>
              </Link>
              <Link
                to={`user/update/${user.id}`}
                className="text-primary-500 hover:underline mr-4"
              >
                <i className="bi bi-pencil"></i>
              </Link>
              <button
                onClick={() => handleClick(user.id)}
                className="text-red-500 hover:underline"
              >
                <i className="bi bi-trash3"></i>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserList;
