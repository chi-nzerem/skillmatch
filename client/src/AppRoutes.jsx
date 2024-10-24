import React from "react";
import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Landing from "./pages/Landing";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/landing" element={<Landing />} />
        </Switch>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
