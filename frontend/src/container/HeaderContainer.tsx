import Header from "components/common/Header";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, register } from "store/actions/AuthAction";

const HeaderContainer = () => {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [checkPassword, setCheckPassword] = useState<string>("");
  const [modal, setModal] = useState<boolean>(false);
  const [selectedAuth, setSelectedAuth] = useState<boolean>(false);

  const result: any = useSelector((state) => state);
  const dispatch = useDispatch();

  const onClickLogin = async () => {
    dispatch(login(id, password));
  };

  const onClickRegister = () => {
    dispatch(register("jj030128@naver.com", "1234", "정성훈"));
  };

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
    />
  );
};
export default HeaderContainer;
