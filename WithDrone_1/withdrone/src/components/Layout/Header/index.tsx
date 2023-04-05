import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./index.styles";
import logo from "../../../img/drone.png";
import PATH from "../../../constants/path";

export default function Header() {
  const navigate = useNavigate();
  const buttonList = [
    { label: "회사 제품", path: PATH.INTRO },
    { label: "대여 제품", path: PATH.RENT },
    { label: "판매 제품", path: PATH.SELL },
    { label: "커뮤니티", path: PATH.MAIN },
  ];

  const handleClick = (path: string) => {
    navigate(path);
  };
  return (
    <S.Container>
      <S.LogoBox onClick={() => handleClick(PATH.MAIN)}>
        <S.LogoImg src={logo} />
        <div>withdrone</div>
      </S.LogoBox>
      <S.Menu>
        {buttonList.map((button, index) => (
          <S.Button key={index} onClick={() => handleClick(button.path)}>
            {button.label}
          </S.Button>
        ))}
        <S.SignButton onClick={() => handleClick(PATH.LOGIN)}>
          회원가입 / 로그인
        </S.SignButton>
      </S.Menu>
    </S.Container>
  );
}
