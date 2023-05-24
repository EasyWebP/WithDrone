import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./index.styles";
import logo from "../../../img/drone.png";
import PATH from "../../../constants/path";
import { loadMe, patchMe } from "../../../api/user";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import QUERYKEYS from "../../../constants/querykey";
import IconButton from "../../IconButton";
import toastMsg from "../../Toast";

interface IUserInfo {
  id: number;
  username: "string";
  nickname: "string";
  email: "string";
}
export default function Header() {
  const navigate = useNavigate();
  const buttonList = [
    { label: "회사 소개", path: PATH.INTRO },
    { label: "대여 제품", path: PATH.RENT },
    { label: "판매 제품", path: PATH.SELL },
  ];
  //Use hook 'useNavigate' to navigate url to move page that clicked label.
  const handleClick = (path: string) => {
    navigate(path);
  };
  const [name, setName] = useState("");
  useEffect(() => {
    if (
      localStorage.getItem("accessToken") &&
      localStorage.getItem("created")
    ) {
      loadMe().then((data: IUserInfo) => {
        setName(data.username);
      });
    }
  }, []);
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
        {!localStorage.getItem("accessToken") ? (
          <S.SignButton onClick={() => handleClick(PATH.LOGIN)}>
            회원가입 / 로그인
          </S.SignButton>
        ) : (
          <S.StyledIconButton
            iconName="person"
            onClick={() => handleClick(PATH.MYPAGE)}
            theme="normal"
            iconSize="2.2rem"
            title={name}
          />
        )}
      </S.Menu>
    </S.Container>
  );
}
