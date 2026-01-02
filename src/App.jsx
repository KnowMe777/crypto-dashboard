import React from "react";
import Navbar from "./components/Navbar";
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home/Home"
import Coin from "./pages/Coin/Coin";
import Portfolio from "./pages/Portfolio/Portfolio";
import { Toaster } from "react-hot-toast";
import { useState } from "react";

function App() {
  return (
      <div>
        <Navbar />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 2000,
            style: {
              fontSize: "14px",
            },
          }}
        />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/coin/:id" element={<Coin />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
        </Routes>
      </div>
  );
}
 export default App;