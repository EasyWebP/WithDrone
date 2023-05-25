import styled from "styled-components";
import COLORS from "../constants/color";

export const Containers = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center; /* 추가 */
  flex-direction: column;
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

export const PageNumberContainer = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  ul.pagination li {
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 1px solid #e2e2e2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }
  ul.pagination li:first-child {
    border-radius: 5px 0 0 5px;
  }
  ul.pagination li:last-child {
    border-radius: 0 5px 5px 0;
  }
  ul.pagination li a {
    text-decoration: none;
    color: #337ab7;
    font-size: 1rem;
  }
  ul.pagination li.active a {
    color: white;
  }
  ul.pagination li.active {
    background-color: #337ab7;
  }
  ul.pagination li a:hover,
  ul.pagination li a.active {
    color: blue;
  }
`;
