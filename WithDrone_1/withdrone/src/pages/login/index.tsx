import React from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";

const Containers = styled.div`
  width: 100%;
  height: 100%;
  //gap: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 5rem;
  font-weight: bold;
  margin-bottom: 30px;
`

const LoginForm = styled.form`
  width: 35%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: #fff;
`;

const LoginBox = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`

const BoxTitle = styled.h3`
  font-weight: bold;
  align: left;
  margin-bottom: 5px;
`

const BoxInput = styled.input`
  width: 100%;
  height: 30px;
  background: #D9D9D9;
  border: none;
  margin-bottom: 15px;
`

const SubmitButton = styled.button`
  margin-top: 10px;
  background-color: #D9D9D9;
  border: none;
  cursor: pointer;
  font-weight: bold;
  width: 70px;
`


export default function Login() {
  const navigate = useNavigate();
  const { bookId } = useParams();

  return (
    <Containers>
      <Title>withdrone</Title>
      <LoginForm>
        <LoginBox>
          <BoxTitle>아이디</BoxTitle>
          <BoxInput></BoxInput>
        </LoginBox>
        <LoginBox>
          <BoxTitle>비밀번호</BoxTitle>
          <BoxInput></BoxInput>
        </LoginBox>
        <SubmitButton>Submit</SubmitButton>
      </LoginForm>
    </Containers>
  );
}
