import { UploadPayload } from "assets/types/UploadPayLoadType";
import { AxiosResponse } from "axios";
import customAxios from "lib/CustomAxios";

const UploadApi = {
  upload: async ({ file }: UploadPayload) => {
    const formData = new FormData();
    formData.append("file", file);

    const { data }: AxiosResponse<Response> = await customAxios.post("/upload");

    return data;
  },
};
export default UploadApi;
