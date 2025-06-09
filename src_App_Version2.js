import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TripPlanner from "./components/TripPlanner";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<TripPlanner />} />
      </Routes>
    </Router>
  );
}

export default App;