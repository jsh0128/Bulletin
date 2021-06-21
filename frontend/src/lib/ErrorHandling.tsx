import { useSelector } from "react-redux";
import { RootState } from "store/reducers";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

const ErrorHandling = () => {
  const {
    mailRes,
    registerRes,
    loginErr,
    userData,
    mailSendErr,
    userError,
    registerErr,
    changeInfoErr,
    changeInfoData,
  } = useSelector((state: RootState) => state.userReducer);
  const { uploadData, uploadDataErr } = useSelector(
    (state: RootState) => state.UploadReducer
  );
  const {
    createCategoryData,
    deleteCategoryData,
    modifyCategoryData,
    createCategoryErr,
    deleteCategoryErr,
    getCategoryErr,
    getPostCategoryErr,
    modifyCategoryErr,
  } = useSelector((state: RootState) => state.CategoryReducer);
  const {
    createCommentData,
    deleteCommentData,
    modifyCommentData,
    createCommentErr,
    deleteCommentErr,
    getCommentErr,
    modifyCommentErr,
  } = useSelector((state: RootState) => state.commentReducer);
  const {
    createPostData,
    deletePostData,
    modifyPostData,
    createPostErr,
    deletePostErr,
    getPostErr,
    modifyPostErr,
  } = useSelector((state: RootState) => state.postReducer);

  useEffect(() => {
    if (uploadData) toast.success("이미지 업로드 성공");
  }, [uploadData]);

  useEffect(() => {
    if (changeInfoData) toast.success("회원정보 변경 성공");
  }, [changeInfoData]);

  // 회원
  useEffect(() => {
    if (mailRes) toast.success("메일 전송 성공");
  }, [mailRes]);

  useEffect(() => {
    if (userData) toast.success("정보 불러오기 성공");
  }, [userData]);

  useEffect(() => {
    if (registerRes) toast.success("회원가입 생성 성공");
  }, [registerRes]);

  // 글
  useEffect(() => {
    if (modifyPostData) toast.success("글 수정 성공");
  }, [modifyPostData]);

  useEffect(() => {
    if (createPostData) toast.success("글 생성 성공");
  }, [createPostData]);

  useEffect(() => {
    if (deletePostData) toast.success("글 삭제 성공");
  }, [deletePostData]);

  // 카테고리
  useEffect(() => {
    if (createCategoryData) toast.success("카테고리 생성 성공");
  }, [createCategoryData]);

  useEffect(() => {
    if (deleteCategoryData) toast.success("카테고리 삭제 성공");
  }, [deleteCategoryData]);

  useEffect(() => {
    if (modifyCategoryData) toast.success("카테고리 수정 성공");
  }, [modifyCategoryData]);

  // 댓글
  useEffect(() => {
    if (deleteCommentData) toast.success("댓글 삭제 성공");
  }, [deleteCommentData]);

  useEffect(() => {
    if (modifyCommentData) toast.success("댓글 수정 성공");
  }, [modifyCommentData]);

  useEffect(() => {
    if (createCommentData) toast.success("댓글 생성 성공");
  }, [createCommentData]);

  // 에러처리
  useEffect(() => {
    if (createPostErr) {
      switch (createPostErr.response?.status) {
        case 404:
          toast.error("존재하지 않는 카테고리");
          break;
        default:
          toast.error("서버 오류");
          break;
      }
    }
  }, [createPostErr]);

  useEffect(() => {
    if (loginErr) {
      switch (loginErr.response?.status) {
        case 400:
          break;
        case 401:
          toast.error("id 또는 비밀번호가 다릅니다");
          break;
        case 404:
          toast.error("사용자를 찾을 수 없습니다");
          break;
        default:
          toast.error("서버 오류");
          break;
      }
    }
  }, [loginErr]);

  useEffect(() => {
    if (mailSendErr) {
      switch (mailSendErr.response?.status) {
        case 409:
          toast.error("중복 회원");
          break;
        default:
          toast.error("서버 오류");
          break;
      }
    }
  }, [mailSendErr]);

  useEffect(() => {
    if (changeInfoErr) {
      switch (changeInfoErr.response?.status) {
        case 404:
          toast.error("찾을 수 없는 회원");
          break;
        default:
          toast.error("서버 오류");
          break;
      }
    }
  }, [changeInfoErr]);

  useEffect(() => {
    if (userError) {
      switch (userError.response?.status) {
        default:
          toast.error("서버 오류");
          break;
      }
    }
  }, [userError]);

  useEffect(() => {
    if (registerErr) {
      switch (registerErr.response?.status) {
        case 400:
          toast.error("메일 인증을 해주세요");
          break;
        case 409:
          toast.error("중복되는 회원입니다");
          break;
        default:
          toast.error("서버 오류");
          break;
      }
    }
  }, [registerErr]);

  useEffect(() => {
    if (createCommentErr) {
      switch (createCommentErr.response?.status) {
        default:
          toast.error("서버 오류");
          break;
      }
    }
  }, [createCommentErr]);

  useEffect(() => {
    if (deleteCommentErr) {
      switch (deleteCommentErr.response?.status) {
        case 403:
          toast.error("현재 로그인 한 유저와 댓글을 작성한 유저가 다릅니다");
          break;
        case 404:
          toast.error("없는 댓글입니다");
          break;
        default:
          toast.error("서버 오류");
          break;
      }
    }
  }, [deleteCommentErr]);

  useEffect(() => {
    if (getCommentErr) {
      switch (getCommentErr.response?.status) {
        case 404:
          toast.error("찾을 수 없는 글입니다");
          break;
        default:
          toast.error("서버 오류");
          break;
      }
    }
  }, [getCommentErr]);

  useEffect(() => {
    if (uploadDataErr) {
      switch (uploadDataErr.response?.status) {
        case 404:
          toast.error("사진을 전송해 주세요");
          break;
        default:
          toast.error("서버 오류");
          break;
      }
    }
  }, [uploadDataErr]);

  useEffect(() => {
    if (modifyCommentErr) {
      switch (modifyCommentErr.response?.status) {
        case 403:
          toast.error("현재 로그인 한 유저와 댓글을 작성한 유저가 다릅니다");
          break;
        default:
          toast.error("서버 오류");
          break;
      }
    }
  }, [modifyCommentErr]);

  useEffect(() => {
    if (createCategoryErr) {
      switch (createCategoryErr.response?.status) {
        case 409:
          toast.error("이미 있는 카테고리");
          break;
        default:
          toast.error("서버 오류");
          break;
      }
    }
  }, [createCategoryErr]);

  useEffect(() => {
    if (deleteCategoryErr) {
      switch (deleteCategoryErr.response?.status) {
        case 404:
          toast.error("없는 카테고리");
          break;
        default:
          toast.error("서버 오류");
          break;
      }
    }
  }, [deleteCategoryErr]);

  useEffect(() => {
    if (getCategoryErr) {
      switch (getCategoryErr.response?.status) {
        default:
          toast.error("서버 오류");
          break;
      }
    }
  }, [getCategoryErr]);

  useEffect(() => {
    if (getPostCategoryErr) {
      switch (getPostCategoryErr.response?.status) {
        case 404:
          toast.error("없는 카테고리");
          break;
        default:
          toast.error("서버 오류");
          break;
      }
    }
  }, [getPostCategoryErr]);

  useEffect(() => {
    if (modifyCategoryErr) {
      switch (modifyCategoryErr.response?.status) {
        case 404:
          toast.error("없는 카테고리");
          break;
        default:
          toast.error("서버 오류");
          break;
      }
    }
  }, [modifyCategoryErr]);

  useEffect(() => {
    if (deletePostErr) {
      switch (deletePostErr.response?.status) {
        case 404:
          toast.error("존재 하지 않는 글");
          break;
        default:
          toast.error("서버 오류");
          break;
      }
    }
  }, [deletePostErr]);

  useEffect(() => {
    if (getPostErr) {
      switch (getPostErr.response?.status) {
        case 403:
          toast.error("존재 하지 않는 유저");
          break;
        case 404:
          toast.error("존재 하지 않는 글");
          break;
        default:
          console.log(getPostErr);
          toast.error("서버 오류");
          break;
      }
    }
  }, [getPostErr]);

  useEffect(() => {
    if (modifyPostErr) {
      switch (modifyPostErr.response?.status) {
        case 404:
          toast.error("존재 하지 않는 글");
          break;
        case 405:
          toast.error("존재 하지 않는 카테고리");
          break;
        default:
          toast.error("서버 오류");
          break;
      }
    }
  }, [modifyPostErr]);

  return <ToastContainer />;
};

export default ErrorHandling;
