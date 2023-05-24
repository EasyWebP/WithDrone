import styled from "styled-components";
import exp from "constants";
import COLORS from "../../constants/color";

export const Containers = styled.div`
  display: flex;
  height: 80rem;
  flex-direction: column;
  align-items: center;
  width: 100%;
  h1 {
    margin-right: 20rem;
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 0.8rem;
  }
`;
export const Box = styled.div`
  display: flex;
  //border: 1px solid red;
  width: 100%;
  align-items: center;
  gap: 8rem;
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
export const ProductImg = styled.img`
  //border: 1px solid red;
  width: 20rem;
  height: 15rem;
`;
export const Line = styled.div`
  width: 100%;
  color: grey;
  border: 1px solid grey;
`;
export const DeleteButton = styled.button`
  width: 10rem;
  border: none;
  background-color: transparent;
  height: 4rem;
  cursor: pointer;
  margin-left: 14rem;
  &:hover {
    background-color: ${COLORS.BLUE};
  }
`;

export default function LikeList() {
  return (
    <>
      <Containers>
        <Line />
        <h1>상품 정보</h1>
        <Box>
          <ProductImg />
          <h4>Matrice M600 Matrice M600</h4>
          <p>20000원</p>
          <p>삼성</p>
          <DeleteButton>삭제하기</DeleteButton>
        </Box>
      </Containers>
    </>
  );
}
