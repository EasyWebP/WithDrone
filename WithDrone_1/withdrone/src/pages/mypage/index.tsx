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
import toastMsg from "../../components/Toast";
import { authLogout } from "../../api/auth";
import useMypage from "../../hooks/useMypage";
import NoExist from "../noExist";

const Containers = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center; /* 변경된 부분 */
  background-color: white;
`;
const Head = styled.div`
  align-self: flex-start;
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 5rem;
  margin-left: 13rem;
`;

const WelcomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0f67ec;
  opacity: 0.77;
  height: 23.75rem;
  width: 100%;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: flex-start;
`;

const WelcomeContext = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 2.5rem;
  line-height: 5rem;
  color: white;
  margin-left: 12rem;
`;

const RightContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  width: 50%;
  height: 100%;
`;

const LogoutButton = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  padding: 10px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 4rem;
  margin-right: 12rem;
  &:hover {
    color: ${COLORS.GREY[400]};
  }
`;

////////////////////////

const TabContainer = styled.div`
  display: flex;
  align-self: flex-start;
  //border: 1px solid red;
`;

const TabMenu = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
`;

const TabMenuItem = styled.li`
  padding: 0.5rem 3rem;
  cursor: pointer;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  line-height: 4rem;
`;

///////////////////////
const TableContainer = styled.div`
  width: 82%;
  overflow-x: auto;
  margin-top: 4rem;
  height: auto; // 50rem을 기본으로 두고 그 이상 부터는 auto로 나중에 추가
`;

export default function Mypage() {
  const { handleLogout } = useMypage();

  const [member, setMember] = useState({
    username: null,
    nickname: null,
    email: null,
  }); // 초기값 없으면 비동기라 null 될수있다 에러뜸

  useEffect(() => {
    fetchMember().then((fetchedData) => {
      setMember(fetchedData); // 데이터 상태 업데이트
    });
  }, []);

  const { state } = useLocation();
  const [selectedTabs, setSelectedTabs] = useState(Number(state) || 1);
  const [rentSelectedTabs, setRentSelectedTabs] = useState(Number(state) || 4);
  const tabs = [
    { id: 1, label: "주문 내역 조회", content: <OrderList /> },
    { id: 2, label: "찜 목록", content: <LikeList props={2} /> },
    { id: 3, label: "장바구니", content: <CartList /> },
  ];
  const rentTabs = [
    { id: 4, label: "주문 내역 조회", content: <OrderList /> },
    { id: 5, label: "찜 목록", content: <LikeList props={5} /> },
    { id: 6, label: "장바구니", content: <CartList /> },
  ];

  return (
    <Containers>
      {member.nickname == null ? (
        <NoExist />
      ) : (
        <>
          <WelcomeContainer>
            <LeftContainer>
              <WelcomeContext>{member.nickname}</WelcomeContext>
              <WelcomeContext>
                {member.username}님의 이번 달 쇼핑 목록입니다
              </WelcomeContext>
              <WelcomeContext>{member.email}</WelcomeContext>
            </LeftContainer>
            <RightContainer>
              <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
            </RightContainer>
          </WelcomeContainer>
          <Head>구매</Head>
          <TableContainer>
            <TabContainer>
              <TabMenu>
                {tabs.map((tab) => {
                  //탭 이름 - 1) 주문내역 조회에는 마진 주기 2) 클릭한 탭은 색깔 달리 하기
                  let tabstyle: { paddingLeft?: string; color?: string } =
                    tab.id === 1 ? { paddingLeft: "0rem" } : {};
                  if (selectedTabs !== tab.id) {
                    tabstyle = { ...tabstyle, color: "#D9D9D9" };
                  }
                  return (
                    <TabMenuItem
                      key={tab.id}
                      onClick={() => setSelectedTabs(tab.id)}
                      style={tabstyle}
                    >
                      {tab.label}
                    </TabMenuItem>
                  );
                })}
              </TabMenu>
            </TabContainer>
            {tabs.find((tab) => tab.id === selectedTabs)?.content}
          </TableContainer>
          <Head>대여</Head>
          <TableContainer>
            <TabContainer>
              <TabMenu>
                {rentTabs.map((tab) => {
                  //탭 이름 - 1) 주문내역 조회에는 마진 주기 2) 클릭한 탭은 색깔 달리 하기
                  let tabstyle: { paddingLeft?: string; color?: string } =
                    tab.id === 4 ? { paddingLeft: "0rem" } : {};
                  if (rentSelectedTabs !== tab.id) {
                    tabstyle = { ...tabstyle, color: "#D9D9D9" };
                  }
                  return (
                    <TabMenuItem
                      key={tab.id}
                      onClick={() => setRentSelectedTabs(tab.id)}
                      style={tabstyle}
                    >
                      {tab.label}
                    </TabMenuItem>
                  );
                })}
              </TabMenu>
            </TabContainer>
            {rentTabs.find((tab) => tab.id === rentSelectedTabs)?.content}
          </TableContainer>
        </>
      )}
    </Containers>
  );
}
