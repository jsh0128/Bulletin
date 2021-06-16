import Header from "components/common/Header";
import { useCallback, useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  getInfoAsync,
  loginAsync,
  logout,
  mailAuthAsync,
  registerAsync,
} from "store/actions/UserAction";
import { RootState } from "store/reducers";
import { NotificationManager } from "react-notifications";
import { uploadAsync } from "store/actions/UploadAction";

const HeaderContainer = () => {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [checkPassword, setCheckPassword] = useState<string>("");
  const [modal, setModal] = useState<boolean>(false);
  const [selectedAuth, setSelectedAuth] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [name, setName] = useState<string>("");
  const [mailAuthCode, setMailAuthCode] = useState<string>("");
  const [registerPage, setRegisterPage] = useState<boolean>(false);
  const [profileImg, setProfileImg] = useState<string | ArrayBuffer | null>();
  const [profile, setProfile] = useState<File | null>();
  const [uploadHeader, setUploadHeader] = useState<boolean>(false);

  const {
    data,
    loginErr,
    registerRes,
    registerErr,
    mailSendErr,
    mailRes,
    userError,
    userData,
    loginCheck,
  } = useSelector((state: RootState) => state.userReducer);

  const { uploadData } = useSelector((state: RootState) => state.UploadReducer);

  const dispatch = useDispatch();

  // 로그인 함수
  const onClickLogin = async () => {
    if (!id || !password) {
      NotificationManager.warning("빈칸이 있어", "채워", 1500);
    } else {
      dispatch(loginAsync.request({ email: id, pw: password }));
      setLoading(false);
    }
  };

  // 이미지 state에 없로드
  const onClickImgUpload = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      let reader = new FileReader();
      if (e.target.files && e.target.files.length) {
        let file = e.target.files[0];
        setProfile(file);
        reader.onloadend = () => {
          setProfileImg(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        setProfileImg("");
      }
    },
    [profile, setProfile, setProfileImg, profileImg]
  );

  // 회원가입
  const onClickRegister = useCallback(() => {
    if (profileImg && profile) {
      console.log("onClickRegister");
      dispatch(uploadAsync.request({ files: profile }));
      setUploadHeader(true);
    } else {
      dispatch(
        registerAsync.request({
          email: id,
          password: password,
          name: name,
          authCode: Number(mailAuthCode),
        })
      );
      setModal(false);
    }
  }, [id, password, name, mailAuthCode, profile, profileImg, setUploadHeader]);

  // 로그인 데이터 통신 후
  const onLoginSuccess = useCallback(() => {
    setLoading(true);
    if (data.token) {
      localStorage.setItem("access_token", data.token);
      dispatch(getInfoAsync.request());
      setModal(false);
    }
  }, [data]);

  // 로그인 에러 처리

  // 메일 인증코드 보내기
  const onClickMailCodeSend = () => {
    dispatch(
      mailAuthAsync.request({
        email: id,
      })
    );
  };

  // 로그아웃
  const Logout = () => {
    localStorage.removeItem("access_token");
    dispatch(logout());
  };

  // input Reset
  const InputReset = () => {
    setMailAuthCode("");
    setId("");
    setPassword("");
    setName("");
    setCheckPassword("");
    setProfile(null);
    setProfileImg(null);
  };

  // state로 회원가입 페이지 변경
  const ChangeRegisterPage = () => {
    if (!id || !password || !name || !checkPassword) {
      NotificationManager.warning("빈칸이 있어", "REGISTER", 1500);
    } else if (password !== checkPassword) {
      NotificationManager.warning("비밀번호가 일치하지 않아", "REGISTER", 1500);
    } else if (password.length < 8) {
      NotificationManager.warning("비밀번호는 8자리 이상", "REGISTER", 1500);
    } else {
      setRegisterPage(true);
    }
  };

  // 데이터 보내기
  useEffect(() => {
    if (uploadData?.data.files && uploadHeader) {
      dispatch(
        registerAsync.request({
          email: id,
          password: password,
          name: name,
          authCode: Number(mailAuthCode),
          profileImg: uploadData.data.files[0],
        })
      );
      setUploadHeader(false);
      setModal(false);
    }
  }, [uploadData]);

  useEffect(() => {
    onLoginSuccess();
  }, [data, loginErr]);

  useEffect(() => {
    if (userError?.response.status === 500) {
      Logout();
    }
  }, [userError]);

  useEffect(() => {
    modal === true
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
    setRegisterPage(false);
    InputReset();
  }, [modal, selectedAuth]);

  useEffect(() => {
    console.log("");
  }, []);

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      dispatch(getInfoAsync.request());
    }
    setModal(false);
  }, []);

  return (
    <Header
      id={id}
      setId={setId}
      name={name}
      setName={setName}
      password={password}
      setPassword={setPassword}
      checkPassword={checkPassword}
      setCheckPassword={setCheckPassword}
      onClickLogin={onClickLogin}
      onClickRegister={onClickRegister}
      modal={modal}
      setModal={setModal}
      selectedAuth={selectedAuth}
      setSelectedAuth={setSelectedAuth}
      loading={loading}
      mailAuthCode={mailAuthCode}
      setMailAuthCode={setMailAuthCode}
      onClickMailCodeSend={onClickMailCodeSend}
      loginCheck={loginCheck}
      Logout={Logout}
      userData={userData}
      registerPage={registerPage}
      setRegisterPage={setRegisterPage}
      profileImg={profileImg}
      onClickImgUpload={onClickImgUpload}
      ChangeRegisterPage={ChangeRegisterPage}
    />
  );
};
export default connect((state) => state)(HeaderContainer);
