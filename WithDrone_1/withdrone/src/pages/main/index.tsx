import React from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";

const Containers = styled.div`
  width: 100%;
  height: 100%;
  //gap: 2rem;
  padding: 4rem;
  //display: flex;
  //flex-direction: column;
  align-items: center;
  border: 1px solid red;
`;

const Bottom = styled.div`
  display: flex;
  gap: 1.5rem;
`;
export default function Main() {
  const navigate = useNavigate();
  const { bookId } = useParams();

  return (
    <Containers>
      응 여기다가 메인 짜. 띠거운 빨간색은 저기 border 제거하면 된다
    </Containers>
  );
}
