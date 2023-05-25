import styled from "styled-components";
import useMypage from "../../hooks/useMypage";
import { useEffect } from "react";
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

export default function CartList(props: any) {
  console.log(props.props);
  const { getCartlist, cartData } = useMypage();
  useEffect(() => {
    getCartlist();
  }, []);
  const filterValue =
    props.props === 3 ? "SALE" : props.props === 6 ? "RENTAL" : "";
  console.log("cartData", cartData);

  console.log();
  return (
    <>
      <Containers>
        <Line />
        {cartData &&
          Array.isArray(cartData) &&
          cartData
            .filter((item) => item.status === filterValue)
            .map((data, index) => (
              <Box key={index}>
                <ProductImg src={data.imagePath} />
                <h4>{data.name}</h4>
                <p>{data.price}</p>
                <p>{data.manufacturer}</p>
                <DeleteButton
                  onClick={() => {
                    // getOrderlist();
                  }}
                >
                  삭제하기
                </DeleteButton>
              </Box>
            ))}
      </Containers>
    </>
  );
}
