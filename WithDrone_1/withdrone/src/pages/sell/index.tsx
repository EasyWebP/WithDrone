import React, { useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Commercial from "./Commercial";
import Educational from "./Educational";
import Filming from "./Filming";
import Hobby from "./Hobby";
import COLORS from "../../constants/color";
import Ad from "../../img/Ad.png";
import Drone from "./Drone";
import IconButton from "../../components/IconButton";
import { StyledIcon } from "../../components/IconButton/index.styles";
import Icon from "../../components/Icon";

const Containers = styled.div`
  width: 100%;
  height: 100%;
`;

const TabContainer = styled.ul`
  width: 85%;
  height: 2rem;
  background-color: #ffffff;
  color: ${COLORS.GREY[400]};
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  margin-bottom: 3rem;
  margin-top: 3.25rem;
  margin-left: 11rem;
  cursor: pointer;
`;

const TabMenu = styled.div`
  display: flex;
  //width: calc(100% / 4);
  padding: 0.7rem 1rem 0.7rem 1rem;
  font-size: 1rem;
  transition: 0.5s;
  border-radius: 30px;
  margin-right: 3rem;
  justify-content: center;
`;

const AdContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: transparent;
  opacity: 0.77;
  img {
    margin-top: 2rem;
    width: 100%;
  }
`;
const StyledIconButton = styled(IconButton)`
  font-size: 1.2rem;
`;
const MidContainer = styled.div`
  width: 100%;
  display: flex;
  //border: 1px solid red;
  justify-content: center;
  gap: 71%;
  margin-bottom: 20px;
`;
const SelectContainer = styled.div`
  display: flex;
  gap: 10px;
`;
const Line = styled.div`
  margin-top: 2rem;
  justify-content: center;
  height: 1px;
  width: 85%;
  background-color: ${COLORS.GREY[300]};
`;

export default function Sell() {
  // Use hooks to get the location state and set the selected tab.
  const { state } = useLocation();
  const [selectedTabs, setSelectedTabs] = useState(Number(state) || 1);

  const tabs = [
    { id: 0, label: "전체 🔗", content: <Drone />, color: COLORS.GREY[200] },
    {
      id: 1,
      label: "상업용 📠",
      content: <Commercial />,
      color: "#8FB8F1",
    },
    {
      id: 2,
      label: "교육용 📖",
      content: <Educational />,
      color: "#D4FFE3",
    },
    { id: 3, label: "촬영용 📸", content: <Filming />, color: "#E9D5FA" },
    { id: 4, label: "취미용 🎮", content: <Hobby />, color: "#FBDDDE" },
    { id: 5, label: "어린이용 👦🏻", content: <Hobby />, color: "#DEFCF6" },
    { id: 6, label: "경기용 🏎️", content: <Hobby />, color: "#FBEFDD" },
  ];
  return (
    <Containers>
      <AdContainer>
        <img src={Ad} />
        <Line />
      </AdContainer>
      <TabContainer>
        {/* Map tab data and render tab menu for each tab */}
        {tabs.map((tab) => (
          <TabMenu
            key={tab.id}
            onClick={() => setSelectedTabs(tab.id)}
            style={{
              backgroundColor: selectedTabs === tab.id ? tab.color : tab.color,
            }}
          >
            {tab.label}
          </TabMenu>
        ))}
      </TabContainer>
      <MidContainer>
        <StyledIconButton
          title="목록 모아보기 ❯"
          theme="normal"
          iconName="heart"
          iconSize="1rem"
          color={"red"}
        />
        <SelectContainer>
          <IconButton
            iconName="check"
            title="인기순"
            iconSize="1rem"
            theme="normal"
          />
          <IconButton
            iconName="check"
            title="최신순"
            iconSize="1rem"
            theme="normal"
          />
        </SelectContainer>
      </MidContainer>
      {/* Render the selected tab content */}
      <div>{tabs.find((tab) => tab.id === selectedTabs)?.content}</div>
    </Containers>
  );
}
