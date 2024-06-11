import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import UserProfile from "./pages/UserProfile";
import Header from "./components/Header";
import Useradd from "./pages/Useradd";
import UpdateUser from "./pages/UpdateUser";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/user/profile/:id" element={<UserProfile />} />
        <Route path="/user/add" element={<Useradd />} />
        <Route path="/user/update/:id" element={<UpdateUser />} />
      </Routes>
    </>
  );
}

export default App;
