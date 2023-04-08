import React from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import image1 from "../../img/drone1.jpeg";
import COLORS from "../../constants/color";

const Containers = styled.div`
  width: 100%;
  height: 100%;
  //gap: 2rem;
  padding: 4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Image1 = styled.img`
  width: 90%;
  height: 90%;
`;

const Excontainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 480px;
  margin-left: 20px;
  margin-top: 40px;
`;

const Title = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  //   line-height: 30px;

  color: #000000;
`;

const Explain = styled.table`
  margin-top: 40px;
  border: none;
  // align: left;
  border-spacing: 0px 20px;
`;

const Tr = styled.tr``;

const Td = styled.td`
  width: 15px;
  vertical-align: top;
  color: #a5a3a3;
`;

const Td2 = styled.td`
  width: 15px;
  vertical-align: top;
`;

export default function Main() {
  const navigate = useNavigate();
  const { bookId } = useParams();

  return (
    <Containers>
      <Image1 src={image1} />

      <Excontainer>
        <Title>
          [DJI] Mavic 3 CINE Premium Combo 매빅 3 시네 프리미엄 콤보
        </Title>
        <Explain>
          <Tr>
            <Td>판매가</Td>
            <Td2>200,000원</Td2>
          </Tr>
          <Tr>
            <Td>제조사</Td>
            <Td2>삼성</Td2>
          </Tr>
          <Tr>
            <Td>제품 설명</Td>
            <Td2>
              [DJI] Mavic 3 CINE Premium Combo 매빅 3 시네 프리미엄 콤보[DJI]
              Mavic 3 CINE Premium Combo 매빅 3 시네 프리미엄 콤보[DJI] Mavic 3
              CINE Premium Combo 매빅 3 시네 프리미엄 콤보
            </Td2>
          </Tr>
        </Explain>
      </Excontainer>
    </Containers>
  );
}
