import toastMsg from "../components/Toast";
import { authLogout } from "../api/auth";
import { useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import { fetchProduct, getLikeList } from "../api/product";
import { useState } from "react";

interface LikeProps {
  content: {
    id: number;
    name: string;
    price: number;
    manufacturer: string;
    imagePath: string; // imagePath의 타입을 string으로 수정
  }[];
}
export default function useMypage() {
  const navigate = useNavigate();
  const [likeData, setLikeData] = useState<LikeProps>();

  const handleLogout = () => {
    authLogout().then((isLogout) => {
      console.log(isLogout);
      if (isLogout.result === "LOGOUT") {
        localStorage.clear();
        navigate(`/`);
      }
    });

    toastMsg("로그아웃");
  };
  const mutateLikeList = useMutation(["getLikeList"], getLikeList, {
    onSuccess: (data) => {
      console.log("dataewjfiowjeofjweof", data);
      setLikeData(data);
    },
    onError: ({
      response: {
        data: { errorCode, message },
      },
    }) => {},
  });
  const getLikelist = async () => {
    const data = await getLikeList();
    setLikeData(data);
  };

  return { handleLogout, mutateLikeList, getLikelist, likeData };
}
