import { UploadPayload } from "assets/types/UploadPayLoadType";

const Upload = {
    upload: async ({ file }: UploadPayload) => {
        const { data }: AxiosResponse<IGetPostResponse> = await axios.get(
          postIdx
            ? `${SERVER}/post/getPost?idx=${postIdx}`
            : `${SERVER}/post/getPost`
        );
    
        return { res: data?.data };
      },
}