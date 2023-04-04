import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PATH from "./constants/path";
import MainLayout from "./components/Layout/MainLayout";
import Main from "./pages/main";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={PATH.MAIN} element={<MainLayout />}>
          <Route index element={<Main />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
