import React from "react";
import * as S from "./index.style";
import { useLocation, useNavigate } from "react-router-dom";
import PATH from "../../constants/path";

export default function PurchaseConfirm() {
  const navigate = useNavigate();
  const location = useLocation();
  const receivedData = location.state;
  

  const inputList = [
    { label: "받는사람", value: receivedData.memberName },
    { label: "연락처", value: receivedData.phoneNumber },
    {
      label: "받는주소",
      value: receivedData.address,
    },
  ];
  
  return (
    <S.Container>
      <S.BoxWrapper>
        <h2>주문 / 결제</h2>
        <S.Line />
        <h4>주문이 완료되었습니다!</h4>
        <p>주문상세</p>

        <S.OrderInfo>
          <S.Date>{receivedData.orderDate} 주문</S.Date>
          <S.OrderNum>주문번호 {receivedData.orderNumber}</S.OrderNum>
        </S.OrderInfo>
        <S.ReceiverInfo>
          <h4>받는사람 정보</h4>
          <S.Line />
          {inputList.map((item, index) => (
            <S.Box key={index}>
              <S.Index>{item.label}</S.Index>
              <S.Info>{item.value}</S.Info>
            </S.Box>
          ))}
        </S.ReceiverInfo>
        <S.ThinLine />
      </S.BoxWrapper>
      <S.PayButton onClick={()=>{navigate(PATH.RENT)}}>쇼핑하러가기</S.PayButton>
    </S.Container>
  );
}
