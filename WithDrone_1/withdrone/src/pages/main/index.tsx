import React from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import home from "../../img/home.png";
import hobby from "../../img/gamepad.png";
import photo from "../../img/camera.png";
import industry from "../../img/robotic-arm.png";
import educate from "../../img/elearning.png";
import PATH from "../../constants/path";

const Containers = styled.div`
  width: 100%;
  height: 100%;
`;
const Top = styled.div`
  position: relative;
  width: 100%;
  height: 47%;
  h1 {
    position: absolute;
    right: 0;
    margin: 10rem 20rem 0 0;
    z-index: 1;
    color: white;
    font-size: 5rem;
    font-weight: bold;
  }
`;
const Img = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  height: 33rem;
  width: 100%;
`;
const StartButton = styled.button`
  position: absolute;
  right: 0;
  margin: 20rem 37rem 0 0;
  padding: 1rem;
  z-index: 1;
  border-radius: 10px;
  background-color: white;
  border: none;
  cursor: pointer;
  font-weight: bold;
`;

const Bottom = styled.div`
  width: 100%;
  height: 53%;
  //border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  h1 {
    font-weight: bold;
    //margin-top: -9rem;
  }
  h3 {
    font-weight: 500;
    color: grey;
  }
`;
const CategoryWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  align-items: center;
  margin-top: 2rem;
`;
const CategoryImg = styled.img`
  width: 60%;
  height: 60%;
  margin-top: 2rem;
  margin-left: 2.5rem;
  //border-radius: 100%;
`;
const Category = styled.div`
  width: 14rem;
  height: 14rem;
  border-radius: 100%;
  display: flex;
  //justify-content: center;
  border: 2px solid black;
  cursor: pointer;
`;

export default function Main() {
  const navigate = useNavigate();
  const { bookId } = useParams();

  return (
    <Containers>
      <Top>
        <Img src={home} />
        <h1>withdrone</h1>
        <StartButton
          onClick={() => {
            navigate(PATH.LOGIN);
          }}
        >
          시작하기
        </StartButton>
      </Top>
      <Bottom>
        <h1>나에게 필요한 드론을 선택할 수 있어요</h1>
        <h3>목적에 맞는 드론을 선택해보세요</h3>

        <CategoryWrapper>
          <Category>
            <CategoryImg src={hobby} />
          </Category>
          <Category>
            <CategoryImg src={photo} />
          </Category>
          <Category>
            <CategoryImg src={industry} />
          </Category>
          <Category>
            <CategoryImg src={educate} />
          </Category>
        </CategoryWrapper>
      </Bottom>
    </Containers>
  );
}
