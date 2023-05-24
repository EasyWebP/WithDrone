import React from "react";
import * as S from "./index.style";
import { text } from "@storybook/addon-knobs";

export default function PurchaseConfirm() {
  // const inputList = [
  //   { label: "받는 사람", value: data.name },
  //   { label: "연락처", value: data.number },
  //   { label: "받는 주소", value: data.address },
  // ];
  const inputList = [
    { label: "받는사람", value: "함민" },
    { label: "연락처", value: "010-3009-2255" },
    {
      label: "받는주소",
      value: "서울특별시 송파구 오금로 44길 21 상상프리 401호",
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
          <S.Date>2023.05.08 주문</S.Date>
          <S.OrderNum>주문번호 787833940</S.OrderNum>
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
      <S.PayButton>쇼핑하러가기</S.PayButton>
    </S.Container>
  );
}
