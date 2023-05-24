const PATH = {
  LOGIN: "/login",
  SIGNUP: "/signup",
  MAIN: "/",
  SELL: "/sell",
  DETAIL: `/detail/:productId`,
  RENT: "/rent",
  INTRO: "/intro",
  MYPAGE: "/mypage",
  SOCIAL: "/social",
  USER_MAIN: "/main",
  PURCHASE: "/purchase",
  PURCHASE_CONFIRM: "/purchase/confirm",
} as const;

export default PATH;
