import React from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import home from "../../img/home.png";
import hobby from "../../img/gamepad.png";
import photo from "../../img/camera.png";
import industry from "../../img/robotic-arm.png";
import educate from "../../img/elearning.png";
import PATH from "../../constants/path";
import Commercial from "../sell/Commercial";
import Sell from "../sell";
import { useDispatch, useSelector } from "react-redux";
import { Rootstate } from "../../index";
import { setSelectTab } from "../../store/tabReducer";
import IconButton from "../../components/IconButton";
import Icon from "../../components/Icon";

const Containers = styled.div`
  width: 100%;
  height: 100%;
  overflow: visible;
`;
const Top = styled.div`
  position: relative;
  width: 100%;
  height: 53rem;
  h1 {
    position: absolute;
    right: 0;
    margin: 15rem 10rem 0 0;
    z-index: 1;
    color: white;
    font-size: 3.5rem;
    font-weight: bold;
  }
`;
const Img = styled.img`
  position: absolute;
  height: 53rem;
  width: 100%;
`;
const StartButton = styled.button`
  position: absolute;
  right: 0;
  margin: 30rem 31.5rem 0 0;
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
  height: 60rem;
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
  button {
    margin-right: 8px;
  }

  button.focused {
    font-weight: bold;
  }
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

// @ts-ignore
export default function Main() {
  const { memberId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedTab = useSelector((state: Rootstate) => {
    return state.tabReducer;
  });

  if (!selectedTab) {
    return null;
  }
  return (
    <Containers>
      <Top>
        <Img src={home} />
        <h1>
          withdrone과 함께
          <br /> 다양한 드론을 만나봐요.
        </h1>
        <StartButton
          onClick={() => {
            navigate(PATH.LOGIN);
          }}
        >
          바로 시작하기 &nbsp;➔
        </StartButton>
      </Top>
      <Bottom>
        <h1>나에게 필요한 드론을 선택할 수 있어요</h1>
        <h3>목적에 맞는 드론을 선택해보세요</h3>
        <Icon iconName="book" />
        <CategoryWrapper>
          {[
            { id: 1, src: industry },
            { id: 2, src: educate },
            { id: 3, src: photo },
            { id: 4, src: hobby },
          ].map((category) => (
            <Category key={category.id}>
              <CategoryImg
                src={category.src}
                onClick={() => {
                  dispatch(setSelectTab(category.id));
                  setTimeout(() => {
                    navigate("/sell", { state: category.id });
                  }, 10);
                }}
              />
            </Category>
          ))}
        </CategoryWrapper>
      </Bottom>
    </Containers>
  );
}
