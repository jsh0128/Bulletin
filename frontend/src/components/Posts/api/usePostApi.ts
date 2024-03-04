import { useQuery } from "@tanstack/react-query";
import PostApi from "./PostApi";

export const usePostApi = () => useQuery(["posts"], PostApi.getPosts);
