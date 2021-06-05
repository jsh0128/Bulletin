import MainItem from "components/common/MainItem";
import { CategoryState } from "store/types/CategoryType";
import { PostState } from "store/types/PostType";
import styled from "styled-components";
import { SERVER } from "config/config.json";
interface MainProps {
  data: { res: PostState[] | PostState | null };
  category: CategoryState[] | null;
}

const Main = ({ data, category }: MainProps) => {
  return (
    <MainArea>
      <RightArea>
        <Right>
          <CategoriesStyle>
            <Category>전체보기</Category>
            {category &&
              category?.map((item, key) => (
                <Category key={key}>{item.category}</Category>
              ))}
          </CategoriesStyle>
          <SearchArea>
            <SearchInput placeholder="검색" />
          </SearchArea>
        </Right>
      </RightArea>
      <ItemsStyled>
        {Array.isArray(data?.res) &&
          data &&
          data?.res.map((item, key) => <MainItem key={key} data={item} />)}
      </ItemsStyled>
    </MainArea>
  );
};

const MainArea = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 1rem;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ItemsStyled = styled.div`
  display: flex;
  width: 80%;
  flex-wrap: wrap;
  @media screen and (max-width: 1200px) {
    width: 90%;
  }
  @media screen and (max-width: 750px) {
    width: 90%;
    justify-content: center;
  }
`;

const RightArea = styled.div`
  width: 20%;
  @media screen and (max-width: 1200px) {
    width: 80%;
  }
`;

const Right = styled.div`
  position: fixed;
  @media screen and (max-width: 1200px) {
    width: 100%;
    position: relative;
  }
`;

const CategoriesStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-end;
  border-right: 1px solid black;
  padding-right: 3rem;
  @media screen and (max-width: 1200px) {
    width: 100%;
    flex-direction: row;
    border: none;
    align-items: center;
    justify-content: space-between;
  }
  @media screen and (max-width: 1200px) {
    justify-content: center;
  }
`;

const Category = styled.span`
  margin-top: 0.3rem;
`;

const SelectedCategory = styled.span`
  margin-top: 0.3rem;
  font-weight: bold;
  font-size: 1.3rem;
`;

const SearchArea = styled.div`
  width: 100%;
  margin-top: 3rem;
  display: flex;
  @media screen and (max-width: 1200px) {
    align-items: center;
    justify-content: center;
    margin: 0.5rem 0rem;
  }
`;

const SearchInput = styled.input`
  height: 1.3rem;
  padding-left: 0.5rem;
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
  :focus {
    outline: none;
  }
  ::-webkit-input-placeholder {
    color: gray;
  }
`;

export default Main;
