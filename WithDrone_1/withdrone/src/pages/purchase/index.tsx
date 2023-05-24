import React from "react";
import * as S from "./index.style";
import { text } from "@storybook/addon-knobs";

export default function Purchase() {
  const description = (
    <div style={{ fontWeight: "bold" }}>
      예금주: 함민혁 (withdrone) <br />
      계좌번호: 777502-04-170768
    </div>
  );
  const inputList = [
    {
      title: "구매자 정보",
      data: [
        { label: "이름", value: "22" },
        { label: "이메일", value: "22" },
      ],
    },
    {
      title: "배송지 등록",
      data: [
        { label: "휴대전화", value: "", type: "text" },
        { label: "배송지 주소", value: "" },
      ],
    },
    {
      title: "결제",
      data: [
        { label: "입금자명", value: "", type: "text" },
        {
          label: "계좌",
          value: description,
        },
      ],
    },
  ];
  return (
    <S.Container>
      <S.BoxWrapper>
        <h2>주문 / 결제</h2>
        <S.Line />
        {inputList.map((section, index) => (
          <S.Wrapper key={index}>
            <p>{section.title}</p>
            <S.Line />

            {section.data.map((item, itemIndex) => (
              <>
                <S.Box key={itemIndex}>
                  <S.Index>{item.label}</S.Index>
                  {item.value ? (
                    <S.Info>{item.value}</S.Info>
                  ) : (
                    <S.Input type={item.type}></S.Input>
                  )}
                </S.Box>
                <S.ThinLine />
              </>
            ))}
          </S.Wrapper>
        ))}
      </S.BoxWrapper>
      <S.PayButton>결제하기</S.PayButton>
    </S.Container>
  );
}
