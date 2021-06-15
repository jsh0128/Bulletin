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
  const [profile, setProfile] = useState<File>();

  const { data, loginErr } = useSelector(
    (state: RootState) => state.LoginReducer
  );

  const { uploadData, uploadDataErr } = useSelector(
    (state: RootState) => state.UploadReducer
  );

  const { registerRes, registerErr } = useSelector(
    (state: RootState) => state.RegisterReducer
  );

  const { mailSendErr, mailRes } = useSelector(
    (state: RootState) => state.MailAuthReducer
  );

  const { userError, userData, loginCheck } = useSelector(
    (state: RootState) => state.GetInfoReducer
  );

  const dispatch = useDispatch();

  const onClickLogin = async () => {
    if (!id || !password) {
      NotificationManager.warning("빈칸이 있어", "채워", 1500);
    } else {
      dispatch(loginAsync.request({ email: id, pw: password }));
      setLoading(false);
    }
  };

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

  const onClickRegister = () => {
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
    }
    setModal(false);
  };

  const Login = useCallback(() => {
    setLoading(true);
    if (data.token && !loginErr) {
      localStorage.setItem("access_token", data.token);
      tryGetInfo();
      setModal(false);
    } else if (loginErr) {
      ErrorHandler(loginErr?.response.status);
    }
  }, [data, loginErr]);

  const ErrorHandler = (error) => {
    switch (error) {
      case 400:
        break;
      case 401:
        NotificationManager.error("id 또는 비밀번호가 다름.", "틀림!", 1500);
        break;
      case 404:
        NotificationManager.error("사용자를 찾을 수 없음", "틀림!", 1500);
        break;
      default:
        NotificationManager.error("서버 오류", "틀림!", 1500);
        break;
    }
  };

  // const onClickUpload = () => {
  //   dispatch
  // }

  const onClickMailCodeSend = () => {
    dispatch(
      mailAuthAsync.request({
        email: id,
      })
    );
  };

  const tryGetInfo = () => {
    dispatch(getInfoAsync.request());
  };

  const Logout = () => {
    localStorage.removeItem("access_token");
    dispatch(logout());
  };

  const InputReset = () => {
    setMailAuthCode("");
    setId("");
    setPassword("");
    setName("");
    setCheckPassword("");
  };

  const ChangeRegisterPage = () => {
    if (!id || !password || !name || !checkPassword) {
      NotificationManager.warning("빈칸이 있어", "채워줘!", 1500);
    } else if (password !== checkPassword) {
      NotificationManager.warning("비밀번호가 일치하지 않아", "틀림!", 1500);
    } else {
      setRegisterPage(true);
    }
  };

  useEffect(() => {
    if (uploadData) {
      console.log(uploadData.data.files);
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
  }, [uploadData, uploadDataErr]);

  useEffect(() => {
    Login();
  }, [data, loginErr]);

  useEffect(() => {
    if (registerRes) {
      NotificationManager.success("회원가입 성공", "채워줘", 1500);
    } else if (registerErr) {
      switch (registerErr.response?.status) {
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
  }, [registerRes, registerErr]);

  useEffect(() => {
    if (userError?.response.status === 500) {
    }
  }, [userError]);

  useEffect(() => {
    InputReset();
    modal === true
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
    setRegisterPage(false);
  }, [modal, selectedAuth]);

  useEffect(() => {}, [mailSendErr, mailRes]);

  useEffect(() => {
    setModal(false);
    if (localStorage.getItem("access_token")) {
      tryGetInfo();
    }
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
