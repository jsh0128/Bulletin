import { AnyAction, CombinedState, combineReducers } from "redux";
import {
  LoginReducer,
  RegisterReducer,
  MailAuthReducer,
  GetInfoReducer,
} from "./UserReducer";
import {
  GetPostReducer,
  CreatePostReducer,
  modifyPostReducer,
  deletePostReducer,
} from "./PostReducer";
import {
  GetCategoryReducer,
  GetPostCategoryReducer,
  createCategoryReducer,
  modifyCategoryReducer,
  deleteCategoryReducer,
} from "./CategoryReducer";
import {
  IAuthEmailState,
  ILoginState,
  IRegisterState,
  IUserInfoState,
} from "store/types/UserType";
import { HydrateReducer } from "store/reducers/HydrateReducer";
import { HYDRATE } from "next-redux-wrapper";
import {
  ICreatePostState,
  IDeletePostState,
  IGetPostState,
  IModifyPostState,
} from "store/types/PostType";
import {
  ICreateCategoryState,
  IDeleteCategoryState,
  IGetCategoryState,
  IGetPostCategoryState,
  IModifyCategoryState,
} from "store/types/CategoryType";
import { IHydrateState } from "store/types/HydrateType";
import {
  getCommentReducer,
  createCommentReducer,
  modifyCommentReducer,
  deleteCommentReducer,
} from "store/reducers/CommentReducer";
import {
  ICreateCommentState,
  IDeleteCommentState,
  IGetCommentState,
  IModifyCommentState,
} from "store/types/CommentType";

const rootReducer = (
  state: IState,
  action: AnyAction
): CombinedState<IState> => {
  switch (action.type) {
    case HYDRATE:
      if (state.HydrateReducer.isRendered) {
        return { ...state };
      }
      return {
        ...state,
        ...action.payload,
        HydrateReducer: { isRendered: true },
      };
    default: {
      const combineReducer = combineReducers({
        HydrateReducer,
        LoginReducer,
        RegisterReducer,
        MailAuthReducer,
        GetInfoReducer,
        GetPostReducer,
        GetCategoryReducer,
        GetPostCategoryReducer,
        CreatePostReducer,
        modifyPostReducer,
        deletePostReducer,
        getCommentReducer,
        createCommentReducer,
        modifyCommentReducer,
        deleteCommentReducer,
        createCategoryReducer,
        modifyCategoryReducer,
        deleteCategoryReducer,
      });
      return combineReducer(state, action);
    }
  }
};

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

interface IState {
  HydrateReducer: IHydrateState;
  LoginReducer: ILoginState;
  RegisterReducer: IRegisterState;
  MailAuthReducer: IAuthEmailState;
  GetInfoReducer: IUserInfoState;
  GetPostReducer: IGetPostState;
  GetCategoryReducer: IGetCategoryState;
  GetPostCategoryReducer: IGetPostCategoryState;
  CreatePostReducer: ICreatePostState;
  modifyPostReducer: IModifyPostState;
  deletePostReducer: IDeletePostState;
  getCommentReducer: IGetCommentState;
  createCommentReducer: ICreateCommentState;
  modifyCommentReducer: IModifyCommentState;
  deleteCommentReducer: IDeleteCommentState;
  createCategoryReducer: ICreateCategoryState;
  modifyCategoryReducer: IModifyCategoryState;
  deleteCategoryReducer: IDeleteCategoryState;
}
