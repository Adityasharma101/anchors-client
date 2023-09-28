import React from "react";
import Home from "./Pages/Home/Home";
import Earning from "./Pages/Earning/Earning";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/earn" element={<Earning/>}></Route>

      </Routes>
    </div>
  );
};

export default App;
