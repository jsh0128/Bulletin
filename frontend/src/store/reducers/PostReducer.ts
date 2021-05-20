import {
  GET_POST,
  GET_POST_SUCCESS,
  GET_POST_FAILURE,
} from "store/actions/PostAction";
import { IGetPostState } from "store/types/PostType";
import { createReducer } from "typesafe-actions";

const getPostInitialState: IGetPostState = {
  data: null,
  getPostErr: null,
};

export const GetPostReducer = createReducer<IGetPostState>(
  getPostInitialState,
  {
    [GET_POST]: (state, action) => ({
      ...state,
      data: null,
      getPostErr: null,
    }),
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      data: action.payload,
      getPostErr: null,
    }),
    [GET_POST_FAILURE]: (state, action) => ({
      ...state,
      data: null,
      getPostErr: action.payload,
    }),
  }
);
