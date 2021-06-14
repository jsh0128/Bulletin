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

const HeaderContainer = () => {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [checkPassword, setCheckPassword] = useState<string>("");
  const [modal, setModal] = useState<boolean>(false);
  const [selectedAuth, setSelectedAuth] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [name, setName] = useState<string>("");
  const [mailAuthCode, setMailAuthCode] = useState<string>("");

  const { data, loginErr } = useSelector(
    (state: RootState) => state.LoginReducer
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

  const onClickRegister = () => {
    if (!id || !password || !name || !checkPassword) {
      NotificationManager.warning("빈칸이 있어", "채워줘!", 1500);
    } else if (password !== checkPassword) {
      NotificationManager.warning("비밀번호가 일치하지 않아", "틀림!", 1500);
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
  };

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
    setId("");
    setPassword("");
    setName("");
    setCheckPassword("");
  };

  useEffect(() => {
    Login();
  }, [data, loginErr]);

  useEffect(() => {
    // console.log(registerRes);
    // console.log(registerErr?.response.status);
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
  }, [modal, selectedAuth]);

  useEffect(() => {
    if (mailRes === 200) {
      NotificationManager.success("메일 전송", "전송성공", 1500);
    } else if (mailSendErr) {
      NotificationManager.error("서버 에러", "에러", 1500);
    }
  }, [mailSendErr, mailRes]);

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
    />
  );
};
export default connect((state) => state)(HeaderContainer);
