import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApiRickYMorty } from "../pages/Home/ApiRickYMorty";
import { ProfileApp } from "../pages/ProfileApp/ProfileApp";

export const RoutesApp = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ApiRickYMorty />} />
          <Route path="/profile" element={<ProfileApp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
