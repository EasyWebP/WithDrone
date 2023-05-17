import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PATH from "./constants/path";
import MainLayout from "./components/Layout/MainLayout";
import DefaultLayout from "./components/Layout/DefaultLayout";

import Main from "./pages/main";
import Sell from "./pages/sell";
import Intro from "./pages/intro";
import Rent from "./pages/rent";
import Login from "./pages/login";
import ProductDetail from "./pages/detail/ProductDetail";

// Use BrowserRouter to render a React component that matches the URL of the browser.
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
        <Route path={PATH.INTRO} element={<MainLayout />}>
          <Route index element={<Intro />} />
        </Route>
        <Route path={PATH.RENT} element={<MainLayout />}>
          <Route index element={<Rent />} />
        </Route>
        <Route path={PATH.LOGIN} element={<DefaultLayout />}>
          <Route index element={<Login />} />
        </Route>
        <Route path={PATH.DETAIL} element={<MainLayout />}>
          <Route index element={<ProductDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
