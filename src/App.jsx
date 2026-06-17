import React from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import destination from "./component/Destination";
import { Routes, Route } from "react-router";
import Destination from "./component/Destination";
import Crew from "./component/Crew";

const App = () => {
  return (
    <div>
     

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        {/* <Route path="/technology" element={<Technology />} /> */}
      </Routes>
    </div>
  );
};

export default App;
