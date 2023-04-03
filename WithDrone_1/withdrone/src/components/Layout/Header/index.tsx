import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./index.styles";
import logo from "../../../img/drone.png";
import { SignButton } from "./index.styles";

export default function Header() {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.LogoBox>
        <S.LogoImg src={logo} />
        <div>withdrone</div>
      </S.LogoBox>
      <S.Menu>
        <S.Button>회사 제품</S.Button>
        <S.Button>대여 제품</S.Button>
        <S.Button>판매 제품</S.Button>
        <S.Button>커뮤니티</S.Button>
        <S.SignButton>회원가입 / 로그인</S.SignButton>
      </S.Menu>
    </S.Container>
  );
}
