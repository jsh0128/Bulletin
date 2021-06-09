import React from "react";
import styled from "styled-components";
import MDEditor from "@uiw/react-md-editor";
import { CustomBtn } from "components/common/Header/AuthModal/AuthStyle";
import { CategoryState } from "store/types/CategoryType";

interface WriteProps {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  intro: string;
  setIntro: React.Dispatch<React.SetStateAction<string>>;
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  categories: string[];
  setCategories: React.Dispatch<React.SetStateAction<string[]>>;
  onClickWrite: () => void;
  selectCategory: CategoryState[];
  select: boolean;
  setSelect: React.Dispatch<React.SetStateAction<boolean>>;
  deleteCategory: (string) => void;
  selectedCategory: (string) => void;
}

const Write = ({
  title,
  setTitle,
  intro,
  setIntro,
  content,
  setContent,
  categories,
  setCategories,
  onClickWrite,
  selectCategory,
  select,
  setSelect,
  deleteCategory,
  selectedCategory,
}: WriteProps) => {
  return (
    <WriteStyle>
      <Title>
        <Input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="제목"
          size={3}
        />
      </Title>
      <Introduction>
        <Input
          value={intro}
          onChange={(e) => {
            setIntro(e.target.value);
          }}
          placeholder="소개글"
          size={2}
        />
      </Introduction>
      <Categories>
        <CategorySelect>
          <CategorySelectNow>
            <span onClick={() => setSelect((prev) => !prev)}>카테고리 ▽</span>
          </CategorySelectNow>
          <SelectCategoryForm>
            {select &&
              selectCategory?.map((item, key) => (
                <SelectCategoriesForm
                  onClick={() => {
                    selectedCategory(item.category);
                  }}
                  key={key}
                >
                  {item.category}
                </SelectCategoriesForm>
              ))}
          </SelectCategoryForm>
        </CategorySelect>
        <SelectedCategory>
          {categories.map((item, key) => (
            <Category key={key}>
              <span>{item}</span>
              <Delete onClick={() => deleteCategory(item)}>✖️</Delete>
            </Category>
          ))}
        </SelectedCategory>
      </Categories>
      <Content>
        <MDEditor value={content} onChange={setContent} height={"99%"} />
      </Content>
      <Btn onClick={onClickWrite}>글쓰기</Btn>
    </WriteStyle>
  );
};

const WriteStyle = styled.div`
  display: flex;
  height: calc(100vh - 2.5rem);
  flex-direction: column;
`;

const SelectCategoryForm = styled.div`
  position: absolute;
  z-index: 10;
`;

const CategorySelect = styled.div`
  cursor: pointer;
  position: relative;
`;

const Categories = styled.div`
  margin-top: 1rem;
  display: flex;
`;

const SelectCategoriesForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border: 1px solid black;
  width: 6rem;
  transition: 0.2s;
  &:hover {
    background: #b4b4b4;
  }
`;

const Category = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
  padding: 0 0.5rem;
  height: 100%;
  border: 1px solid black;
  border-radius: 4px;
`;

const Delete = styled.span`
  font-size: 0.7rem;
  margin-left: 0.5rem;
  cursor: pointer;
`;

const SelectedCategory = styled.div`
  display: flex;
`;

const CategorySelectNow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 4px;
  border: 1px solid black;
  height: 100%;
  width: 6rem;
`;

const Title = styled.div`
  height: 10%;
`;

const Btn = styled(CustomBtn)`
  margin-top: none;
  margin-bottom: 1rem;
  font-weight: bold;
`;

const Introduction = styled.div`
  height: 6%;
`;

const Content = styled.div`
  height: 94%;
  margin-top: 0.8rem;
  overflow-x: hidden;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  font-weight: bold;
  font-size: ${(props) => (props.size ? props.size : 1)}rem;
`;

const ContentInput = styled.textarea`
  width: 100%;
  height: 99%;
  outline: none;
  border: none;
  font-weight: bold;
  font-size: 2rem;
`;

export default Write;
