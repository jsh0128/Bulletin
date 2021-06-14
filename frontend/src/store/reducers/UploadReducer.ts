import {
  UPLOAD,
  UPLOAD_FAILURE,
  UPLOAD_SUCCESS,
} from "store/actions/UploadAction";
import { IUploadState } from "store/types/UploadType";
import { createReducer } from "typesafe-actions";

const UploadInitialState: IUploadState = {
  uploadData: null,
  uploadDataErr: null,
};

export const UploadReducer = createReducer<IUploadState>(UploadInitialState, {
  [UPLOAD]: (state, action) => ({
    ...state,
    uploadDataErr: null,
  }),
  [UPLOAD_SUCCESS]: (state, action) => ({
    ...state,
    uploadData: action.payload,
    uploadDataErr: null,
  }),
  [UPLOAD_FAILURE]: (state, action) => ({
    ...state,
    uploadData: null,
    uploadDataErr: action.payload,
  }),
});
