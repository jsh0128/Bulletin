import Header from "components/common/Header";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "store/actions";

const HeaderContainer = () => {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [checkPassword, setCheckPassword] = useState<string>("");

  const dispatch = useDispatch();

  const onClickLogin = () => {
    console.log("1234234");
    dispatch(login());
  };

  useEffect(() => {}, []);

  return (
    <Header
      id={id}
      setId={setId}
      password={password}
      setPassword={setPassword}
      checkPassword={checkPassword}
      setCheckPassword={setCheckPassword}
      onClickLogin={onClickLogin}
    />
  );
};
export default HeaderContainer;
