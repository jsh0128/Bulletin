import { BasicButton, CustomButton } from "components/common/Basic/Basic";
import MainItem from "components/common/MainItem";
import { CategoryState } from "store/types/CategoryType";
import { PostState } from "store/types/PostType";
import styled from "styled-components";
import Update from "util/enums/Update";
import Link from "next/link";
import Category from "./Category";

interface MainProps {
  data: PostState[];
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
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
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
  searchInput,
  setSearchInput,
}: MainProps) => {
  return (
    <div>
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
              <SearchInput
                placeholder="검색"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </SearchArea>
          </Right>
        </RightArea>
        <ItemsStyled>
          {data &&
            Array.isArray(data) &&
            data?.map((item, key) => <MainItem key={key} data={item} />)}
        </ItemsStyled>
      </MainArea>
      <CustomFooter>
        <Link href="https://github.com/jsh0128">
          <a style={{ color: "#494949" }}>
            © 2021. jsh0128. All rights reserved.
          </a>
        </Link>
      </CustomFooter>
    </div>
  );
};

const MainArea = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-height: calc(100vh - 10.5rem);
  margin-top: 1rem;
`;

const CustomFooter = styled.footer`
  border-top: 1px solid #c7c7c7;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
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
