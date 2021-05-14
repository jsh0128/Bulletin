import styled from "styled-components";

const Register = () => {
  return (
    <>
      <Forms></Forms>
      <Img />
    </>
  );
};
export default Register;

const Forms = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  width: 50%;
`;

const Img = styled.div`
  height: 100%;
  width: 50%;
  background-color: black;
`;
