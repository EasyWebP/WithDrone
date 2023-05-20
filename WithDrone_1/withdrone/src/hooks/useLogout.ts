import toastMsg from "../components/Toast";
import { authLogout } from "../api/auth";
import { useNavigate } from "react-router";

export default function useLogout(): void {
  const navigate = useNavigate();

  authLogout().then((isLogout) => {
    console.log(isLogout);
    if (isLogout.result === "LOGOUT") {
      localStorage.clear();
    }
  });
  toastMsg("로그아웃 되었습니다");
  navigate(`/`);
}
