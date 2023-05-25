const BASE_URL = process.env.REACT_APP_BASE_URL;
const AUTH = "/auth/";
const MEMBER = "/member";
const LOGIN = "login";
const SIGNUP = "signup";
const CHECK_EMAIL = "email/exists/";
const EMAIL_SEND = "email/certificate";
const CODE = "email/check";
const NICK_DUPLICATE = "nickname/exists/";
const GOOGLE = "social_login/google";
const KAKAO = "social_login/kakao";
const ASSET = "asset";
const ITEM = "item";
const LOGOUT = "/logout";
const PRODUCT = "/products";
const CART = "/carts";
const ORDER = "/orders";

const API = {
  BASE_URL: `${BASE_URL}`,
  AUTH: `${AUTH}`,
  MEMBER: `${MEMBER}`,
  ASSET: `${ASSET}`,
  ITEM: `${ITEM}`,
  LOGIN: `${AUTH}${LOGIN}`,
  SIGNUP: `${AUTH}${SIGNUP}`,
  CHECK_EMAIL: `${AUTH}${CHECK_EMAIL}`,
  EMAIL_SEND: `${AUTH}${EMAIL_SEND}`,
  CODE: `${AUTH}${CODE}`,
  NICK_DUPLICATE: `${AUTH}${NICK_DUPLICATE}`,
  GOOGLE: `${AUTH}${GOOGLE}`,
  KAKAO: `${AUTH}${KAKAO}`,
  LOGOUT: `${LOGOUT}`,
  REISSUE: `${AUTH}reissue`,
  SOCIAL_LOGIN: `${AUTH}social-login`,
  PRODUCT: `${PRODUCT}`,
  LIKE: `${PRODUCT}/like`,
  CART: `${CART}`,
  ORDER: `${ORDER}`,
};

export default API;
