import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Dialog from "./index";

export default {
  title: "components|basic/Dialog",
  component: Dialog,
  parameters: {
    docs: {
      inlineStories: false,
    },
  },
  decorators: [withKnobs], // 애드온 적용
};

export const dialog = () => {
  const description = text(
    "description",
    "상품이 장바구니에 담겼습니다. \n 쇼핑을 계속하시겠습니까?  "
  );

  return <Dialog size={37} description={description} visible cancellable />;
};
