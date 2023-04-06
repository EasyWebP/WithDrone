import styled from "styled-components";

export const Containers = styled.div`
  width: 100%;
  height: 100%;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export const Product = styled.div`
  width: 15%;
  height: 15%;
  margin-top: 2%;
  margin-bottom: 5%;
  margin-left: 7%;
  /* border: 1px solid black; */
`;

export const ProductImgDiv = styled.div`
  text-align: center;
`;

export const ProductImg = styled.img`
  max-width: 95%;
  max-height: 100%;
`;

export const ProductTitle = styled.p`
  font-size: 2rem;
  font-weight: 600;
  margin: 4%;
`;
