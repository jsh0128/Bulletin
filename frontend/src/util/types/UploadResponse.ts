export interface IUploadResponse extends Response {
  data: { files: string[] };
}
