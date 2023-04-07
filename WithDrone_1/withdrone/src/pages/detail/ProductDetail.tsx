import React from "react";
import styled from "styled-components";
import { useNavigate, useParams, useLocation } from "react-router-dom";

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
    width: 500px;
    height: 480px;
`

const Excontainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
    height: 480px;
    margin-left: 20px;
    margin-top: 40px;
`

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

const Tr = styled.tr`
   
`

const Td = styled.td`
    width: 15px;
    vertical-align: top;
    color: #A5A3A3;
`

const Td2 = styled.td`
    width: 15px;
    vertical-align: top;
`

export default function ProductDetail() {
  const navigate = useNavigate();
  const { bookId } = useParams();
  const location = useLocation();
  const { product } = location.state;

  return (
    <Containers>
      <Image1 src={product.image} />
      <Excontainer>
        <Title>{product.name}</Title>
        <Explain>
            <Tr>
                <Td>판매가</Td>
                <Td2>{product.price}</Td2>
            </Tr>
            <Tr>
                <Td>제조사</Td>
                <Td2>{product.companyName}</Td2>
            </Tr>
            <Tr>
                <Td>제품 설명</Td>
                <Td2>{product.description}</Td2>
            </Tr>
                
        </Explain>
      </Excontainer>
    </Containers>
  );
}
