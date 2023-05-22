/* eslint-disable no-nested-ternary */
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useInput from "./useInput";
import REGEX from "../constants/regex";
import { authSocialLogin, checkNicknameDuplicate } from "../api/auth";
import toastMsg from "../components/Toast";
import { patchMe } from "../api/user";
import QUERYKEYS from "../constants/querykey";
import PATH from "../constants/path";

export default function useSocialSignup() {
  const path = useLocation();
  const navigate = useNavigate();
  const { username, loginType, email } = path.state;
  const [nickname, onChangeNickname] = useInput("");
  const [isValidate, setIsValidate] = useState(true);
  const [code, setCode] = useInput("");
  const [match, setMatch] = useState(false);
  const [exist, setExist] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const queryClient = useQueryClient();

  const handleCheckboxChange = (event: {
    target: { checked: boolean | ((prevState: boolean) => boolean) };
  }) => {
    setIsChecked(event.target.checked);
  };
  useEffect(() => {
    setIsValidate(REGEX.PASSWORD.test(nickname));
  }, [nickname]);

  const checkNickname = async () => {
    const data = await checkNicknameDuplicate(nickname);

    if (!data.exists) {
      toastMsg("사용 가능한 닉네임 입니다.");
      setExist(!data.exists);
    } else {
      toastMsg("이미 존재하는 닉네임입니다.");
      setExist(!data.exists);
    }
  };

  const mutateSocialLogin = useMutation(["authSocialLogin"], authSocialLogin, {
    onSuccess: ({ memberInfo, tokenInfo }) => {
      toastMsg("회원가입 성공 👏");
      localStorage.setItem("accessToken", tokenInfo.accessToken);
      localStorage.setItem("created", "false");
      localStorage.setItem("memberId", memberInfo.id);
      queryClient.invalidateQueries([QUERYKEYS.LOAD_ME]);
      navigate(`${PATH.USER_MAIN}/${memberInfo.id}`);
    },
    onError: ({
      response: {
        data: { errorCode, message },
      },
    }) => {
      toastMsg(`${errorCode} / ${message}`);
    },
  });

  return {
    isValidate,
    email,
    code,
    setCode,
    username,
    nickname,
    onChangeNickname,
    checkNickname,
    match,
    setMatch,
    exist,
    setExist,
    isChecked,
    setIsChecked,
    handleCheckboxChange,
    mutateSocialLogin,
    loginType,
  };
}
