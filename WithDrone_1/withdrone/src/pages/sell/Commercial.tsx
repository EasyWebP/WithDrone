import React from "react";
import styled from "styled-components";
import drone from "../../img/drone.png";
import camera from "../../img/camera.png";

const Containers = styled.div`
  width: 100%;
  height: 100%;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;

  .product {
    width: 15%;
    height: 15%;
    margin-top: 2%;
    margin-bottom: 5%;
    margin-left: 7%;
    /* border: 1px solid black; */
  }
  .product_img_div {
    text-align: center;
  }
  .product_img {
    max-width: 95%;
    max-height: 100%;
  }
  .product_title {
    font-size: 2rem;
    font-weight: 600;
    margin: 4%;
  }
`;
export default function Commercial() {
  const productList = [
    {
      title: "[DJI] Mavic 3 CINE Premium Combo 매빅 3 시네 프리미엄 콤보",
      imgSrc: { drone },
    },
    { title: "드론 2", imgSrc: { drone } },
    { title: "드론 3", imgSrc: { camera } },
    { title: "드론 4", imgSrc: { drone } },
    { title: "드론 5", imgSrc: { drone } },
    { title: "드론 6", imgSrc: { drone } },
  ];

  return (
    <Containers>
      <ProductContainer>
        {productList.map((product, index) => (
          <div className="product" key={index}>
            <div className="product_img_div">
              <img
                src={
                  typeof product.imgSrc === "string"
                    ? product.imgSrc
                    : product.imgSrc.drone || product.imgSrc.camera
                  // 더 간략하게는 안될까?
                }
                className="product_img"
              />
            </div>
            <p className="product_title">{product.title}</p>
          </div>
        ))}
      </ProductContainer>
    </Containers>
  );
}
