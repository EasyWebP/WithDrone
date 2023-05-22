type IconProps = {
  [index: string]: string;
}; // key에 string으로 접근할 수 있도록 인덱스 선언

const ICONS: IconProps = {
  book: "bi bi-journals",
  heart: "bi bi-heart-fill",
  person: "bi bi-person",
  check: "bi bi-check-lg",
};

export default ICONS;
