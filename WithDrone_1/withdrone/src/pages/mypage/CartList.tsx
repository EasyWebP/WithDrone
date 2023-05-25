import useMypage from "../../hooks/useMypage";
import styled from "styled-components";
export const Containers = styled.div`
  display: flex;
  height: 80rem;
  flex-direction: column;
  align-items: center;
  width: 100%;
  h1 {
    margin-right: 20rem;
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 0.8rem;
  }
`;
export default function OrderList(props: any) {
  console.log(props.props);
  const { getLikelist, likeData } = useMypage();
  const filterValue =
    props.props === 3 ? "SALE" : props.props === 6 ? "RENT" : "";
  console.log(filterValue);

  return <>기다려 준비중이야</>;
}
