import { Link } from "react-router-dom";
import * as P from "../../components/Product";
import { fetchProductList } from "../../api/product";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

interface Product {
  id: number;
  name: string;
  price: number;
  manufacturer: string;
  imagePath: string;
}

export default function Drone() {
  // @ts-ignore
  const like = useSelector((state) => state.likeReducer.like);
  let likeState: any;
  // @ts-ignore
  const price = useSelector((state) => state.priceReducer.price);
  let priceState: any;

  if (like === false) likeState = undefined;
  else likeState = like;
  if (price === false) priceState = undefined;
  else priceState = price;

  const [droneLists, setDroneLists] = useState<Product[]>([]);

  useEffect(() => {
    fetchProductList(undefined, likeState, priceState).then((fetchedData) => {
      // console.log("1", fetchedData)
      setDroneLists(fetchedData.content);
    });
  }, [like, price]);

  return (
    <P.Containers>
      <P.ProductContainer>
        {droneLists.map((product: Product, index) => (
          <Link to={`/detail/${product.id}`}>
            <P.Product>
              <P.ProductImgDiv>
                <P.ProductImg src={product.imagePath} alt={product.name} />
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
