import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PATH from "./constants/path";
import MainLayout from "./components/Layout/MainLayout";
import Main from "./pages/main";
import Sell from "./pages/Sell";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={PATH.MAIN} element={<MainLayout />}>
          <Route index element={<Main />} />
        </Route>
        <Route path={PATH.SELL} element={<MainLayout />}>
          <Route index element={<Sell />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
