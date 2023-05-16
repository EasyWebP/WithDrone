import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../img/drone.png";
import PATH from "../../../constants/path";
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  padding: 20px;
  position: relative;
  bottom: 0;
  width: 100%;
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  font-weight: bold;
`;

const CompanyName = styled.span`
  font-weight: bold;
`;

const Menu = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const MenuItem = styled.li`
  margin-right: 10px;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <Logo src={logo} alt="Company Logo" />
      <CompanyName>WithDrone</CompanyName>
      <Menu>
        <MenuItem>회사소개</MenuItem>
        <MenuItem>이용약관</MenuItem>
      </Menu>
    </FooterContainer>
  );
}
