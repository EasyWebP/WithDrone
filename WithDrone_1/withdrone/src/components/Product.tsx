import styled from "styled-components";
import COLORS from "../constants/color";

export const Containers = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center; /* 추가 */
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 85%;
  //border: 1px solid red;
`;

export const Product = styled.div`
  width: 27rem;
  height: 36rem;
  display: block;
`;

export const ProductImgDiv = styled.div`
  text-align: center;
`;

export const ProductImg = styled.img`
  margin-top: 0.7rem;
  border: 1px solid ${COLORS.GREY[400]};
  border-radius: 10px;
  width: 27rem;
  height: 24rem;
`;

export const ProductTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0.9rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
`;

export const ProductPrice = styled.p`
  font-size: 1.3rem;
  font-weight: 300;
  margin: 0.9rem;
  text-align: left;
`;
