import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import COLORS from "../../constants/color";
import * as S from "../../components/Layout/Header/index.styles";
import logo from "../../img/drone.png";
import { fetchMember } from "../../api/user";
import OrderList from "./OrderList";
import LikeList from "./LikeList";
import CartList from "./CartList";


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
    line-height: 5rem;
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

////////////////////////

const TabContainer = styled.div`
  display: flex;
  align-self: flex-start;
`;

const TabMenu = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
`;

const TabMenuItem = styled.li`
  padding: 0.5rem 3rem;
  cursor: pointer;
  font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    line-height: 4rem;
`;

  ///////////////////////
const TableContainer = styled.div`
  width: 90%;
//   overflow-x: auto;
  margin-top: 4rem;
  height: auto;
`;

export default function Mypage() {
    const [member, setMember] = useState({username: '김동준', nickname: '김도옹준', email: 'dongjunkim99@icloud.com'}); // 초기값 없으면 비동기라 null 될수있다 에러뜸

  useEffect(() => {
    fetchMember()
      .then((fetchedData) => {
        console.log("유저정보", fetchedData); 
        setMember(fetchedData); // 데이터 상태 업데이트
      });
  }, []);

  const { state } = useLocation();
  const [selectedTabs, setSelectedTabs] = useState(Number(state) || 1);

  const tabs = [
    { id: 1, label: "주문 내역 조회", content: <OrderList /> },
    { id: 2, label: "찜 목록", content: <LikeList /> },
    { id: 3, label: "장바구니", content: <CartList /> },
  ];
 
  return (
    <Containers>
        <WelcomeContainer>
            <LeftContainer>
                <WelcomeContext>{member.nickname}</WelcomeContext>
                <WelcomeContext>{member.username}님의 이번 달 쇼핑 목록입니다</WelcomeContext>
                <WelcomeContext>{member.email}</WelcomeContext>
            </LeftContainer>
            <RightContainer>
                <LogoutButton>로그아웃</LogoutButton>
            </RightContainer>
        </WelcomeContainer>

        <TableContainer>
            <TabContainer>
                <TabMenu>
                    <TabMenuItem style={{paddingLeft: '0rem'}}>주문 내역 조회</TabMenuItem>
                    <TabMenuItem style={{color: "#D9D9D9"}}>찜 목록</TabMenuItem>
                    <TabMenuItem style={{color: "#D9D9D9"}}>장바구니</TabMenuItem>
                </TabMenu>
            </TabContainer>
            <OrderList></OrderList>
            
        </TableContainer>
        
    </Containers>
  )
}
