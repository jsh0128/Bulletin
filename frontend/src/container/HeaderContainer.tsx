import Header from "components/common/Header";
import { useState } from "react";

const HeaderContainer = () => {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [checkPassword, setCheckPassword] = useState<string>("");

  const Login = () => {};
  return (
    <Header
      id={id}
      setId={setId}
      password={password}
      setPassword={setPassword}
      checkPassword={checkPassword}
      setCheckPassword={setCheckPassword}
    />
  );
};
export default HeaderContainer;
