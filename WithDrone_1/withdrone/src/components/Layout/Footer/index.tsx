import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../img/drone.png";
import insta from "../../../img/insta.png";
import kakao from "../../../img/kakao.png";
import youtbe from "../../../img/youtube.png";
import PATH from "../../../constants/path";
import styled from 'styled-components';

const FooterContainer = styled.footer`
  border-top: 0.05rem solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  background-color: white;
  padding: 2rem;
  position: relative;
  bottom: 0;
  width: 100%;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
`

const Logo = styled.img`
  width: 3rem;
  height: 3rem;
  margin-right: 1rem;
  font-weight: bold;
`;

const CompanyName = styled.span`
  font-weight: bold;
  font-size: 2rem;
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
`

const Menu = styled.ul`
  display: flex;
  justify-content: space-between; 
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin-bottom: 1.2rem;
`;

const MenuItem = styled.a`
  margin-right: 1rem;
  text-decoration: underline;
`;

const CompanyText = styled.li`
  color: grey;
  list-style-type: none;
`

const SNSContainer = styled.div`
  background-color: white;
  width: 45%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  height: 100%;
  margin-top: 3rem;
  // margin-right: 17rem;
`

const SNS = styled.img`
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
  font-weight: bold;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <LogoContainer>
        <Logo src={logo} alt="Company Logo" />
        <CompanyName>withdrone</CompanyName>
      </LogoContainer>
      <MenuContainer>
        <Menu>
          <MenuItem href="https://www.youtube.com/watch?v=tF58zRciLaw&list=LL&index=11">회사소개</MenuItem>
          <MenuItem href="https://www.youtube.com/watch?v=tF58zRciLaw&list=LL&index=11">이용약관</MenuItem>
          <MenuItem href="https://www.youtube.com/watch?v=tF58zRciLaw&list=LL&index=11">개인정보처리방침</MenuItem>
        </Menu>
        <CompanyText>(주) 위드 드론</CompanyText>
      </MenuContainer>
      <SNSContainer>
        <SNS src={insta} alt="insta logo" />
        <SNS src={kakao} alt="kakao Logo" />
        <SNS src={youtbe} alt="youtube Logo" />
      </SNSContainer>
    </FooterContainer>
  );
}
