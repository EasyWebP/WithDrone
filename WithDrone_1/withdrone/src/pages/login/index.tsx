import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import COLORS from "../../constants/color";
import * as S from "../../components/Layout/Header/index.styles";
import logo from "../../img/drone.png";
import useLogin from "../../hooks/useLogin";
import PATH from "../../constants/path";
import SNSLogin from "./sns";

const Containers = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const Title = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  h1 {
    font-size: 2.3rem;
    font-family: GmarketSans;
  }
`;
const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  margin-left: -24rem;
  p {
    margin-top: 2rem;
    font-weight: bold;
  }
`;

const LoginForm = styled.form`
  width: 55rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  gap: 1rem;
  border-radius: 5px;
  background-color: #fff;
  hr {
    color: black;
    height: 2px;
    width: 80%;
  }
`;

const LoginBox = styled.div`
  width: 41rem;
  display: flex;
  flex-direction: column;
`;

const BoxTitle = styled.h3`
  margin-bottom: 5px;
  font-size: 1.2rem;
  color: ${COLORS.GREY[400]};
`;

const BoxInput = styled.input`
  width: 41rem;
  height: 30px;
  border: 0.1rem solid ${COLORS.GREY[300]};
  margin-bottom: 15px;
  border-radius: 0.5rem;
  margin-top: 0.5rem;
  padding: 2rem 0 2rem 1rem;
`;

const SubmitButton = styled.button`
  margin-top: 10px;
  background-color: ${COLORS.MEDIUM_BLUE};
  border: none;
  cursor: pointer;
  font-weight: bold;
  width: 10rem;
  padding: 1rem;
  margin-left: 31rem;
  color: white;
  border-radius: 0.5rem;
  &:hover {
    background-color: ${COLORS.BLUE};
  }
`;
const Box = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  margin-left: -22rem;
  font-size: 1.2rem;
  cursor: pointer;
  div {
    &:hover {
      color: ${COLORS.BLUE};
    }
  }
`;
const Message = styled.p`
  font-size: 1.1rem;
  padding-top: 1rem;
  color: ${COLORS.MEDIUM_BLUE};
`;

export default function Login() {
  const navigate = useNavigate();

  const {
    isValidateEmail,
    email,
    onChangeEmail,
    password,
    onChangePassword,
    mutateLogin,
  } = useLogin();

  let message = "";
  if (!isValidateEmail && email.length > 0) {
    message = "올바른 이메일 주소를 입력해주세요.";
  } else {
    message = "";
  }
  return (
    <Containers
      onSubmit={(e) => {
        e.preventDefault();
        mutateLogin.mutate({ email, password });
      }}
    >
      <TitleBox>
        <Title>
          <S.LogoImg src={logo} />
          <h1>withdrone</h1>
        </Title>
        <p>로그인</p>
      </TitleBox>
      <LoginForm>
        <LoginBox>
          <BoxTitle>아이디</BoxTitle>
          <BoxInput
            placeholder="아이디를 입력해주세요"
            value={email}
            onChange={onChangeEmail}
          />
          {message.length > 0 && <Message> {message}</Message>}
        </LoginBox>
        <LoginBox>
          <BoxTitle>비밀번호</BoxTitle>
          <BoxInput
            placeholder="비밀번호를 입력해주세요"
            type={"password"}
            value={password}
            onChange={onChangePassword}
          />
        </LoginBox>
        <hr />
        <Box>
          <div onClick={() => navigate(PATH.SIGNUP)}>회원가입</div>
          <div>아이디 찾기</div>
          <div>비밀번호 찾기</div>
        </Box>
        <SubmitButton title="로그인" type="submit">
          로그인
        </SubmitButton>
      </LoginForm>
      <SNSLogin />
    </Containers>
  );
}
