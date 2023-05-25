import toastMsg from "../components/Toast";
import { authLogout } from "../api/auth";
import { useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import { fetchProduct, getLikeList } from "../api/product";
import { useEffect, useState } from "react";

interface LikeProps {
  content: {
    id: number;
    name: string;
    price: number;
    manufacturer: string;
    imagePath: string;
    status: string;
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
  const getLikelist = async () => {
    const data = await getLikeList();
    setLikeData(data);
  };

  return { handleLogout, getLikelist, likeData };
}
