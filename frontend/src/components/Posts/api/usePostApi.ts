import { useQuery } from "@tanstack/react-query";
import CategoryApi from "components/common/DefaultTemplate/SideBar/api/CategoryApi";
import PostApi from "./PostApi";

export const usePostApi = (id?: number) =>
  useQuery(["posts", id], () => {
    return id ? CategoryApi.getCategoryPosts(id) : PostApi.getPosts();
  });
