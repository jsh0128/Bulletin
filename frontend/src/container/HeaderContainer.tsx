import Header from "components/common/Header";
import { useCallback, useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { loginAsync, registerAsync } from "store/actions/UserAction";
import { RootState } from "store/reducers";

const HeaderContainer = () => {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [checkPassword, setCheckPassword] = useState<string>("");
  const [modal, setModal] = useState<boolean>(false);
  const [selectedAuth, setSelectedAuth] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const { data, error } = useSelector((state: RootState) => state.LoginReducer);
  const dispatch = useDispatch();

  const onClickLogin = async () => {
    dispatch(loginAsync.request({ email: id, pw: password }));
    setLoading(false);
  };

  const Login = useCallback(() => {
    setLoading(true);
    if (data.token && !error) {
      localStorage.setItem("access_token", data.token);
      setModal(false);
    } else if (error) {
      ErrorHandler(error);
    }
  }, [data, error]);

  const ErrorHandler = (error) => {
    console.log(error.response.status);
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
    dispatch(registerAsync.request("jj030128@naver.com", "1234", "정성훈"));
  };

  useEffect(() => {
    Login();
  }, [data, error]);

  useEffect(() => {
    modal === true
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [modal]);

  useEffect(() => {
    setModal(false);
  }, []);

  return (
    <Header
      id={id}
      setId={setId}
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
    />
  );
};
export default connect((state) => state)(HeaderContainer);
