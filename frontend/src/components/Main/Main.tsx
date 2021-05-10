import MainItem from "components/common/MainItem";
import styled from "styled-components";
interface MainProps {}

const Main = ({}: MainProps) => {
  const a = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <MainArea>
      <ItemsStyled>
        {a.map(() => (
          <MainItem
            title="테스트"
            introduction="이거는 테스트이거는 테스트이거는 테스트이거는 테스트이거는 테스트이거는 테스트이거는 테스트이거는 테스트"
            writer="123123"
          />
        ))}
      </ItemsStyled>
    </MainArea>
  );
};

const MainArea = styled.div`
  display: flex;
  width: 100%;
`;

const ItemsStyled = styled.div`
  display: flex;
  width: 70%;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default Main;
