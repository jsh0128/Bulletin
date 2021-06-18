import ReactLoading from "react-loading";
import styled from "styled-components";
import { Center } from "../Basic/Basic";

const Loading = () => {
  return (
    <LoadingCenter>
      <LoadingCircle>
        <CustomLoading
          height={"90%"}
          width={"80%"}
          type="cubes"
          color="white"
        />
      </LoadingCircle>
    </LoadingCenter>
  );
};

const LoadingCenter = styled(Center)`
  height: calc(100vh - 2.5rem);
  width: 100%;
`;

const CustomLoading = styled(ReactLoading)`
  position: absolute;
  bottom: 80%;
`;

const LoadingCircle = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  border-radius: 1.5rem;
  width: 12rem;
  height: 4rem;
  background-color: #f0eeee;
`;

export default Loading;
