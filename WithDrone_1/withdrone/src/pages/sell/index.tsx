import { useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import Commercial from "./Commercial";

const Containers = styled.div`
  width: 100%;
  height: 100%;
`;

const TabMenu = styled.ul`
  width: 70%;
  background-color: #ffffff;
  color: rgb(232, 234, 237);
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  border-radius: 10px 10px 0px 0px;
  margin-bottom: 7rem;
  margin-top: 100px;
  margin-left: 100px;

  .submenu {
    display: flex;
    width: calc(100% / 4);
    padding: 10px;
    font-size: 30px;
    transition: 0.5s;
    border-radius: 10px 10px 0px 0px;
  }

  .focused {
    background-color: #dcdcdc;
    color: rgb(21, 20, 20);
  }
`;

const Desc = styled.div`
  text-align: center;
`;

export default function Sell() {
  const navigate = useNavigate();
  const { bookId } = useParams();
  const [currentTab, clickTab] = useState(0);

  const menuArr = [
    { name: "상업용" },
    { name: "교육용" },
    { name: "촬영용" },
    { name: "취미용" },
  ];

  const selectMenuHandler = (index: any) => {
    clickTab(index);
  };

  return (
    <Containers>
      <TabMenu>
        {menuArr.map((el, index) => (
          <li
            className={index === currentTab ? "submenu focused" : "submenu"}
            onClick={() => selectMenuHandler(index)}
          >
            {el.name}
          </li>
        ))}
      </TabMenu>
      <Desc>
        {currentTab === 0 && <Commercial></Commercial>}
        {currentTab === 1 && "교육용"}
        {currentTab === 2 && "촬영용"}
        {currentTab === 3 && "취미용"}
      </Desc>
    </Containers>
  );
}
