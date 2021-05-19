import Header from "components/common/Header";
import { useCallback, useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  getInfoAsync,
  loginAsync,
  logOut,
  // loginCheckFailure,
  // loginCheckSuccess,
  mailAuthAsync,
  registerAsync,
  USER_INFO_FAILURE,
  USER_INFO_SUCCESS,
} from "store/actions/UserAction";
import { RootState } from "store/reducers";

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
      console.log("빈칸이 있습니다. 채워주세요");
    } else {
      dispatch(loginAsync.request({ email: id, pw: password }));
      setLoading(false);
    }
  };

  const Login = useCallback(() => {
    console.log("token save localStorage");
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
    switch (error.response.status) {
      case 400:
        return;
      case 401:
        console.log("id 또는 비밀번호가 틀렸습니다.");
        return;
      case 404:
        console.log("user를 찾을 수 없습니다");
        return;
      default:
        console.log("서버 오류입니다");
    }
  };

  const onClickRegister = () => {
    if (!id || !password || !name || !checkPassword) {
      console.log("빈칸이 있습니다. 채워주세요");
    } else if (password !== checkPassword) {
      console.log("비밀번호가 일치하지 않습니다.");
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
    dispatch(getInfoAsync.request({}));
  };

  const Logout = () => {
    localStorage.removeItem("access_token");
    dispatch(logOut());
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
    console.log(registerRes);
    console.log(registerErr?.response.status);
  }, [registerRes, registerErr]);

  useEffect(() => {
    if (userError) {
      console.log(userError);
      dispatch(USER_INFO_FAILURE);
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
      console.log("메일 보내기 성공");
    } else {
      console.log("서버 에러");
    }
  }, [mailSendErr, mailRes]);

  useEffect(() => {
    setModal(false);
    if (localStorage.getItem("access_token")) {
      tryGetInfo();
      // dispatch(loginCheckSuccess());
    }
  }, []);

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  useEffect(() => {
    console.log(loginCheck);
  }, [userData, userError]);

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
    />
  );
};
export default connect((state) => state)(HeaderContainer);
