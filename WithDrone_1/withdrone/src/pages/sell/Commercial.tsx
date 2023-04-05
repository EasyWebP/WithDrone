import React from "react";
import styled from "styled-components";

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
  return (
    <Containers>
      <ProductContainer>
        <div className="product">
          <div className="product_img_div">
            <img src={require("../../img/drone.png")} className="product_img" />
          </div>
          <p className="product_title">
            [DJI] Mavic 3 CINE Premium Combo 매빅 3 시네 프리미엄 콤보
          </p>
        </div>

        <div className="product">
          <div className="product_img_div">
            <img src={require("../../img/drone.png")} className="product_img" />
          </div>
          <p className="product_title">드론 2</p>
        </div>

        <div className="product">
          <div className="product_img_div">
            <img src={require("../../img/drone.png")} className="product_img" />
          </div>
          <p className="product_title">드론 3</p>
        </div>

        <div className="product">
          <div className="product_img_div">
            <img src={require("../../img/drone.png")} className="product_img" />
          </div>
          <p className="product_title">드론 4</p>
        </div>

        <div className="product">
          <div className="product_img_div">
            <img src={require("../../img/drone.png")} className="product_img" />
          </div>
          <p className="product_title">드론 5</p>
        </div>

        <div className="product">
          <div className="product_img_div">
            <img src={require("../../img/drone.png")} className="product_img" />
          </div>
          <p className="product_title">드론 6</p>
        </div>
      </ProductContainer>
    </Containers>
  );
}
