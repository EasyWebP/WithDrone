import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PATH from "./constants/path";
import MainLayout from "./components/Layout/MainLayout";
import DefaultLayout from "./components/Layout/DefaultLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Main from "./pages/main";
import Sell from "./pages/sell";
import Intro from "./pages/intro";
import Rent from "./pages/rent";
import Login from "./pages/login";
import Mypage from "./pages/mypage";
import Signup from "./pages/signup";
import Social from "./pages/social";

import Index from "./pages/detail";
import StyledContainer from "./components/Toast/container";
import Purchase from "./pages/purchase";
import PurchaseConfirm from "./pages/purchaseConfirm";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
    },
  },
});

// Use BrowserRouter to render a React component that matches the URL of the browser.
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StyledContainer
        className="toast"
        position="top-center"
        closeButton={false}
      />
      <Router>
        <Routes>
          <Route path={PATH.MAIN} element={<MainLayout />}>
            <Route path="/" element={<Main />} />
            <Route path="/main/:memberId" element={<Main />} />
          </Route>
          <Route path={PATH.SOCIAL} element={<DefaultLayout />}>
            <Route index element={<Social />} />
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
          <Route path={PATH.SIGNUP} element={<DefaultLayout />}>
            <Route index element={<Signup />} />
          </Route>
          <Route path={PATH.DETAIL} element={<MainLayout />}>
            <Route index element={<Index />} />
          </Route>
          <Route path={PATH.MYPAGE} element={<MainLayout />}>
            <Route index element={<Mypage />} />
          </Route>
          <Route path={PATH.PURCHASE} element={<MainLayout />}>
            <Route index element={<Purchase />} />
          </Route>
          <Route path={PATH.PURCHASE_CONFIRM} element={<MainLayout />}>
            <Route index element={<PurchaseConfirm />} />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
