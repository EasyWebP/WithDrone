import React from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import image1 from "../../img/drone1.jpeg";

const Containers = styled.div`
  width: 100%;
  height: 100%;
  //gap: 2rem;
  padding: 4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid red;
`;

const Image1 = styled.img`
    width: 579px;
    height: 527px;
`

const Excontainer = styled.div`
    display: flex;
    flet-direction column: 
    width: 579px;
    height: 527px;
`

const Title = styled.div`
  position: absolute;
  width: 600px;
  height: 80px;
  left: 961px;
  top: 303px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;

  color: #000000;
`;

const Explain = styled.div``;

export default function Main() {
  const navigate = useNavigate();
  const { bookId } = useParams();

  return (
    <Containers>
      <Image1 src={image1} />
      <Excontainer>
        <Title>title</Title>
        <Explain></Explain>
      </Excontainer>
    </Containers>
  );
}
