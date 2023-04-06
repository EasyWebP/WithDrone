import { useNavigate } from "react-router-dom";
import * as P from "../../components/Product";
import drone from "../../img/drone1.jpeg";
import noImg from "../../img/200.png";

export default function Commercial() {
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    navigate(path);
  };

  const productList = [
    {
      title: "[DJI] Mavic 3 CINE Premium Combo 매빅 3 시네 프리미엄 콤보",
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
          <P.Product key={index} onClick={() => navigate("../Detail")}>
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
