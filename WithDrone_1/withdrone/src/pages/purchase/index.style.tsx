import styled from "styled-components";
import COLORS from "../../constants/color";
import exp from "constants";

export const Container = styled.div`
  display: flex;
  height: 80rem;
  flex-direction: column;
  align-items: center;
  width: 100%;
  //border: 1px solid red;
  h2 {
    margin-top: 2rem;
    font-weight: bold;
  }
`;

export const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  //border: 1px solid red;
  padding: 20px;
  gap: 2rem;
  h2 {
  }
`;
export const Line = styled.div`
  width: 100%;
  color: grey;
  border: 1px solid grey;
`;
export const ThinLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: grey;
`;
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 3rem;
  p {
    font-weight: bold;
    margin-bottom: 1rem;
  }
`;

export const Box = styled.div`
  display: flex;
  //border: 1px solid blue;
`;

export const Index = styled.div`
  width: 14rem;
  //border: 1px solid red;
  text-align: right;
  padding: 1rem 1rem 1rem 0;
  background-color: ${COLORS.GREY[200]};
`;
export const Info = styled.div`
  //border: 1px solid red;
  padding: 1rem 1rem 1rem 1rem;
`;

export const Input = styled.input`
  //border: 1px solid red;
  border: none;
  &:hover {
    outline: none;
  }
  &:focus {
    outline: none;
  }
  padding: 1rem 1rem 1rem 1rem;
`;

export const PayButton = styled.button`
  position: absolute;
  background-color: #3583f7;
  width: 20rem;
  padding: 1.5rem 0 1.5rem 0;
  font-size: 1.8rem;
  font-weight: bold;
  color: white;
  border-radius: 10px;
  border: none;
  right: 0;
  bottom: 0;
  margin-right: 16.5rem;
  margin-bottom: 14rem;
  cursor: pointer;

  /* disabled 상태일 때의 스타일 */
  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
