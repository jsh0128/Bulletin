import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useCategoryApi, useCategoryPosts } from "./api/useCategoryApi";
import CategoryItem from "./CategoryItem";

const SideBar = () => {
  const { data } = useCategoryApi();

  return (
    <div>
      <Container>
        {data?.map((category) => (
          <CategoryItem key={category.idx} {...category} />
        ))}
      </Container>
    </div>
  );
};

const Container = styled.div`
  width: 200px;
  border-left: 1px solid black;
  padding: 5px;
`;

export default SideBar;
