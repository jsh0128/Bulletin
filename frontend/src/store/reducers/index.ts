import { AnyAction, CombinedState, combineReducers } from "redux";
import { UploadReducer } from "./UploadReducer";
import { userReducer } from "./UserReducer";
import { postReducer } from "./PostReducer";
import { CategoryReducer } from "./CategoryReducer";
import { IUserState } from "store/types/UserType";
import { HydrateReducer } from "store/reducers/HydrateReducer";
import { HYDRATE } from "next-redux-wrapper";
import { IPostState } from "store/types/PostType";
import { ICategoryReducer } from "store/types/CategoryType";
import { IHydrateState } from "store/types/HydrateType";
import { commentReducer } from "store/reducers/CommentReducer";
import { ICommentState } from "store/types/CommentType";
import { IUploadState } from "store/types/UploadType";
import { replyReducer } from "./ReplyReducer";
import { IReplyState } from "store/types/ReplyType";

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
        userReducer,
        postReducer,
        commentReducer,
        UploadReducer,
        CategoryReducer,
        replyReducer,
      });
      return combineReducer(state, action);
    }
  }
};

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export interface IState {
  HydrateReducer: IHydrateState;
  userReducer: IUserState;
  postReducer: IPostState;
  commentReducer: ICommentState;
  UploadReducer: IUploadState;
  CategoryReducer: ICategoryReducer;
  replyReducer: IReplyState;
}
