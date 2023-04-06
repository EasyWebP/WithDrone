import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import Commercial from './Commercial';
import Educational from './Educational';
import Filming from './Filming';
import Hobby from './Hobby';

const Containers = styled.div`
  width: 100%;
  height: 100%;
`;

const TabMenu = styled.ul`
  width: 60%;
  background-color: #ffffff;
  color: rgb(232, 234, 237);
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  border-radius: 0.625rem 0.625rem 0rem 0rem;
  margin-bottom: 7rem;
  margin-top: 6.25rem;
  margin-left: 10rem;

  .submenu {
    display: flex;
    width: calc(100% / 4);
    padding: 0.625rem;
    font-size: 1.875rem;
    transition: 0.5s;
    border-radius: 0.625rem 0.625rem 0rem 0rem;
  }

  .focused {
    background-color: #dcdcdc;
    color: rgb(21, 20, 20);
  }
`;

export default function Sell() {
  const navigate = useNavigate();
  const { bookId } = useParams();
  const [selectedTab, setSelectedTab] = useState(1);

  const tabs = [
    { id: 1, label: '상업용', content: <Commercial /> },
    { id: 2, label: '교육용', content: <Educational /> },
    { id: 3, label: '촬영용', content: <Filming /> },
    { id: 4, label: '취미용', content: <Hobby /> },
  ];

  return (
    <Containers>
      <TabMenu>
        {tabs.map((tab) => (
          <li
            className={tab.id === selectedTab ? 'submenu focused' : 'submenu'}
            key={tab.id}
            onClick={() => setSelectedTab(tab.id)}
          >
            {selectedTab === tab.id ? <b>{tab.label}</b> : tab.label}
          </li>
        ))}
      </TabMenu>
      <div>{tabs.find((tab) => tab.id === selectedTab)?.content}</div>
    </Containers>
  );
}
