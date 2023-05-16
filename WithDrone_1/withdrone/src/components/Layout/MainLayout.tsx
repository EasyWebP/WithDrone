import styled from "styled-components";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Layout/Header/index";
import COLORS from "../../constants/color";
import Footer from "../Layout/Footer/index";

const Full = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  flex-direction: column;
  background-color: white;
`;

const Inner = styled.div`
  width: 75%;
  padding-top: 5.5rem;
  background-color: white;
  height: 100vh;
  border-right: 0.1rem solid ${COLORS.GREY[200]};
  border-left: 0.1rem solid ${COLORS.GREY[200]};
`;

export default function MainLayout() {
  return (
    <Full>
      <Header />
      <Inner>
        <Outlet />
      </Inner>
      <Footer />
    </Full>
  );
}
