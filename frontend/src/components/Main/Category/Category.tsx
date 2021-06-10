import { CategoryState } from "store/types/CategoryType";
import styled from "styled-components";
import Update from "util/enums/Update";
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
        <CustomSpan>+</CustomSpan>
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
  );
};
export default Category;

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
