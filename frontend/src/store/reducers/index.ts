import { AnyAction, CombinedState, combineReducers } from "redux";
import {
  LoginReducer,
  RegisterReducer,
  MailAuthReducer,
  GetInfoReducer,
} from "./UserReducer";
import { GetPostReducer } from "./PostReducer";
import { GetCategoryReducer } from "./CategoryReducer";
import {
  IAuthEmailState,
  ILoginState,
  IRegisterState,
  IUserInfoState,
} from "store/types/UserType";
import { HydrateReducer } from "store/reducers/HydrateReducer";
import { HYDRATE } from "next-redux-wrapper";
import { IGetPostState } from "store/types/PostType";
import { IGetCategoryState } from "store/types/CategoryType";
import { IHydrateState } from "store/types/HydrateType";

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
}
