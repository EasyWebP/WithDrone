import * as P from "../../components/Product";
import drone from "../../img/drone1.jpeg";
import noImg from "../../img/200.png";

export default function Commercial() {
  const productList = [
    {
      title: "나는 취미용",
      imgSrc: drone,
    },
    { title: "드론 2", imgSrc: noImg },
    { title: "드론 3", imgSrc: noImg },
    { title: "드론 4", imgSrc: noImg },
    { title: "드론 5", imgSrc: noImg },
    { title: "", imgSrc: noImg },
  ];

  return (
    <P.Containers>
      <P.ProductContainer>
        {productList.map((product, index) => (
          <P.Product key={index}>
            <P.ProductImgDiv>
              <P.ProductImg src={product.imgSrc} alt={product.title} />
            </P.ProductImgDiv>
            <P.ProductTitle>{product.title}</P.ProductTitle>
          </P.Product>
        ))}
      </P.ProductContainer>
    </P.Containers>
  );
}
