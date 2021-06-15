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

  const { uploadData, uploadDataErr } = useSelector(
    (state: RootState) => state.UploadReducer
  );

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
    if (profileImg) {
      dispatch(uploadAsync.request({ files: profile }));
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
  }, [id, password, name, mailAuthCode, profile, profileImg]);

  // 로그인 데이터 통신 후
  const onLoginSuccess = useCallback(() => {
    setLoading(true);
    if (data.token) {
      localStorage.setItem("access_token", data.token);
      dispatch(getInfoAsync.request());
      setModal(false);
    } else if (loginErr) {
      loginErrorHandler(loginErr?.response.status);
    }
  }, [data, loginErr]);

  // 로그인 에러 처리
  const loginErrorHandler = (error) => {
    switch (error) {
      case 400:
        break;
      case 401:
        NotificationManager.error("id 또는 비밀번호가 다름.", "LOGIN", 1500);
        break;
      case 404:
        NotificationManager.error("사용자를 찾을 수 없음", "LOGIN", 1500);
        break;
      default:
        NotificationManager.error("서버 오류", "LOGIN", 1500);
        break;
    }
  };

  const registerErrorHandler = (error) => {
    if (error) {
      switch (error.response?.status) {
        case 400:
          NotificationManager.warning("메일 인증 안함", "회원가입 실패", 1500);
          return;
        case 409:
          NotificationManager.warning("중복된 회원", "회원가입 실패", 1500);
          return;
        default:
          NotificationManager.warning("회원가입 실패", "서버오류", 1500);
          return;
      }
    }
  };

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
    if (uploadData?.data.files) {
      dispatch(
        registerAsync.request({
          email: id,
          password: password,
          name: name,
          authCode: Number(mailAuthCode),
          profileImg: uploadData.data.files[0],
        })
      );
      setModal(false);
    } else if (uploadDataErr) {
      console.log(uploadDataErr);
    }
  }, [uploadData]);

  useEffect(() => {
    onLoginSuccess();
  }, [data, loginErr]);

  useEffect(() => {
    registerErrorHandler(registerErr);
  }, [registerErr]);

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
    if (mailRes) {
      NotificationManager.success("전송 성공", "Mail", 1500);
    } else if (mailSendErr) {
      NotificationManager.error("전송 실패", "Mail", 1500);
    }
  }, [mailSendErr, mailRes]);

  useEffect(() => {
    if (userData) NotificationManager.success("로그인 성공", "LOGIN", 1500);
    else if (mailRes) NotificationManager.success("전송 성공", "MAIL", 1500);
    else if (registerRes)
      NotificationManager.success("회원가입 성공", "REGISTER", 1500);
  }, [userData, mailRes, registerRes]);

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
