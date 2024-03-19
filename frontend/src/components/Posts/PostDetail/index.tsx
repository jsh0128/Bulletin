import useCustomRouter from "common/hooks/useCustomRouter";
import dayjs from "dayjs";
import Image from "next/image";
import styled from "styled-components";
import { usePostDetailApi } from "./api/usePostDetailApi";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import Comments from "./Comments";

const PostDetail = () => {
  const {
    query: { id },
  } = useCustomRouter<{ id: string }>();

  const {
    data: {
      data: { category, content, created_at, preview_image, title },
    },
  } = usePostDetailApi(id);

  return (
    <Container>
      <header className="title">
        <h1>{title}</h1>
        <span className="title-time">
          {dayjs(created_at).format("YYYY-MM-DD")}
        </span>
      </header>
      <div className="img_container">
        <Image
          alt={`${title}_썸네일`}
          src={preview_image}
          width={200}
          height={100}
        />
      </div>

      <article className="content">
        <ReactMarkdown
          children={content}
          components={{
            code(props) {
              const { children, className, node, ...rest } = props;
              const match = /language-(\w+)/.exec(className || "");
              return match ? (
                <SyntaxHighlighter
                  {...rest}
                  PreTag="div"
                  children={String(children).replace(/\n$/, "")}
                  language={match[1]}
                />
              ) : (
                <code {...rest} className={className}>
                  {children}
                </code>
              );
            },
          }}
        />
      </article>

      <Comments />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 10px 20px 0 20px;

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-time {
      color: #5e5e5e;
    }
  }

  .img_container {
    overflow: hidden;
    margin-top: 10px;
    img {
      max-height: 500px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .content {
    width: 100%;
    p:first-child {
      margin-top: 0;
    }
    p {
      margin: 15px 0;
    }
    img {
      width: 100%;
    }
  }
`;

export default PostDetail;
