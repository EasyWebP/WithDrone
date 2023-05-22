import toastMsg from "../components/Toast";
import { authLogout } from "../api/auth";
import { useNavigate } from "react-router";
import PATH from "../constants/path";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchMe } from "../api/user";
import QUERYKEYS from "../constants/querykey";

export default function useLogout(): void {
  const navigate = useNavigate();

  authLogout().then(async (isLogout) => {
    console.log(isLogout);
    if (isLogout.result === "LOGOUT") {
      await localStorage.clear();
    }
  });
  toastMsg("로그아웃 되었습니다");
}
