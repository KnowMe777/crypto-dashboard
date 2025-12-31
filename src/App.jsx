import React from "react";
import Navbar from "./components/Navbar";
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home/Home"
import Coin from "./pages/Coin/Coin";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/coin/:id" element={<Coin />}></Route>
      </Routes>
    </div>
  );
}
 export default App;