import styled from "styled-components";
import COLORS from "../../constants/color";
import React, { useEffect, useState } from "react";
import useMypage from "../../hooks/useMypage";
import { text } from "@storybook/addon-knobs";
import Dialog from "../../components/Dialog";
import PATH from "../../constants/path";

export const Containers = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 40rem;
  height: auto;
  align-items: center;
  width: 100%;
  position: relative;
  h1 {
    margin-right: 20rem;
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 0.8rem;
  }
`;
export const Box = styled.div`
  display: flex;
  //border: 1px solid red;
  width: 100%;
  align-items: center;
  gap: 8rem;
  position: relative;
  margin-top: 1rem;

  h4 {
    //border: 1px solid red;
    width: 23rem;
    font-weight: bold;
  }
  p {
    width: 10rem;
    font-weight: bold;
  }
`;
export const ProductImg = styled.img`
  width: 20rem;
  height: 15rem;
`;
export const Line = styled.div`
  width: 100%;
  color: grey;
  border: 1px solid grey;
`;
export const DeleteButton = styled.button`
  width: 10rem;
  border: none;
  background-color: transparent;
  height: 4rem;
  cursor: pointer;
  position: absolute;
  right: 0;
  margin-left: 14rem;
  &:hover {
    background-color: ${COLORS.BLUE};
  }
`;

export default function LikeList(props: any) {
  console.log(props.props);
  const { getLikelist, likeData, mutateDeleteLike } = useMypage();
  const filterValue =
    props.props === 2 ? "SALE" : props.props === 5 ? "RENT" : "";
  console.log(filterValue);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [id, setId] = useState(0);
  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };
  const description = text("description", "찜 목록에서 제거하시겠습니까? ");
  useEffect(() => {
    getLikelist();
  }, [likeData]);

  console.log("likeData", likeData?.content);

  return (
    <>
      <Containers>
        {isDialogOpen && (
          <Dialog
            size={37}
            description={description}
            visible
            cancellable
            onCancel={() => {
              closeDialog();
            }}
            onConfirm={() => {
              mutateDeleteLike.mutate({ productId: id });
              closeDialog();
            }}
          />
        )}
        <Line />
        {likeData?.content
          .filter((item) => item.status === filterValue)
          .map((data, index) => (
            <Box key={index}>
              <ProductImg src={data.imagePath} />
              <h4>{data.name}</h4>
              <p>{data.price}원</p>
              <p>{data.manufacturer}</p>

              <DeleteButton
                onClick={() => {
                  setId(data.id);
                  openDialog();
                }}
              >
                삭제하기
              </DeleteButton>
            </Box>
          ))}
      </Containers>
    </>
  );
}
