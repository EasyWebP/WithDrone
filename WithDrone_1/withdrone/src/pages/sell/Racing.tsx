import { Link } from "react-router-dom";
import * as P from "../../components/Product";
import { fetchProductList } from "../../api/product";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  manufacturer: string;
  imagePath: string;
}

export default function Racing() {
  const [droneLists, setDroneLists] = useState<Product[]>([])
  useEffect(() => {
    fetchProductList("경기용").then((fetchedData) => {
      setDroneLists(fetchedData.content);
    });
  }, []);

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
