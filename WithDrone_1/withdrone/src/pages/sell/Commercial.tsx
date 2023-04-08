import { Link } from "react-router-dom";
import * as P from "../../components/Product";
import droneList from "../../constants/droneList";

export default function Commercial() {
  return (
    <P.Containers>
      <P.ProductContainer>
        {/* Show drones filtered by category(commercial) */}
        {droneList
          .filter((product) => product.category === "상업용")
          .map((product, index) => (
            // Use 'Link' to show product's detail page with 'project' object as state
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
