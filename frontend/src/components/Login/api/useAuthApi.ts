import { useQuery } from "@tanstack/react-query";
import AuthApi from "./AuthApi";

export const useMeInfoApi = () =>
  useQuery(["meInfo"], () =>
    AuthApi.getMeInfo(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imh0dHBzOi8vZ2l0aHViLmNvbS9qc2gwMTI4IiwibmFtZSI6ImpzaDAxMjgiLCJwcm9maWxlIjoiaHR0cHM6Ly9hdmF0YXJzLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzUyOTQyNDExP3Y9NCIsImlzX2FkbWluIjpmYWxzZSwiaXNfZ2l0aHViIjp0cnVlLCJpYXQiOjE3MDk1MTQ3OTQsImV4cCI6MTcxMjEwNjc5NH0.oETy1uYuY6w3Z4rlfx3w1psRmYsrXn9QjELZjMs0ImY"
    )
  );
