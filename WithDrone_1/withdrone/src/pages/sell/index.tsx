import { useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Commercial from "./Commercial";
import Educational from "./Educational";
import Filming from "./Filming";
import Hobby from "./Hobby";
import COLORS from "../../constants/color";
import Ad from "../../img/Ad.png";

const Containers = styled.div`
  width: 100%;
  height: 100%;
`;

const TabContainer = styled.ul`
  width: 60%;
  height: 2rem;
  background-color: #ffffff;
  color: ${COLORS.GREY[400]};
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  margin-bottom: 3rem;
  margin-top: 6.25rem;
  margin-left: 7rem;
  cursor: pointer;
  border: 1px solid blue;
`;

const TabMenu = styled.div`
  display: flex;
  width: calc(100% / 4);
  padding: 0.625rem;
  font-size: 1.875rem;
  transition: 0.5s;
`;

const AdContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: transparent;
  opacity: 0.77;
  img {
    width: 100%;
  }
`;

export default function Sell() {
  // Use hooks to get the location state and set the selected tab.
  const { state } = useLocation();
  const [selectedTabs, setSelectedTabs] = useState(Number(state) || 1);

  const tabs = [
    { id: 1, label: "상업용", content: <Commercial /> },
    { id: 2, label: "교육용", content: <Educational /> },
    { id: 3, label: "촬영용", content: <Filming /> },
    { id: 4, label: "취미용", content: <Hobby /> },
    { id: 5, label: "취미용", content: <Hobby /> },
    { id: 6, label: "취미용", content: <Hobby /> },
    { id: 7, label: "취미용", content: <Hobby /> },
  ];
  return (
    <Containers>
      <AdContainer>
        <img src={Ad} />
      </AdContainer>

      <TabContainer>
        {/* Map tab data and render tab menu for each tab */}
        {tabs.map((tab) => (
          <TabMenu
            key={tab.id}
            onClick={() => setSelectedTabs(tab.id)}
            style={{ color: selectedTabs === tab.id ? "black" : "#dcdcdc" }}
          >
            {tab.label}
          </TabMenu>
        ))}
      </TabContainer>
      {/* Render the selected tab content */}
      <div>{tabs.find((tab) => tab.id === selectedTabs)?.content}</div>
    </Containers>
  );
}
