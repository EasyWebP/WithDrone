import React from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";

const Containers = styled.div`
  width: 100%;
  height: 100%;
  //gap: 2rem;

  border: 1px solid red;
`;

const LoginPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: grey;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: #fff;
`;



export default function Login() {
  const navigate = useNavigate();
  const { bookId } = useParams();

  return (
    <Containers>
      <LoginForm>
        
      </LoginForm>
    </Containers>
  );
}
