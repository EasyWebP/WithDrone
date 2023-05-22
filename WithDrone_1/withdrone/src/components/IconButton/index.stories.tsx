import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import IconButton from "./index";

export default {
  title: "components|basic/IconButton", // 스토리북에서 보여질 그룹과 경로를 명시
  component: IconButton, // 어떤 컴포넌트를 문서화 할지 명시
  decorators: [withKnobs], // 애드온 적용
};

export function Normal() {
  return (
    <IconButton
      title="함민혁"
      theme="normal"
      iconName="book"
      widthSize={6.0625}
      iconSize="1.1rem"
    />
  );
}
export function Reverse() {
  return (
    <IconButton reverseIconButton title="작성" theme="normal" iconName="book" />
  );
}
export function heart() {
  return (
    <IconButton
      title="목록 모아보기 ❯"
      theme="normal"
      iconName="heart"
      iconSize="0.8rem"
      color={"red"}
    />
  );
}
export function popular() {
  return (
    <IconButton
      title="인기순"
      theme="normal"
      iconName="check"
      iconSize="0.8rem"
    />
  );
}
export function newest() {
  return (
    <IconButton
      title="최신순"
      theme="normal"
      iconName="check"
      iconSize="0.8rem"
    />
  );
}
export function OnlyBook() {
  return <IconButton iconOnly iconName="book" />;
}
