import styled from "styled-components";
import COLORS from "../constants/color";

export const Containers = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid red;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  border: 1px solid blue;
`;

export const Product = styled.div`
  width: 180px;
  height: 200px;
  display: block;
  background-color: ${COLORS.GREY[200]};
  border: 1px solid black;
`;

export const ProductImgDiv = styled.div`
  text-align: center;
`;

export const ProductImg = styled.img`
  margin-top: 0.7rem;
  width: 165px;
  height: 130px;
`;

export const ProductTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0.9rem;
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
