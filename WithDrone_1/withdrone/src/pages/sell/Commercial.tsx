import { useNavigate, Link } from "react-router-dom";
import * as P from "../../components/Product";
import droneList from "../../constants/droneList";

import noImg from "../../img/200.png";

export default function Commercial() {
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    navigate(path);
  };

  return (
    <P.Containers>
      <P.ProductContainer>
        {droneList
          .filter((product) => product.category === "상업용")
          .map((product, index) => (
            <Link
              to={`/detail/${product.keys}`}
              state={{ product: product }}
              style={{ width: "15%", height: "15%", margin: "2% 0% 5% 7%" }}
            >
              <P.Product>
                <P.ProductImgDiv>
                  <P.ProductImg src={product.image} alt={product.name} />
                </P.ProductImgDiv>
                <P.ProductTitle>{product.name}</P.ProductTitle>
                <P.ProductPrice>{product.price}</P.ProductPrice>
              </P.Product>
            </Link>
          ))}
      </P.ProductContainer>
    </P.Containers>
  );
}
