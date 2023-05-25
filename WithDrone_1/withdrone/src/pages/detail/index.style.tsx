import styled from "styled-components";
import COLORS from "../../constants/color";
import IconButton from "../../components/IconButton";

export const Containers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 30rem;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 5rem;
  width: 85%;
  //border: 1px solid red;
`;

export const SaleImage = styled.img`
  width: 47%;
  height: 40.5rem;
  margin-right: 2rem;
  border: 1px solid ${COLORS.GREY[400]};
  border-radius: 5px;
`;
export const RentImage = styled.img`
  width: 47%;
  height: 34rem;
  margin-right: 2rem;
  border: 1px solid ${COLORS.GREY[400]};
  border-radius: 5px;
`;

export const RightContainer = styled.div`
  width: 42%;
  display: flex;
  flex-direction: column;
`;

export const Button1 = styled.button`
  margin-right: 3.7rem;
  height: 5rem;
`;

export const BuyContainer = styled.div`
  display: flex;
  margin-right: 3.7rem;
  margin-top: 2rem;
  height: 5rem;
`;

export const BuyButton = styled.button`
  flex: 1;
  margin-right: 3rem;
  background-color: #3583f7;
  color: white;
  border: none;
  border-radius: 4rem;
  padding: 10px 20px;
  cursor: pointer;
  height: 5rem;
  font-size: 2rem;
  &:hover {
    color: ${COLORS.GREY[200]};
    background-color: ${COLORS.BLUE};
  }
`;

///////

export const InputContainer = styled.div`
  display: flex;
  margin-right: 3.7rem;
  height: 5rem;
  flex: 0 0;
  border: 2px solid rgba(0, 0, 0, 0.25);
`;

export const NumberInput = styled.input`
  height: 4.6rem; //
  padding-right: 0;
  width: 7rem;
  text-align: center;
  font-size: 2rem;
  box-sizing: border-box;
  border: none;
`;

export const InputButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 4rem;
  height: 100%;

  & button {
    width: 100%;
    height: 50%;
    // border: none;
    background-color: rgba(0, 0, 0, 0.02);
    cursor: pointer;
    outline: none;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #e0e0e0;
    }
  }
`;

export const IncrementButton = styled.button`
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  border-left: 1px solid rgba(0, 0, 0, 0.3);
  font-size: 0.1rem;
`;

export const DecrementButton = styled.button`
  border: none;
  border-left: 1px solid rgba(0, 0, 0, 0.3);
  font-size: 0.1rem;
`;

//////

export const Excontainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  // height: 32rem;
  justify-self: flex-start;
  width: 87%;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 5px;
`;

export const Title = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 2.5rem;
  color: #000000;
`;

export const Explain = styled.table`
  margin-top: 4rem;
  border: none;
  border-spacing: 0 2rem;
`;

export const Tr = styled.tr``;

export const Td = styled.td`
  width: 2.4rem;
  vertical-align: top;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  margin-right: 6rem;
  font-size: 1.7rem;
`;

export const Td2 = styled.td`
  width: 1.5rem;
  vertical-align: top;
  white-space: pre-line;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1.7rem;
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  margin-top: 5rem;
  width: 77%;
  //border: 1px solid red;
`;

export const DetailTitle = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 2rem;
  color: #000000;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

export const BottomImage = styled.img`
  width: 100%;
  // height: 40rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 2rem;
  gap: 2.4rem;
`;

export const ZzimButton = styled(IconButton)`
  padding: 1rem 2rem 1rem 2rem;
  border: 1px solid black;
  font-size: 14px;
  border-radius: 20px;
  color: black;
`;
export const AlreadyZzimButton = styled(IconButton)`
  padding: 1rem 2rem 1rem 2rem;
  border: 1px solid black;
  font-size: 14px;
  border-radius: 20px;
  color: black;
`;

export const CartButton = styled(IconButton)`
  padding: 1rem 2rem 1rem 2rem;
  border: 1px solid black;
  border-radius: 20px;
  font-size: 14px;
  color: black;
`;
export const RentButton = styled.button`
  background-color: #3583f7;
  color: white;
  border: none;
  width: 16rem;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    color: ${COLORS.GREY[200]};
    background-color: ${COLORS.BLUE};
  }
`;
