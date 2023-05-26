import styled from "styled-components";
import useMypage from "../../hooks/useMypage";
import { useEffect, useState } from "react";

export const Containers = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 40rem;
  height: auto;
  align-items: center;
  width: 100%;
  position: relative;
`;

export const Head = styled.div`
  display: flex;
  gap: 20rem;
  width: 100%;
  justify-content: center;
  h2 {
    //padding-right: 15rem;
    width: 40rem;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    //padding-left: 12rem;
    margin-top: 0.8rem;
  }
  h1 {
    width: 8rem;
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 0.8rem;
  }
`;

export const Box = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 10rem;
  margin-top: 1rem;

  h4 {
    //border: 1px solid red;
    width: 23rem;
    font-weight: bold;
  }
  p {
    font-weight: bold;
  }
`;
export const InfoBox = styled.div`
  display: flex;
  // ;
  width: 40rem;
  align-items: center;
  gap: 2rem;
  margin-top: 4rem;
  margin-right: 5rem;
  position: relative;
`;
export const InfoBox2 = styled.div`
  display: flex;
  gap: 10rem;
  margin-top: 1rem;
  position: relative;

  h3 {
    width: 15rem;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: right;
    padding-right: 4rem;
    padding-left: 2rem;
  }
`;
export const Info = styled.div`
  display: flex;
  height: 100%;
  position: absolute;
  top: 0;
  margin-left: 22rem;
  justify-content: left;
  flex-direction: column;
  gap: 2rem;
`;
export const ProductImg = styled.img`
  width: 20rem;
  height: 15rem;
`;
export const Line = styled.div`
  width: 100%;
  color: grey;
  border: 1px solid grey;
`;
export const Nodata = styled.div`
  margin-top: 4rem;
  font-weight: 600;
  color: grey;
  font-size: 1.5rem;
`;

export default function OrderList(props: any) {
  const { getOrderlist, likeData, orderData } = useMypage();
  useEffect(() => {
    getOrderlist();
  }, []);
  const filterValue =
    props.props === 1 ? "SALE" : props.props === 4 ? "RENTAL" : "";

  return (
    <>
      <Containers>
        <Line />
        <Head>
          {orderData &&
          Array.isArray(orderData) &&
          orderData.filter((item) => item.status === filterValue).length ===
            0 ? (
            <Nodata>아직 주문하신 상품이 없으시네요.😋 </Nodata>
          ) : (
            <>
              <h2>상품 정보</h2>
              <h1>주문 일자</h1>
              <h1>주문 번호</h1>
              <h1>수량</h1>
            </>
          )}
        </Head>
        {orderData &&
          Array.isArray(orderData) &&
          orderData
            .filter((item) => item.status === filterValue)
            .map((data, index) => (
              <Box key={index}>
                <InfoBox>
                  <ProductImg src={data.imagePath} />
                  <Info>
                    <h4>{data.productName}</h4>
                    <p>{data.manufacturer}</p>
                    <p>{data.price}</p>
                  </Info>
                </InfoBox>
                <InfoBox2>
                  <h3>{data.orderDate}</h3>
                  <h3>{data.orderNumber}</h3>
                  <h3>{data.count}개</h3>
                </InfoBox2>
              </Box>
            ))}
      </Containers>
    </>
  );
}
