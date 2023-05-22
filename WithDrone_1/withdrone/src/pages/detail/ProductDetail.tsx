import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import COLORS from "../../constants/color";

const Containers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 5rem;
  width: 85%;
`;

const Image1 = styled.img`
  width: 47%;
  height: 40rem;
  margin-right: 2rem;
`;

const RightContainer = styled.div`
  width: 42%;
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 2rem;
`;

const Button1 = styled.button`
  margin-right: 3.7rem;
  height: 5rem;
`;

const BuyContainer = styled.div`
  display: flex;
  margin-right: 3.7rem;
  margin-top: 2rem;
`;

const BuyInput = styled.input`
  margin-right: 3.7rem;
  height: 5rem;
  // flex: 0 0 2;
  width: 8rem;
  text-align: center;
  font-size: 2rem;
  
`

const BuyButton = styled.button`
  flex:1;
  margin-right: 3rem;
  background-color: #3583F7;
  color: white;
  border: none;
  border-radius: 4rem;
  padding: 10px 20px;
  cursor: pointer;
  height: 5rem;
  font-size: 2rem;
`;

const Excontainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  // height: 32rem;
  justify-self: flex-start;
  width: 87%;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 5px;
`;

const Title = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 2.5rem;
  color: #000000;
`;

const Explain = styled.table`
  margin-top: 4rem;
  border: none;
  border-spacing: 0 2rem;
`;

const Tr = styled.tr``;

const Td = styled.td`
  width: 2.4rem;
  vertical-align: top;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  margin-right: 6rem;
  font-size: 1.7rem;
`;

const Td2 = styled.td`
  width: 1.5rem;
  vertical-align: top;
  white-space: pre-line;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1.7rem;

`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  margin-top: 5rem;
  width: 85%;
`;

const DetailTitle = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 2rem;
  color: #000000;
  margin-top: 3rem;
  margin-bottom: 3rem;
`

const BottomImage = styled.img`
  width: 100%;
  // height: 40rem;
`;


export default function ProductDetail() {
  //Use hook 'useLocation' to get detail information of drone from components that clicked in sell(or rent) page.
  const location = useLocation();
  const { product } = location.state;

  return (
    <Containers>
      <FlexContainer>
        <Image1 src={product.image} />
        <RightContainer>
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
                <Td>배송비</Td>
                <Td2>3000원</Td2>
              </Tr>
            </Explain>
          </Excontainer>
          <ButtonContainer>
            <Button1>찜 하기</Button1>
            <Button1>장바구니 담기</Button1>
          </ButtonContainer>
          <BuyContainer>
            <BuyInput type="number" placeholder="1"/>
            
            <BuyButton>구매하기</BuyButton>
          </BuyContainer>
        </RightContainer>
      </FlexContainer>
      <BottomContainer>
        <Title>{product.name}</Title>
        <DetailTitle>제품 상세 정보</DetailTitle>
        <BottomImage src={product.image}/>
        <BottomImage src={product.image}/>
      </BottomContainer>
    </Containers>
  );
}
