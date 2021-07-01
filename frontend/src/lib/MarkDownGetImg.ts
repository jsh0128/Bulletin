import { toast } from "react-toastify";

export const MarkDownGetImg = (content: string) => {
  if (!content.includes("](")) {
    toast.warning("이미지를 등록해주세요");
    return false;
  } else {
    const startIdx = content.indexOf("](") + 2;
    const lastIdx = content.slice(startIdx, content.length).indexOf(")");
    return content.slice(startIdx, startIdx + lastIdx);
  }
};
