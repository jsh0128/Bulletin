import { BasicButton, CustomButton } from "components/common/Basic/Basic";
import MainItem from "components/common/MainItem";
import { CategoryState } from "store/types/CategoryType";
import { PostState } from "store/types/PostType";
import styled from "styled-components";
import Update from "util/enums/Update";
import Category from "./Category";
interface MainProps {
  data: { res: PostState[] | PostState | null };
  category: CategoryState[] | null;
  selectedCategory: string;
  onClickCategoryPost: (idx: number, category: string) => void;
  onClickSelectedAll: () => void;
  is_admin: boolean | null;
  updateCategory: (
    type: Update,
    category?: string,
    changeName?: string
  ) => void;
  categoryModal: boolean;
  setCategoryModal: React.Dispatch<React.SetStateAction<boolean>>;
  setCreateCategory: React.Dispatch<React.SetStateAction<string>>;
  update: string;
  setUpdate: React.Dispatch<React.SetStateAction<string>>;
  setChangeName: React.Dispatch<React.SetStateAction<string>>;
}

const Main = ({
  data,
  category,
  selectedCategory,
  onClickCategoryPost,
  onClickSelectedAll,
  is_admin,
  updateCategory,
  categoryModal,
  setCategoryModal,
  setCreateCategory,
  update,
  setUpdate,
  setChangeName,
}: MainProps) => {
  return (
    <MainArea>
      <RightArea>
        <Right>
          <Category
            category={category}
            selectedCategory={selectedCategory}
            onClickCategoryPost={onClickCategoryPost}
            onClickSelectedAll={onClickSelectedAll}
            is_admin={is_admin}
            updateCategory={updateCategory}
            categoryModal={categoryModal}
            setCategoryModal={setCategoryModal}
            setCreateCategory={setCreateCategory}
            update={update}
            setUpdate={setUpdate}
            setChangeName={setChangeName}
          />
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
  /* @media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  } */
`;

const CategoryModify = styled.div`
  margin-top: 3rem;
  display: flex;
`;

const CategoryBtn = styled(BasicButton)`
  padding: 0 0.6rem;
`;
const ItemsStyled = styled.div`
  display: flex;
  width: 80%;
  flex-wrap: wrap;
  /* @media screen and (max-width: 1200px) {
    width: 90%;
  }
  @media screen and (max-width: 750px) {
    width: 90%;
    justify-content: center;
  } */
`;

const RightArea = styled.div`
  width: 20%;
  /* @media screen and (max-width: 1200px) {
    width: 80%;
  } */
`;

const Right = styled.div`
  position: fixed;
  /* @media screen and (max-width: 1200px) {
    width: 100%;
    position: relative;
  } */
`;

const SearchArea = styled.div`
  width: 100%;
  margin-top: 3rem;
  display: flex;
  /* @media screen and (max-width: 1200px) {
    align-items: center;
    justify-content: center;
    margin: 0.5rem 0rem;
  } */
`;

const SearchInput = styled.input`
  height: 1.3rem;
  padding-left: 0.5rem;
  border: none;
  border-bottom: 1px solid #e2e2e2;
  padding-bottom: 4px;
  font-size: 0.8rem;
  /* @media screen and (max-width: 1200px) {
    width: 100%;
  } */
  :focus {
    outline: none;
  }
  ::-webkit-input-placeholder {
    color: gray;
  }
`;

export default Main;
