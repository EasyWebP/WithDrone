import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import useInput from "./useInput";
import REGEX from "../constants/regex";
import { authLogin, checkEmail } from "../api/auth";
import toastMsg from "../components/Toast";
import PATH from "../constants/path";
import useValidate from "./useValidate";

export default function useLogin() {
  const navigate = useNavigate();
  const [email, onChangeEmail, isValidateEmail] = useValidate({
    validator: (input: string) => REGEX.ID.test(input),
  });
  const [password, onChangePassword] = useInput("");
  const mutateLogin = useMutation(["login"], authLogin, {
    onSuccess: ({ memberInfo, tokenInfo }) => {
      toastMsg("로그인 성공 👏");
      localStorage.setItem("accessToken", tokenInfo.accessToken);
      localStorage.setItem("created", "true");
      localStorage.setItem("memberInfo", memberInfo.id);
      navigate(`/main/${memberInfo.id}`);
    },
    onError: ({
      response: {
        data: { errorCode, message },
      },
    }) => {
      toastMsg(`${errorCode} / ${message}`);
    },
  });

  const [landingEmail, onChangeLandingEmail] = useInput("");

  return {
    isValidateEmail,
    email,
    password,
    onChangeEmail,
    onChangePassword,
    mutateLogin,
    landingEmail,
    onChangeLandingEmail,
  };
}
