import styled from "styled-components";
import useMypage from "../../hooks/useMypage";
import React, { useEffect, useState } from "react";
import COLORS from "../../constants/color";
import * as S from "../detail/index.style";
import PATH from "../../constants/path";
import { useNavigate } from "react-router-dom";
import Dialog from "../../components/Dialog";
import { text } from "@storybook/addon-knobs";
import { deleteCarts } from "../../api/product";
import toastMsg from "../../components/Toast";

export const Containers = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 40rem;
  height: auto;
  align-items: center;
  width: 100%;
  position: relative;
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
  position: relative;
  align-items: center;
  gap: 8rem;
  margin-top: 1rem;

  h4 {
    //border: 1px solid red;
    //width: 23rem;
    font-weight: bold;
  }
  p {
    width: 10rem;
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
export const Thinline = styled.div`
  width: 100%;
  color: grey;
  border: 0.5px solid grey;
`;
export const DeleteButton = styled.button`
  width: 10rem;
  border: none;
  position: absolute;
  right: 0;
  background-color: transparent;
  color: ${COLORS.GREY[400]};
  height: 4rem;
  cursor: pointer;
  font-weight: bold;
  margin-left: 14rem;
  &:hover {
    color: ${COLORS.GREY[300]};
  }
`;
export const PurchaseButton = styled.button`
  width: 10rem;
  border: none;
  position: absolute;
  border-radius: 10px;
  right: 0;
  background-color: transparent;
  height: 4rem;
  color: ${COLORS.DARK_BLUE};
  font-weight: bold;
  cursor: pointer;
  margin-right: 20rem;
  &:hover {
    color: ${COLORS.BLUE};
  }
`;
export const BuyButton = styled.button`
  //flex: 1;
  background-color: #3583f7;
  color: white;
  border: none;
  width: 15rem;
  border-radius: 10px;
  margin-top: 2rem;
  padding: 10px 20px;
  cursor: pointer;
  height: 4rem;
  font-size: 1.5rem;
  margin-left: 102rem;
  &:hover {
    color: ${COLORS.GREY[200]};
    background-color: ${COLORS.BLUE};
  }
`;
export default function CartList(props: any) {
  const navigate = useNavigate();
  const [cartId, setCartId] = useState(0);
  const { getCartlist, cartData } = useMypage();
  useEffect(() => {
    getCartlist();
  }, []);
  const filterValue =
    props.props === 3 ? "SALE" : props.props === 6 ? "RENTAL" : "";
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };
  const deleteCart = async (cartId: number) => {
    try {
      await deleteCarts(cartId);
      toastMsg("장바구니 목록에서 삭제 되었습니다! 👏");
    } catch (error) {
      console.log(error);
    }
  };
  const handleDeleteCart = async (cartId: number) => {
    try {
      await deleteCart(cartId);
      await getCartlist();
    } catch (error) {}
  };

  const description = text("descrip", "장바구니에서 제거하시겠습니까? ");

  let totalPrice = 0;
  cartData &&
    Array.isArray(cartData) &&
    cartData
      .filter((item) => item.status === filterValue)
      .forEach((e) => {
        totalPrice += e.price * e.count;
      });
  console.log("총액", totalPrice);

  const handleAllPurchase = () => {
    //나중에 뭐샀는지, 수량, 총결제액 구매페이지에 띄울거면 state로 전달
    navigate(PATH.PURCHASE, { state: { totalPrice: totalPrice } });
  };

  return (
    <>
      <Containers>
        {isDialogOpen && (
          <Dialog
            size={37}
            description={description}
            visible
            cancellable
            onCancel={() => {
              closeDialog();
            }}
            onConfirm={() => {
              handleDeleteCart(cartId);
              closeDialog();
            }}
          />
        )}
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
                <p>{data.count}개</p>
                <PurchaseButton
                  onClick={() => {
                    navigate(PATH.PURCHASE, {
                      state: { totalPrice: data.price * data.count },
                    });
                  }}
                >
                  구매하기
                </PurchaseButton>
                <DeleteButton
                  onClick={() => {
                    setCartId(data.cartItemId);
                    openDialog();
                  }}
                >
                  삭제하기
                </DeleteButton>
              </Box>
            ))}
        <Thinline />
        {!(
          cartData &&
          Array.isArray(cartData) &&
          cartData.filter((item) => item.status === filterValue).length === 0
        ) && <BuyButton onClick={handleAllPurchase}>결제하기</BuyButton>}
      </Containers>
    </>
  );
}
