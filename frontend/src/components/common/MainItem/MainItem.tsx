import React from "react";
import styled from "styled-components";

interface MainItemProps {
  img?: string;
  title: string;
  introduction: string;
  writer: string;
}

const MainItem = ({ img, title, introduction, writer }: MainItemProps) => {
  return (
    <MainItemStyle>
      <ImgContainer>
        <ImgRatio>
          <ImgCenter>
            <Img src="https://media.vlpt.us/images/gicomong/post/8d124099-3c88-4c20-9798-3d8584ac306a/gif (4).gif?w=640" />
          </ImgCenter>
        </ImgRatio>
      </ImgContainer>
      <ContentDiv>
        <TitleStyle>{title}</TitleStyle>
        <Intro>{introduction}</Intro>
        <Span>{writer}</Span>
      </ContentDiv>
    </MainItemStyle>
  );
};

const MainItemStyle = styled.div`
  width: 32%;
  display: flex;
  margin-top: 1rem;
  flex-direction: column;
  background-color: whitesmoke;
  padding-bottom: 5px;
  border-radius: 1rem;
`;

const ContentDiv = styled.div`
  padding: 0.5rem 0.8rem 0.5rem 0.8rem;
  display: flex;
  flex-direction: column;
`;

const TitleStyle = styled.span`
  font-size: 1.3rem;
  font-weight: bold;
`;

const Intro = styled.span`
  font-size: 1.1rem;
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
  font-size: 1.1rem;
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

export default MainItem;
