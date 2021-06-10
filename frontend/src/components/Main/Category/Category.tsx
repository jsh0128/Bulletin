import { CategoryState } from "store/types/CategoryType";
import styled from "styled-components";
import Update from "util/enums/Update";
import { GiCancel } from "react-icons/Gi";
import { BasicInput } from "components/common/Basic/Basic";
import { AiOutlineCheckCircle } from "react-icons/Ai";

interface CategoryProps {
  category: CategoryState[] | null;
  selectedCategory: string;
  onClickCategoryPost: (idx: number, category: string) => void;
  onClickSelectedAll: () => void;
  is_admin: boolean;
  updateCategory: (
    type: Update,
    category?: string,
    changeName?: string
  ) => void;
  categoryModal: boolean;
  setCategoryModal: React.Dispatch<React.SetStateAction<boolean>>;
  setCreateCategory: React.Dispatch<React.SetStateAction<string>>;
}

const Category = ({
  selectedCategory,
  onClickSelectedAll,
  category,
  onClickCategoryPost,
  is_admin,
  updateCategory,
  categoryModal,
  setCategoryModal,
  setCreateCategory,
}: CategoryProps) => {
  return (
    <>
      <CategoriesStyle style={{ display: "flex" }}>
        <div>
          {selectedCategory === "" ? (
            <SelectedCategory
              onClick={() => {
                onClickSelectedAll();
              }}
            >
              <span>전체보기</span>
            </SelectedCategory>
          ) : (
            <CategoryItem
              onClick={() => {
                onClickSelectedAll();
              }}
            >
              <span>전체보기</span>
            </CategoryItem>
          )}

          {category &&
            category?.map((item, key) => (
              <>
                {item.category === selectedCategory ? (
                  <SelectedCategory key={key}>
                    <span>{item.category}</span>
                  </SelectedCategory>
                ) : (
                  <CategoryItem
                    onClick={() => onClickCategoryPost(item.idx, item.category)}
                    key={key}
                  >
                    <span>{item.category}</span>
                  </CategoryItem>
                )}
              </>
            ))}
        </div>
        <UpdateBtn>
          <CustomSpan
            onClick={() => {
              setCategoryModal(true);
            }}
          >
            +
          </CustomSpan>
          {is_admin &&
            category &&
            category?.map((item, key) => (
              <CustomSpan
                onClick={() => updateCategory(Update.DELETE, item.category)}
                key={key}
              >
                -
              </CustomSpan>
            ))}
        </UpdateBtn>
      </CategoriesStyle>
      {categoryModal && (
        <CreateCategoryArea>
          <CreateCategoryInput
            onChange={(e) => setCreateCategory(e.target.value)}
            placeholder="카테고리"
          />
          <Success onClick={() => updateCategory(Update.CREATE)} />
          <Cancel onClick={() => setCategoryModal(false)} />
        </CreateCategoryArea>
      )}
    </>
  );
};
export default Category;

const CreateCategoryInput = styled(BasicInput)`
  border-radius: 3px;
  border: 1px solid #707070;
  width: 70%;
  height: 1.5rem;
  position: relative;
`;

const Success = styled(AiOutlineCheckCircle)`
  right: 0;
  font-size: 1.6rem;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    color: green;
  }
`;

const Cancel = styled(GiCancel)`
  font-size: 1.5rem;
  margin-left: 0.3rem;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    color: red;
  }
`;

const CreateCategoryArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
  width: 10rem;
`;

const CategoriesStyle = styled.div`
  display: flex;
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

const UpdateBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 3rem;
`;

const CustomSpan = styled.span`
  cursor: pointer;
  margin-top: 0.3rem;
`;

const CategoryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.3rem;
  cursor: pointer;
`;

const SelectedCategory = styled(CategoryItem)`
  font-weight: bold;
  font-size: 1.1rem;
`;
