import styled from "styled-components";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import COLORS from "../../constants/color";
import ImgButton from "../../components/ImgButton";
import { loadMe } from "../../api/user";
import PATH from "../../constants/path";

const Container = styled.div`
  font-size: 1.4rem;
  text-align: center;
  color: ${COLORS.GREY[500]};
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 29%;
  border-top: 0.1rem solid ${COLORS.GREY[300]};
  padding-top: 3.5rem;
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 5rem;
  gap: 1.7rem;
  color: ${COLORS.GREY[300]};
  a {
    width: 4rem;
    height: 4rem;
    padding: 0;
  }
  padding-top: 0.8rem;
  flex-direction: column;
`;
const SNSIMG = styled(ImgButton)`
  border-radius: 5rem;
`;
const SNSWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;
const Label = styled.div`
  font-weight: 300;
  font-size: 1.3rem;
`;

interface IUserInfo {
  id: number;
  username: "string";
  nickname: "string";
  email: "string";
}
export default function SNSLogin() {
  const KAKAO_AUTH_URL = `http://ec2-43-201-28-128.ap-northeast-2.compute.amazonaws.com/oauth2/authorization/kakao?redirect_uri=http://localhost:3000/login`;
  const GOOGLE_AUTH_URL = `http://ec2-43-201-28-128.ap-northeast-2.compute.amazonaws.com/oauth2/authorization/google?redirect_uri=http://localhost:3000/login`;
  const navigate = useNavigate();

  useEffect(() => {
    // URL에서 인가 코드 값을 추출.
    const searchParams = new URLSearchParams(window.location.search);
    const authCode = searchParams.get("token");
    const authCreate = searchParams.get("created");
    const username = searchParams.get("username");
    const loginType = searchParams.get("loginType");
    const email = searchParams.get("email");

    if (typeof authCreate === "string") {
      if (authCreate === "false") {
        if (typeof authCode === "string") {
          localStorage.setItem("accessToken", authCode);
        }
        localStorage.setItem("created", authCreate);
      } else {
        navigate(PATH.SOCIAL, { state: { username, loginType, email } });
      }
    }
  }, []);
  useEffect(() => {
    if (
      localStorage.getItem("accessToken") &&
      localStorage.getItem("created")
    ) {
      loadMe().then((data: IUserInfo) => {
        if (data) {
          navigate(`/main/${data.id}`);
        }
      });
    }
  }, []);
  return (
    <Container>
      SNS로 간편하게 로그인
      <SNSWrapper>
        <ImgWrapper>
          <SNSIMG
            href={GOOGLE_AUTH_URL}
            size={5}
            ImgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/320px-Google_%22G%22_Logo.svg.png"
          />
          <Label>Google</Label>
        </ImgWrapper>
        <ImgWrapper>
          <SNSIMG
            href={KAKAO_AUTH_URL}
            size={5}
            ImgSrc="https://cdn.imweb.me/upload/S20210304872ba49a108a8/89a68d1e3674a.png"
          />
          <Label>Kakao</Label>
        </ImgWrapper>
      </SNSWrapper>
    </Container>
  );
}
