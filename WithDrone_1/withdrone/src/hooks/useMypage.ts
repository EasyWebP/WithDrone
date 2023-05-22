import toastMsg from "../components/Toast";
import { authLogout } from "../api/auth";
import { useNavigate } from "react-router";

export default function useMypage() {
  const navigate = useNavigate();
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

  return { handleLogout };
}
