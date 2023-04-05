import React from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";

const Containers = styled.div`
  width: 100%;
  height: 100%;
  //gap: 2rem;

  border: 1px solid red;
`;

const Bottom = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export default function Rent() {
  const navigate = useNavigate();
  const { bookId } = useParams();

  return <Containers>여기가 ㄷㅐ여 페이지 </Containers>;
}
