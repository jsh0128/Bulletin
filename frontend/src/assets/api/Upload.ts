import { UploadPayload } from "assets/types/UploadPayLoadType";
import { AxiosResponse } from "axios";
import customAxios from "lib/CustomAxios";
import { IUploadResponse } from "util/types/UploadResponse";

const UploadApi = {
  upload: async ({ files }: UploadPayload) => {
    const formData = new FormData();
    formData.append("files", files);

    const { data }: AxiosResponse<IUploadResponse> = await customAxios.post(
      "/upload",
      formData
    );

    return data;
  },
};
export default UploadApi;
