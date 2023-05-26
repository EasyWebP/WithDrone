type IconProps = {
  [index: string]: string;
}; // key에 string으로 접근할 수 있도록 인덱스 선언

const ICONS: IconProps = {
  book: "bi bi-journals",
  heart: "bi bi-heart-fill",
  person: "bi bi-person",
  check: "bi bi-check-lg",
  cart: "bi bi-cart",
  zzim: "bi bi-heart",
  email: "bi bi-envelope",
  nick: "bi bi-person-badge",
  bag: "bi bi-cart",
};

export default ICONS;
