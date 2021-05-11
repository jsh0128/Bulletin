import MainItem from "components/common/MainItem";
import styled from "styled-components";
interface MainProps {}

const Main = ({}: MainProps) => {
  const data = [
    {
      img: "",
      title: "가나다",
      introduction:
        "테스트입니다. 테스트입니다. 테스트입니다. 테스트입니다. 테스트입니다. 테스트입니다. 테스트입니다. 테스트입니다. ",
      writer: "나다",
      created_at: "2013-01-05",
    },
    {
      img: "",
      title: "가나다",
      introduction: "ㅁㄴㅇㄻㄴㅇㄻㄴㅇㄻㄻㄹ",
      writer: "나다",
      created_at: "2013-01-05",
    },
    {
      img: "",
      title: "가나다",
      introduction: "ㅁㄴㅇㄻㄴㅇㄻㄴㅇㄻㄻㄹ",
      writer: "나다",
      created_at: "2013-01-05",
    },
    {
      img: "",
      title: "가나다",
      introduction: "ㅁㄴㅇㄻㄴㅇㄻㄴㅇㄻㄻㄹ",
      writer: "나다",
      created_at: "2013-01-05",
    },
    {
      img: "",
      title: "가나다",
      introduction: "ㅁㄴㅇㄻㄴㅇㄻㄴㅇㄻㄻㄹ",
      writer: "나다",
      created_at: "2013-01-05",
    },
    {
      img: "",
      title: "가나다",
      introduction: "ㅁㄴㅇㄻㄴㅇㄻㄴㅇㄻㄻㄹ",
      writer: "나다",
      created_at: "2013-01-05",
    },
    {
      img: "",
      title: "가나다",
      introduction: "ㅁㄴㅇㄻㄴㅇㄻㄴㅇㄻㄻㄹ",
      writer: "나다",
      created_at: "2013-01-05",
    },
    {
      img: "",
      title: "가나다",
      introduction: "ㅁㄴㅇㄻㄴㅇㄻㄴㅇㄻㄻㄹ",
      writer: "나다",
      created_at: "2013-01-05",
    },
  ];
  return (
    <MainArea>
      <ItemsStyled>
        {data.map((item, key) => (
          <MainItem key={key} data={item} />
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
`;

export default Main;
