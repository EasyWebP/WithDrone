import styled from "styled-components";
import COLORS from "../constants/color";

export const Containers = styled.div`
  width: 100%;
  height: 100%;
  //border: 1px solid black;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export const Product = styled.div`
  width: 180px;
  height: 200px;
  display: block;
  background-color: ${COLORS.GREY[200]};
`;

export const ProductImgDiv = styled.div`
  text-align: center;
`;

export const ProductImg = styled.img`
  margin-top: 0.7rem;
  width: 165px;
  height: 130px;
  // max-width: 95%;
  // max-height: 100%;
`;

export const ProductTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0.9rem;
  /* width: 150px;
  height: 20px; */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
`;

export const ProductPrice = styled.p`
  font-size: 1.3rem;
  font-weight: 300;
  text-align: center;
`;
