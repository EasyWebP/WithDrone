import { useNavigate } from "react-router-dom";
import * as P from "../../components/Product";
import { fetchProductList } from "../../api/product";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Pagination from "react-js-pagination";
import PAGENUM from "../../constants/PageNumber";
import PATH from "../../constants/path";

interface Product {
  id: number;
  name: string;
  price: number;
  manufacturer: string;
  imagePath: string;
}

export default function Hobby() {
  const [totalProduct, setTotalProduct] = useState(0);
  const [activePage, setActivePage] = useState<number>(1);
  const navigate = useNavigate();

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
    fetchProductList("취미용", undefined, undefined, "RENTAL").then(
      (fetchedData) => {
        setTotalProduct(fetchedData.numberOfElements); //해당 카테고리 개수 할당 위함
      }
    );
  }, []);

  useEffect(() => {
    fetchProductList("취미용", likeState, priceState, "RENTAL", {
      page: activePage - 1,
      size: PAGENUM,
    }).then((fetchedData) => {
      setDroneLists(fetchedData.content);
    });
  }, [like, price]);

  const handlePageChange = (pageNumber: number) => {
    setActivePage(pageNumber);
    fetchProductList("취미용", likeState, priceState, "RENTAL", {
      page: pageNumber - 1,
      size: PAGENUM,
    }).then((fetchedData) => {
      setDroneLists(fetchedData.content);
    });
  };

  return (
    <P.Containers>
      <P.ProductContainer>
        {droneLists.map((product: Product, index) => (
          <P.Product
            onClick={() => {
              navigate(PATH.DETAIL, { state: product.id });
            }}
          >
            <P.ProductImgDiv>
              <P.ProductImg src={product.imagePath} alt={product.name} />
            </P.ProductImgDiv>
            <P.ProductTitle>{product.name}</P.ProductTitle>
          </P.Product>
        ))}
      </P.ProductContainer>
      <P.PageNumberContainer>
        <Pagination
          activePage={activePage}
          itemsCountPerPage={PAGENUM} // 페이지당 아이템 개수
          totalItemsCount={totalProduct} // 전체 아이템 개수
          pageRangeDisplayed={Math.ceil(totalProduct / PAGENUM)} // 표시할 페이지 범위의 개수
          onChange={handlePageChange} // 페이지 변경 이벤트 핸들러
        />
      </P.PageNumberContainer>
    </P.Containers>
  );
}
