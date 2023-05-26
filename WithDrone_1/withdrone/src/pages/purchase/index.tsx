import React, { useEffect, useState } from "react";
import * as S from "./index.style";
import { text } from "@storybook/addon-knobs";
import { useLocation, useNavigate } from "react-router-dom";
import PATH from "../../constants/path";
import { loadMe } from "../../api/user";
import { makeOneOrder, makeCartOrder } from "../../api/order";


export default function Purchase() {
  const navigate = useNavigate();

  const description = (
    <div style={{ fontWeight: "bold" }}>
      예금주: 악덕사장 함민혁 (withdrone) <br />
      계좌번호: 777502-04-170768
    </div>
  );

  const [inputList, setInputList] = useState([
    {
      title: "구매자 정보",
      data: [
        { label: "이름", value: "" },
        { label: "이메일", value: "" },
      ],
    },
    {
      title: "배송지 등록",
      data: [
        { label: "휴대전화", value: "", type: "text" },
        { label: "배송지 주소", value: "" },
      ],
    },
    {
      title: "결제",
      data: [
        { label: "입금자명", value: "", type: "text" },
        {
          label: "계좌",
          value: description,
        },
      ],
    },
  ]);

  useEffect(()=>{
    loadMe()
      .then((fetchedData)=>{
        inputList[0].data[0].value = fetchedData.username;
        inputList[0].data[1].value = fetchedData.email;
        setInputList([...inputList]);
      })
  }, [])

  const location = useLocation();
  const receivedData = location.state;
  const count = Object.keys(receivedData).length;
  console.log("receivedData", receivedData)

  const orderInfo = {
    "phoneNumber": inputList[1].data[0].value,
    "address": inputList[1].data[1].value, 
    "count": receivedData.quantity,
  }

  console.log("orderInfo", orderInfo)

  const handlePurchaseClick = () => {  //order post 보내고 확정페이지로 
    if(count===1) { //장바구니
      makeCartOrder(orderInfo)
        .then((fetchedData)=>{
          console.log(fetchedData)
          navigate(PATH.PURCHASE_CONFIRM, {state:fetchedData})
        })
    } else { //개별구매
      const productId = receivedData.id;
      makeOneOrder(orderInfo, productId)
        .then((fetchedData)=>{
          console.log(fetchedData)
          navigate(PATH.PURCHASE_CONFIRM, {state:fetchedData})
        })
    }
  }

  const isInputFilled = () => {
    let isFill = true;
    inputList.forEach((e,i)=>{
      e.data.forEach((ee,ii)=> {
        console.log(ii, ee.value)
        if(ee.value === "") isFill=false;
      })
    })
    return isFill    
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, sectionIndex: number, itemIndex: number) => {
    isInputFilled();
    const newValue = event.target.value;

    setInputList((prevInputList) => {
      const updatedInputList = [...prevInputList];
      updatedInputList[sectionIndex].data[itemIndex].value = newValue;
      return updatedInputList;
    });
  }

  return (
    <S.Container>
      <S.BoxWrapper>
        <h2>주문 / 결제</h2>
        <S.Line />
        {inputList.map((section, index) => (
          <S.Wrapper key={index}>
            <p>{section.title}</p>
            <S.Line />

            {section.data.map((item, itemIndex) => (
              <>
                <S.Box key={itemIndex}>
                  <S.Index>{item.label}</S.Index>           
                  {item.value&&index===0 || index===2&&itemIndex===1 ? (
                    <S.Info>{item.value}</S.Info>
                  ) : ( 
                    <S.Input type={item.type} value={item.value as string} onChange={(event) => handleChange(event, index, itemIndex)}></S.Input>
                  )}
                </S.Box>
                <S.ThinLine />
              </>
            ))}
          </S.Wrapper>
        ))}
      </S.BoxWrapper>
      <S.PayButton
        onClick={handlePurchaseClick}
        disabled={!isInputFilled()}
      >
        결제하기
      </S.PayButton>
    </S.Container>
  );
}
