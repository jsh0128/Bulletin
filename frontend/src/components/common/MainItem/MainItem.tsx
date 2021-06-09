import styled from "styled-components";
import { AiOutlineClockCircle } from "react-icons/ai";
import { PostState } from "store/types/PostType";
import Link from "next/link";

interface MainItemProps {
  data: PostState | null;
}

const MainItem = ({ data }: MainItemProps) => {
  return (
    <MainItemStyle>
      <Link href={`/post/${data.idx}`}>
        <a>
          <ImgContainer>
            <ImgRatio>
              <ImgCenter>
                <Img src={data.preview_image} />
              </ImgCenter>
            </ImgRatio>
          </ImgContainer>
          <ContentDiv>
            <TitleStyle>{data.title}</TitleStyle>
            <Intro>{data.introduction}</Intro>
            <Bottom>
              <Span>{data.user_name}</Span>
              <CreateTimeStyle>
                <AiOutlineClockCircle />
                <Span>{data.created_at}</Span>
              </CreateTimeStyle>
            </Bottom>
          </ContentDiv>
        </a>
      </Link>
    </MainItemStyle>
  );
};

const CreateTimeStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & svg {
    margin-right: 0.3rem;
    width: 1rem;
    height: 1rem;
  }
`;

const MainItemStyle = styled.div`
  margin-left: 1rem;
  width: 31.3%;
  display: flex;
  margin-bottom: 1rem;
  flex-direction: column;
  background-color: whitesmoke;
  padding-bottom: 5px;
  border-radius: 1rem;
  @media screen and (max-width: 1200px) {
    width: calc(50% - 2rem);
  }
  @media screen and (max-width: 765px) {
    width: 100%;
    margin-left: 0;
  }
`;

const ContentDiv = styled.div`
  padding: 0.5rem 0.8rem 0.5rem 0.8rem;
  display: flex;
  flex-direction: column;
`;

const TitleStyle = styled.span`
  font-size: 1.3rem;
  font-weight: 550;
  display: inline-block;
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Intro = styled.span`
  margin-top: 0.5rem;
  font-size: 1rem;
  font-weight: 200;
  white-space: normal;
  line-height: 1.2;
  height: 2.4em;
  text-align: left;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
  -webkit-box-orient: vertical;
`;

const Span = styled.span`
  font-size: 0.9rem;
  font-weight: 200;
`;

const ImgContainer = styled.div`
  width: 100%;
`;

const ImgRatio = styled.div`
  position: relative;
  padding-top: 56.25%; /* 1:1 ratio */
  overflow: hidden;
`;
const ImgCenter = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-transform: translate(50%, 50%);
  -ms-transform: translate(50%, 50%);
  transform: translate(50%, 50%);
`;

const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  max-width: 100%;
  height: auto;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

const Bottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
`;

export default MainItem;
