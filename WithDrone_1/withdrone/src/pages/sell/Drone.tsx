import { Link } from "react-router-dom";
import * as P from "../../components/Product";
import droneList from "../../constants/droneList";

export default function Drone() {
  return (
    <P.Containers>
      <P.ProductContainer>
        {/* Show drones filtered by category(commercial) */}
        {droneList.map((product, index) => (
          // Use 'Link' to navigate url, hand over detail information to detail page.
          <Link to={`/detail/${product.keys}`} state={{ product: product }}>
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
