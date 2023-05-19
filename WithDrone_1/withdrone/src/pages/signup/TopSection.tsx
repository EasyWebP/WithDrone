import React from "react";
import * as S from "../../../src/pages/signup/index.styles";

export default function TopSection() {
  return (
    <>
      <S.LogoWrapper>
        <span>withdrone</span>
      </S.LogoWrapper>
      <S.PartTitleContainer>
        <S.Title>회원가입</S.Title>
        <S.PartTitle>계정을 만들고 다양한 드론을 만나보세요!! 🤗</S.PartTitle>
      </S.PartTitleContainer>
    </>
  );
}
