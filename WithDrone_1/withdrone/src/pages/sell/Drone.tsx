import { Link } from "react-router-dom";
import * as P from "../../components/Product";
import { fetchProductList } from "../../api/product";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Pagination from "react-js-pagination";

interface Product {
  id: number;
  name: string;
  price: number;
  manufacturer: string;
  imagePath: string;
}

export default function Drone() {
  const [totalProduct, setTotalProduct] = useState(0);
  const [activePage, setActivePage] = useState<number>(1);

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
    fetchProductList().then(
      (fetchedData) => {
        setTotalProduct(fetchedData.numberOfElements); //해당 카테고리 개수 할당 위함
        console.log("totalProduct", totalProduct)
      }
    );
  }, []);

  useEffect(() => {
    fetchProductList(undefined, likeState, priceState, undefined, {page:activePage-1,size:8}).then(
      (fetchedData) => {
        setDroneLists(fetchedData.content);
      }
    );
  }, [like, price]);

  const handlePageChange = (pageNumber: number) => {
    setActivePage(pageNumber);
    // 해당 페이지를 로드하는 로직을 구현합니다.
    console.log("pageNumber", pageNumber)
    fetchProductList(undefined, likeState, priceState, undefined, {page:pageNumber-1,size:8}).then(
      (fetchedData) => {
        setDroneLists(fetchedData.content);
      }
    );
  };

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
      <P.PageNumberContainer>
          <Pagination
            activePage={activePage}
            itemsCountPerPage={8} // 페이지당 아이템 개수
            totalItemsCount={totalProduct} // 전체 아이템 개수
            pageRangeDisplayed={Math.ceil(totalProduct/8)} // 표시할 페이지 범위의 개수
            onChange={handlePageChange} // 페이지 변경 이벤트 핸들러
          />
      </P.PageNumberContainer>
    </P.Containers>
  );
}
