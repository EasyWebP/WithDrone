import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px black solid; */
  width: 20%;

  margin: 3% 1%;
  padding: 1%;

  box-shadow: -1px 6px 10px 0 rgba(80, 80, 80, 0.473);
`;

const ImgBox = styled.figure`
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const CardInfo = styled.div`
  width: 100%;
  padding-left: 20%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  font-size: 1.1em;
`;

export default function commercial(drone: any) {
  const { model, kind, company, image, spec } = drone;

  return (
    <Container>
      <ImgBox>
        <img src={image} />
      </ImgBox>
      <CardInfo>
        <span>제조사: {company}</span>
        <span>종류: {kind}</span>
        <span>모델명: {model}</span>
        <span>아키텍쳐: {spec.architecture}</span>
        <span>메모리: {spec.vram}</span>
      </CardInfo>
    </Container>
  );
}
