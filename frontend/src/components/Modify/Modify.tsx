import MDEditor from "@uiw/react-md-editor";
import { Center, CustomBtn } from "components/common/Basic/Basic";
import { AiFillFolderOpen } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import { CategoryState } from "store/types/CategoryType";
import styled from "styled-components";

interface ModifyProps {
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
  uploadImg: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Modify = ({
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
  uploadImg,
}: ModifyProps) => {
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
          size={1.5}
        />
      </Introduction>
      <Categories>
        <div style={{ width: "60%", display: "flex" }}>
          <CategorySelect>
            <CategorySelectNow>
              <span onClick={() => setSelect((prev) => !prev)}>카테고리 ▽</span>
            </CategorySelectNow>
            <SelectCategoryForm>
              {select &&
                selectCategory?.map((item, key) => (
                  <div key={key}>
                    <SelectCategoriesForm
                      onClick={() => {
                        selectedCategory(item.category);
                      }}
                    >
                      {item.category}
                    </SelectCategoriesForm>
                  </div>
                ))}
            </SelectCategoryForm>
          </CategorySelect>
          <SelectedCategory>
            {categories.map((item, key) => (
              <div key={key}>
                <Category>
                  <span>{item}</span>
                  <Delete onClick={() => deleteCategory(item)}></Delete>
                </Category>
              </div>
            ))}
          </SelectedCategory>
        </div>
        <div>
          <FileUploadLabel htmlFor="file">
            <span>사진선택</span>
            <FileIcon />
          </FileUploadLabel>
          <FileInput
            type="file"
            id="file"
            accept="image/png image/jpeg image/jpg"
            onChange={(e) => {
              uploadImg(e);
            }}
          />
        </div>
      </Categories>
      <Content>
        <MDEditor value={content} onChange={setContent} height={650} />
      </Content>
      <Center>
        <Btn onClick={onClickWrite}>글쓰기</Btn>
      </Center>
    </WriteStyle>
  );
};

const FileIcon = styled(AiFillFolderOpen)`
  font-size: 1.5rem !important;
  margin-left: 1rem;
`;

const FileInput = styled.input`
  display: none;
`;

const FileUploadLabel = styled.label`
  cursor: pointer;
  display: flex;
  font-size: 1.3rem;
  align-items: center;
`;

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
  justify-content: space-between;
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
    background: #343434;
    color: white;
  }
`;

const Category = styled.div`
  cursor: pointer;
  display: flex;
  color: #343434;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
  padding: 0 0.5rem;
  height: 100%;
  border: 1px solid #343434;
  border-radius: 3px;
  transition: 0.2s;
  &:hover {
    background: #343434;
    color: white;
  }
`;

const Delete = styled(RiDeleteBin5Line)`
  font-size: 0.7rem;
  margin-left: 0.5rem;
  cursor: pointer;
  transition: 0.2s;
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
  width: 50%;
  cursor: pointer;
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

export default Modify;
