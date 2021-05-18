import Header from "components/common/Header";
import { useCallback, useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  getInfoAsync,
  loginAsync,
  mailAuthAsync,
  registerAsync,
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

  const { userError, loginCheck, userData } = useSelector(
    (state: RootState) => state.GetInfoReducer
  );

  const dispatch = useDispatch();

  const onClickLogin = async () => {
    if (!id || !password) {
      console.log("빈칸이 있습니다. 채워주세요");
    } else {
      dispatch(loginAsync.request({ email: id, pw: password }));
      tryGetInfo();
      setLoading(false);
    }
  };

  const Login = useCallback(() => {
    setLoading(true);
    if (data.token && !loginErr) {
      localStorage.setItem("access_token", data.token);
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

  useEffect(() => {
    Login();
  }, [data, loginErr]);

  useEffect(() => {
    console.log(registerRes);
    console.log(registerErr?.response.status);
  }, [registerRes, registerErr]);

  useEffect(() => {
    if (userError) console.log(userError);
  }, [userError]);

  useEffect(() => {
    setId("");
    setPassword("");
    setName("");
    modal === true
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [modal]);

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
    }
  }, []);

  useEffect(() => {
    console.log(userData);
  }, [userData]);

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
    />
  );
};
export default connect((state) => state)(HeaderContainer);
