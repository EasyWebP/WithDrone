import { useNavigate, Link } from "react-router-dom";
import * as P from "../../components/Product";
import drone1 from "../../img/drone1.jpeg";
import drone2 from "../../img/drone2.jpeg";
import drone3 from "../../img/drone3.jpeg";
import drone4 from "../../img/drone4.jpeg";

import noImg from "../../img/200.png";

export default function Commercial() {
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    navigate(path);
  };

  const droneList = [
    {
      keys: 1,
      name: "[DJI] Mavic 3 CINE Premium Combo 매빅 3 시네 프리미엄 콤보",
      price: 1000000,
      category: "상업용",
      isSell: true,
      companyName: "삼성",
      description:
        "[DJI] Mavic 3 CINE Premium Combo 매빅 3 시네 프리미엄 콤보[DJI] Mavic 3 CINE Premium Combo 매빅 3 시네 프리미엄 콤보[DJI] Mavic 3 CINE Premium Combo 매빅 3 시네 프리미엄 콤보",
      image: drone1,
    },
    {
      keys: 2,
      name: "I3PRO 4K 고성능 장애물 회피 드론 장시간 비행 옵티컬 플로우 포지셔닝 듀얼 카메라 드론",
      price: 2000000,
      category: "취미용",
      isSell: true,
      companyName: "LG",
      description:
        "I3PRO 4K 고성능 장애물 회피 드론 장시간 비행 옵티컬 플로우 포지셔닝 듀얼 카메라 드론I3PRO 4K 고성능 장애물 회피 드론 장시간 비행 옵티컬 플로우 포지셔닝 듀얼 카메라 드론",
      image: drone2,
    },
    {
      keys: 3,
      name: "HHSSL 4K 듀얼카메라 자동 장애 회피 접이식 입문용 드론 비행시간 30분",
      price: 3200000,
      category: "상업용",
      isSell: true,
      companyName: "Tesla",
      description:
        "HHSSL 4K 듀얼카메라 자동 장애 회피 접이식 입문용 드론 비행시간 30분HHSSL 4K 듀얼카메라 자동 장애 회피 접이식 입문용 드론 비행시간 30분HHSSL 4K 듀얼카메라 자동 장애 회피 접이식 입문용 드론 비행시간 30분",
      image: drone3,
    },
  ];

  return (
    <P.Containers>
      <P.ProductContainer>
        {droneList.map((product, index) => (
            <Link 
              to={`/detail/${product.keys}`} 
              state={{product:product}} 
              style={{ width:"15%", height:"15%", margin:"2% 0% 5% 7%" }}
            >
              <P.Product>
                <P.ProductImgDiv>
                  <P.ProductImg src={product.image} alt={product.name} />
                </P.ProductImgDiv>
                <P.ProductTitle>{product.name}</P.ProductTitle>
              </P.Product>
            </Link>
        ))}
      </P.ProductContainer>
    </P.Containers>
  );
}
