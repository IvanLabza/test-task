import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddForCorse from "./pages/AddForCorse";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/AddForCorse" element={<AddForCorse />} />
    </Routes>
  );
};

export default App;
