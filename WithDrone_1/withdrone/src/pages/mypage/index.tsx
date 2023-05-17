import React from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import COLORS from "../../constants/color";
import * as S from "../../components/Layout/Header/index.styles";
import logo from "../../img/drone.png";

const Containers = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

const WelcomeContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: #0F67EC;
    opacity: 0.77;
    height: 23.75rem;
`

const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    justify-content: center;
    align-items: flex-start;
`

const WelcomeContext = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 2.5rem;
    line-height: 6rem;
    color: white;
    margin-left: 3rem;
`

const RightContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  width: 50%;
  height: 100%;
`;

const LogoutButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 10px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 2rem;
  margin-right: 2rem;
  `;

export default function Mypage() {
  return (
    <Containers>
        <WelcomeContainer>
            <LeftContainer>
                <WelcomeContext>사가정변태남</WelcomeContext>
                <WelcomeContext>임윤수님의 이번 달 쇼핑 목록입니다</WelcomeContext>
                <WelcomeContext>limyoonsoo@naver.com</WelcomeContext>
            </LeftContainer>
            <RightContainer>
                <LogoutButton>로그아웃</LogoutButton>
            </RightContainer>
        </WelcomeContainer>
    </Containers>
  )
}
