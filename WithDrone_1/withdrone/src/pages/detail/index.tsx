import React, { ChangeEvent, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { fetchProduct } from "../../api/product";
import useDetail from "../../hooks/useDetail";
import * as S from "./index.style";
import { text } from "@storybook/addon-knobs";
import Dialog from "../../components/Dialog";
import PATH from "../../constants/path";

export default function Detail() {
  const {
    mutateLike,
    handleDecrease,
    handleIncrease,
    handleQuantityChange,
    setDetailData,
    detailData,
    productId,
    quantity,
    like,
    payload,
    getDetailData,
    addToCart,
    setLike,
  } = useDetail();

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [num, setNum] = useState(3);

  useEffect(() => {
    getDetailData();
  }, []);

  useEffect(() => {
    setLike(detailData?.liked);
    if (detailData?.status === "RENTAL") {
      setNum(6);
    }
  }, [detailData]);

  if (!detailData) {
    return null;
  }

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const description = text(
    "description",
    "상품이 장바구니에 담겼습니다. \n 쇼핑을 계속하시겠습니까? "
  );

  const handlePurchase = () => {
    //나중에 뭐샀는지, 수량, 총결제액 구매페이지에 띄울거면 state로 전달
    const data = {
      name: detailData.name,
      price: detailData.price,
      quantity: quantity,
      id: detailData.id,
    }
    navigate(PATH.PURCHASE, { state: data });
  }

  return (
    <S.Containers>
      {isDialogOpen && (
        <Dialog
          size={37}
          description={description}
          visible
          cancellable
          onCancel={() => {
            navigate(PATH.MYPAGE, { state: num });
          }}
          onConfirm={() => {
            closeDialog();
          }}
        />
      )}

      {detailData?.status === "SALE" ? (
        <S.FlexContainer>
          <S.SaleImage src={detailData.imagePath} />
          <S.RightContainer>
            <S.Excontainer>
              <S.Title>{detailData.name}</S.Title>
              <S.Explain>
                <S.Tr>
                  <S.Td>판매가</S.Td>
                  <S.Td2>{detailData.price}</S.Td2>
                </S.Tr>
                <S.Tr>
                  <S.Td>제조사</S.Td>
                  <S.Td2>{detailData.manufacturer}</S.Td2>
                </S.Tr>
                <S.Tr>
                  <S.Td>배송비</S.Td>
                  <S.Td2>3000원</S.Td2>
                </S.Tr>
              </S.Explain>
            </S.Excontainer>
            <S.ButtonContainer>
              {like ? (
                <S.AlreadyZzimButton
                  iconName="heart"
                  theme="basic"
                  title="찜 하기"
                  color="red"
                  iconSize="1rem"
                  onClick={() => {
                    mutateLike.mutate(payload);
                  }}
                />
              ) : (
                <S.ZzimButton
                  iconName="zzim"
                  theme="basic"
                  title="찜 하기"
                  color="black"
                  iconSize="1rem"
                  onClick={() => {
                    mutateLike.mutate(payload);
                  }}
                />
              )}

              <S.CartButton
                iconName="cart"
                theme="basic"
                title="장바구니 담기"
                iconSize="1.5rem"
                onClick={() => {
                  addToCart();
                  openDialog();
                }}
              />
            </S.ButtonContainer>
            <S.BuyContainer>
              <S.InputContainer>
                <S.NumberInput
                  type="number"
                  value={quantity}
                  onChange={handleQuantityChange}
                  placeholder="1"
                />
                <S.InputButtonContainer>
                  <S.IncrementButton onClick={handleIncrease}>
                    ᐱ
                  </S.IncrementButton>
                  <S.DecrementButton onClick={handleDecrease}>
                    ᐯ
                  </S.DecrementButton>
                </S.InputButtonContainer>
              </S.InputContainer>
              <S.BuyButton
                onClick={handlePurchase}
              >
                구매하기
              </S.BuyButton>
            </S.BuyContainer>
          </S.RightContainer>
        </S.FlexContainer>
      ) : (
        <S.FlexContainer>
          <S.RentImage src={detailData.imagePath} />
          <S.RightContainer>
            <S.Excontainer>
              <S.Title>{detailData.name}</S.Title>
              <S.Explain>
                <S.Tr>
                  <S.Td>판매가</S.Td>
                  <S.Td2>{detailData.price}</S.Td2>
                </S.Tr>
                <S.Tr>
                  <S.Td>제조사</S.Td>
                  <S.Td2>{detailData.shippingCompany}</S.Td2>
                </S.Tr>
                <S.Tr>
                  <S.Td>배송비</S.Td>
                  <S.Td2>3000원</S.Td2>
                </S.Tr>
              </S.Explain>
            </S.Excontainer>
            <S.ButtonContainer>
              <S.ZzimButton
                iconName="zzim"
                theme="basic"
                title="찜 하기"
                color="black"
                iconSize="1rem"
              />
              <S.CartButton
                iconName="cart"
                theme="basic"
                title="장바구니 담기"
                iconSize="1.5rem"
              />
              <S.RentButton>대여하기</S.RentButton>
            </S.ButtonContainer>
          </S.RightContainer>
        </S.FlexContainer>
      )}
      <S.BottomContainer>
        <S.Title>{detailData.name}</S.Title>
        <S.DetailTitle>제품 상세 정보</S.DetailTitle>
        <S.BottomImage src={detailData.detailImageUrl1} />
        <S.BottomImage src={detailData.detailImageUrl2} />
      </S.BottomContainer>
    </S.Containers>
  );
}
