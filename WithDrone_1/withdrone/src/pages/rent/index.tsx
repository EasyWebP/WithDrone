import { useState } from "react";
import styled from "styled-components";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Commercial from "./Commercial";
import Educational from "./Educational";
import Filming from "./Filming";
import Hobby from "./Hobby";
import COLORS from "../../constants/color";
import { useDispatch, useSelector } from "react-redux";
import { Rootstate } from "../../index";

const Containers = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid transparent;
`;

const TabContainer = styled.ul`
  width: 60%;
  height: 2rem;
  background-color: #ffffff;
  //color: rgb(232, 234, 237);
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
`;

const TabMenu = styled.div`
  display: flex;
  width: calc(100% / 4);
  padding: 0.625rem;
  font-size: 1.875rem;
  transition: 0.5s;
`;

export default function Rent() {
  const { state } = useLocation();
  console.log("state", state);
  const [selectedTabs, setSelectedTabs] = useState(Number(state) || 1);

  const tabs = [
    { id: 1, label: "상업용", content: <Commercial /> },
    { id: 2, label: "교육용", content: <Educational /> },
    { id: 3, label: "촬영용", content: <Filming /> },
    { id: 4, label: "취미용", content: <Hobby /> },
  ];
  console.log("넘어온 리덕스값이 여기 보일거임", selectedTabs);
  return (
    <Containers>
      <TabContainer>
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
      <div>{tabs.find((tab) => tab.id === selectedTabs)?.content}</div>
    </Containers>
  );
}
