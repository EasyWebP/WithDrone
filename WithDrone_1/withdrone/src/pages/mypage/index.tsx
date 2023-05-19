import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import COLORS from "../../constants/color";
import * as S from "../../components/Layout/Header/index.styles";
import logo from "../../img/drone.png";
import mavic2 from "../../img/mavic2.jpg";
import { fetchMember } from "../../api/user";


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

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 
`;

const ColumnGroup = styled.colgroup``;

const Column = styled.col`
  width: ${props => props.width};
`;

const TableHead = styled.thead`
  background-color: white;
`;

const TableHeadRow = styled.tr`
`;

const TableHeadCell = styled.th`
  padding: 1rem;
  text-align: center;
  font-weight: bold;
  border-top: 0.1rem solid black;
`;

const TableBody = styled.tbody`
    border-bottom: 0.1rem solid black;
`;

const TableBodyRow = styled.tr`

`;

const TableBodyCell = styled.td`
  padding: 10px;
  text-align: center;
`;

const TableBodyFirst = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`; 

const TableImg = styled.img`
    alt: "Product";
    width: 20rem;
    heigh: 20rem;
`

const TableInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const TableInfoContent = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    text-align: left;
`

const TotalContext = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    align-self: flex-end;
    margin: 5rem 10rem;
`

export default function Mypage() {
    const [member, setMember] = useState({username: '김동준', nickname: '김도옹준', email: 'dongjunkim99@icloud.com'}); // 초기값 없으면 비동기라 null 될수있다 에러뜸

  useEffect(() => {
    fetchMember()
      .then((fetchedData) => {
        console.log("유저정보", fetchedData); 
        setMember(fetchedData); // 데이터 상태 업데이트
      });
  }, []);
 
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
            <Table>
                <ColumnGroup>
                    <Column width="40%" />
                    <Column width="20%" />
                    <Column width="20%" />
                    <Column width="20%" />
                </ColumnGroup>
                <TableHead>
                    <TableHeadRow>
                        <TableHeadCell>상품 정보</TableHeadCell>
                        <TableHeadCell>주문일자</TableHeadCell>
                        <TableHeadCell>주문번호</TableHeadCell>
                        <TableHeadCell>수량</TableHeadCell>
                    </TableHeadRow>
                </TableHead>
                <TableBody>
                    <TableBodyRow>
                        <TableBodyCell>
                            <TableBodyFirst>
                                <TableImg src={mavic2}/> 
                                <TableInfoContainer>
                                    <TableInfoContent>Matrice M600 Matrice M600</TableInfoContent>
                                    <TableInfoContent>20,000원</TableInfoContent>
                                    <TableInfoContent>삼성</TableInfoContent>
                                </TableInfoContainer>
                            </TableBodyFirst>
                        </TableBodyCell>
                        <TableBodyCell>2023-05-17</TableBodyCell>
                        <TableBodyCell>12345678</TableBodyCell>
                        <TableBodyCell>1개</TableBodyCell>
                    </TableBodyRow>
                    
                </TableBody>
            </Table>
        </TableContainer>
        <TotalContext>총 800,000원</TotalContext>
    </Containers>
  )
}
