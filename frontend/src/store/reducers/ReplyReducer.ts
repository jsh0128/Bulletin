import {
  CREATE_REPLY,
  CREATE_REPLY_FAILURE,
  CREATE_REPLY_SUCCESS,
  DELETE_REPLY,
  DELETE_REPLY_FAILURE,
  DELETE_REPLY_SUCCESS,
  MODIFY_REPLY,
  MODIFY_REPLY_FAILURE,
  MODIFY_REPLY_SUCCESS,
} from "store/actions/ReplyAction";
import { IReplyState } from "store/types/ReplyType";
import { createReducer } from "typesafe-actions";

const replyInitialState: IReplyState = {
  createReplyData: null,
  createReplyErr: null,
  modifyReplyData: null,
  modifyReplyErr: null,
  deleteReplyData: null,
  deleteReplyErr: null,
};

export const replyReducer = createReducer<IReplyState>(replyInitialState, {
  [CREATE_REPLY]: (state, action) => ({
    ...state,
    createReplyData: null,
    createReplyErr: null,
  }),
  [CREATE_REPLY_SUCCESS]: (state, action) => ({
    ...state,
    createReplyData: action.payload,
    createReplyErr: null,
  }),
  [CREATE_REPLY_FAILURE]: (state, action) => ({
    ...state,
    createReplyData: null,
    createReplyErr: action.payload,
  }),
  [MODIFY_REPLY]: (state, action) => ({
    ...state,
    modifyReplyData: null,
    modifyReplyErr: null,
  }),
  [MODIFY_REPLY_SUCCESS]: (state, action) => ({
    ...state,
    modifyReplyData: action.payload,
    modifyReplyErr: null,
  }),
  [MODIFY_REPLY_FAILURE]: (state, action) => ({
    ...state,
    modifyReplyData: null,
    modifyReplyErr: action.payload,
  }),
  [DELETE_REPLY]: (state, action) => ({
    ...state,
    deleteReplyData: null,
    deleteReplyErr: null,
  }),
  [DELETE_REPLY_SUCCESS]: (state, action) => ({
    ...state,
    deleteReplyData: action.payload,
    deleteReplyErr: null,
  }),
  [DELETE_REPLY_FAILURE]: (state, action) => ({
    ...state,
    deleteReplyData: null,
    deleteReplyErr: action.payload,
  }),
});
