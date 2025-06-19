import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./component/Header";
import People from "./People";
import Edit from "./component/Edit";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/people" element={<People />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
