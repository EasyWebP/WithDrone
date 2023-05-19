import styled from "styled-components";
import COLORS from "../../../constants/color";

export const Container = styled.div`
  width: 100%;
  height: 5.5rem;
  background-color: white;
  display: flex;
  gap: 24rem;
  align-items: center;
  justify-content: center;
  border-bottom: 0.1rem solid ${COLORS.GREY[200]};
  position: fixed;
  top: 0;
  z-index: 999;
`;

export const LogoBox = styled.div`
  //position: absolute;
  //left: 0;
  //margin-left: -14rem;
  display: flex;
  gap: 10px;
  cursor: pointer;
  align-items: center;
  div {
    font-size: 2.3rem;
    font-family: GmarketSans;
  }
`;

export const LogoImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`;
export const Menu = styled.div`
  margin-left: 10rem;
  display: flex;
  gap: 30px;
  //border: 1px solid red;
  //padding-left: 15.5rem;
`;
export const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 1.5rem;
  width: 8rem;
`;

export const SignButton = styled.button`
  margin-left: 4.5rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 1.5rem;
  width: 11rem;
`;
