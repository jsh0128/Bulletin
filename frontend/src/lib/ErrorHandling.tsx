import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";
import { NotificationManager } from "react-notifications";
import { useSelector } from "react-redux";
import { RootState } from "store/reducers";
import { useEffect } from "react";
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
    if (uploadData)
      NotificationManager.success("이미지 업로드 성공", "UPLOAD", 1500);
  }, [uploadData]);

  useEffect(() => {
    if (changeInfoData)
      NotificationManager.success("회원정보 변경 성공", "CHANGE_INFO", 1500);
  }, [changeInfoData]);

  // 회원
  useEffect(() => {
    if (mailRes) NotificationManager.success("메일 전송 성공", "MAIL", 1500);
  }, [mailRes]);

  useEffect(() => {
    if (userData)
      NotificationManager.success("정보 불러오기 성공", "INFORMATION", 1500);
  }, [userData]);

  useEffect(() => {
    if (registerRes)
      NotificationManager.success("회원가입 생성 성공", "REGISTER", 1500);
  }, [registerRes]);

  // 글
  useEffect(() => {
    if (modifyPostData)
      NotificationManager.success("글 수정 성공", "POST", 1500);
  }, [modifyPostData]);

  useEffect(() => {
    if (createPostData)
      NotificationManager.success("글 생성 성공", "POST", 1500);
  }, [createPostData]);

  useEffect(() => {
    if (deletePostData)
      NotificationManager.success("글 삭제 성공", "POST", 1500);
  }, [deletePostData]);

  // 카테고리
  useEffect(() => {
    if (createCategoryData)
      NotificationManager.success("카테고리 생성 성공", "CATEGORY", 1500);
  }, [createCategoryData]);

  useEffect(() => {
    if (deleteCategoryData)
      NotificationManager.success("카테고리 삭제 성공", "CATEGORY", 1500);
  }, [deleteCategoryData]);

  useEffect(() => {
    if (modifyCategoryData)
      NotificationManager.success("카테고리 수정 성공", "CATEGORY", 1500);
  }, [modifyCategoryData]);

  // 댓글
  useEffect(() => {
    if (deleteCommentData)
      NotificationManager.success("댓글 삭제 성공", "COMMENT", 1500);
  }, [deleteCommentData]);

  useEffect(() => {
    if (modifyCommentData)
      NotificationManager.success("댓글 수정 성공", "COMMENT", 1500);
  }, [modifyCommentData]);

  useEffect(() => {
    if (createCommentData)
      NotificationManager.success("댓글 생성 성공", "COMMENT", 1500);
  }, [createCommentData]);

  // 에러처리
  useEffect(() => {
    if (createPostErr) {
      switch (createPostErr.response?.status) {
        case 404:
          NotificationManager.error("존재하지 않는 카테고리", "POST", 1500);
          break;
        default:
          NotificationManager.error("서버 오류", "POST", 1500);
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
          NotificationManager.error(
            "id 또는 비밀번호가 다릅니다",
            "LOGIN",
            1500
          );
          break;
        case 404:
          NotificationManager.error("사용자를 찾을 수 없습니다", "LOGIN", 1500);
          break;
        default:
          NotificationManager.error("서버 오류", "LOGIN", 1500);
          break;
      }
    }
  }, [loginErr]);

  useEffect(() => {
    if (mailSendErr) {
      switch (mailSendErr.response?.status) {
        case 409:
          NotificationManager.error("중복 회원", "MAIL", 1500);
          break;
        default:
          NotificationManager.error("서버 오류", "MAIL", 1500);
          break;
      }
    }
  }, [mailSendErr]);

  useEffect(() => {
    if (changeInfoErr) {
      switch (changeInfoErr.response?.status) {
        case 404:
          NotificationManager.error("찾을 수 없는 회원", "CHANGE_INFO", 1500);
          break;
        default:
          NotificationManager.error("서버 오류", "CHANGE_INFO", 1500);
          break;
      }
    }
  }, [changeInfoErr]);

  useEffect(() => {
    if (userError) {
      switch (userError.response?.status) {
        default:
          NotificationManager.error("서버 오류", "LOGIN", 1500);
          break;
      }
    }
  }, [userError]);

  useEffect(() => {
    if (registerErr) {
      switch (registerErr.response?.status) {
        case 400:
          NotificationManager.error("메일 인증을 해주세요", "REGISTER", 1500);
          break;
        case 409:
          NotificationManager.error("중복되는 회원입니다", "REGISTER", 1500);
          break;
        default:
          NotificationManager.error("서버 오류", "REGISTER", 1500);
          break;
      }
    }
  }, [registerErr]);

  useEffect(() => {
    if (createCommentErr) {
      switch (createCommentErr.response?.status) {
        default:
          NotificationManager.error("서버 오류", "COMMENT", 1500);
          break;
      }
    }
  }, [createCommentErr]);

  useEffect(() => {
    if (deleteCommentErr) {
      switch (deleteCommentErr.response?.status) {
        case 403:
          NotificationManager.error(
            "현재 로그인 한 유저와 댓글을 작성한 유저가 다릅니다",
            "COMMENT",
            1500
          );
          break;
        case 404:
          NotificationManager.error("없는 댓글입니다", "COMMENT", 1500);
          break;
        default:
          NotificationManager.error("서버 오류", "COMMENT", 1500);
          break;
      }
    }
  }, [deleteCommentErr]);

  useEffect(() => {
    if (getCommentErr) {
      switch (getCommentErr.response?.status) {
        case 404:
          NotificationManager.error("찾을 수 없는 글입니다", "COMMENT", 1500);
          break;
        default:
          NotificationManager.error("서버 오류", "COMMENT", 1500);
          break;
      }
    }
  }, [getCommentErr]);

  useEffect(() => {
    if (uploadDataErr) {
      switch (uploadDataErr.response?.status) {
        case 404:
          NotificationManager.error("사진을 전송해 주세요", "UPLOAD", 1500);
          break;
        default:
          NotificationManager.error("서버 오류", "LOGIN", 1500);
          break;
      }
    }
  }, [uploadDataErr]);

  useEffect(() => {
    if (modifyCommentErr) {
      switch (modifyCommentErr.response?.status) {
        case 403:
          NotificationManager.error(
            "현재 로그인 한 유저와 댓글을 작성한 유저가 다릅니다",
            "COMMENT",
            1500
          );
          break;
        default:
          NotificationManager.error("서버 오류", "COMMENT", 1500);
          break;
      }
    }
  }, [modifyCommentErr]);

  useEffect(() => {
    if (createCategoryErr) {
      switch (createCategoryErr.response?.status) {
        case 409:
          NotificationManager.error("이미 있는 카테고리", "CATEGORY", 1500);
          break;
        default:
          NotificationManager.error("서버 오류", "CATEGORY", 1500);
          break;
      }
    }
  }, [createCategoryErr]);

  useEffect(() => {
    if (deleteCategoryErr) {
      switch (deleteCategoryErr.response?.status) {
        case 404:
          NotificationManager.error("없는 카테고리", "CATEGORY", 1500);
          break;
        default:
          NotificationManager.error("서버 오류", "CATEGORY", 1500);
          break;
      }
    }
  }, [deleteCategoryErr]);

  useEffect(() => {
    if (getCategoryErr) {
      switch (getCategoryErr.response?.status) {
        default:
          NotificationManager.error("서버 오류", "CATEGORY", 1500);
          break;
      }
    }
  }, [getCategoryErr]);

  useEffect(() => {
    if (getPostCategoryErr) {
      switch (getPostCategoryErr.response?.status) {
        case 404:
          NotificationManager.error("없는 카테고리", "CATEGORY", 1500);
          break;
        default:
          NotificationManager.error("서버 오류", "LOGIN", 1500);
          break;
      }
    }
  }, [getPostCategoryErr]);

  useEffect(() => {
    if (modifyCategoryErr) {
      switch (modifyCategoryErr.response?.status) {
        case 404:
          NotificationManager.error("없는 카테고리", "CATEGORY", 1500);
          break;
        default:
          NotificationManager.error("서버 오류", "CATEGORY", 1500);
          break;
      }
    }
  }, [modifyCategoryErr]);

  useEffect(() => {
    if (deletePostErr) {
      switch (deletePostErr.response?.status) {
        case 404:
          NotificationManager.error("존재 하지 않는 글", "POST", 1500);
          break;
        default:
          NotificationManager.error("서버 오류", "POST", 1500);
          break;
      }
    }
  }, [deletePostErr]);

  useEffect(() => {
    if (getPostErr) {
      switch (getPostErr.response?.status) {
        case 403:
          NotificationManager.error("존재 하지 않는 유저", "POST", 1500);
          break;
        case 404:
          NotificationManager.error("존재 하지 않는 글", "POST", 1500);
          break;
        default:
          NotificationManager.error("서버 오류", "POST", 1500);
          break;
      }
    }
  }, [getPostErr]);

  useEffect(() => {
    if (modifyPostErr) {
      switch (modifyPostErr.response?.status) {
        case 404:
          NotificationManager.error("존재 하지 않는 글", "POST", 1500);
          break;
        case 405:
          NotificationManager.error("존재 하지 않는 카테고리", "POST", 1500);
          break;
        default:
          NotificationManager.error("서버 오류", "POST", 1500);
          break;
      }
    }
  }, [modifyPostErr]);

  return <NotificationContainer />;
};

export default ErrorHandling;
