import { Center, CustomBtn } from "components/common/Basic/Basic";
import { AiFillFolderOpen } from "react-icons/Ai";
import { BiUserPin } from "react-icons/Bi";
import styled from "styled-components";

interface ImgUploadProps {
  img?: string;
  profileImg: string | ArrayBuffer | null;
  onClickImgUpload: (File) => void;
  onClickRegister: () => void;
}

const ImgUpload = ({
  img,
  profileImg,
  onClickImgUpload,
  onClickRegister,
}: ImgUploadProps) => {
  return (
    <CustomCenter>
      {profileImg ? (
        <img src={profileImg.toString()} />
      ) : (
        <>{img ? <img src={img} /> : <UserImgIcon />}</>
      )}
      <CustomCenter>
        <FileUploadLabel htmlFor="file">
          <span>사진선택</span>
          <FileIcon />
        </FileUploadLabel>
        <FileInput
          type="file"
          id="file"
          accept="image/png image/jpeg image/jpg"
          onChange={(e) => {
            onClickImgUpload(e);
          }}
        />
        <CustomBtn
          onClick={() => {
            console.log("onClickRegister");
            onClickRegister();
          }}
        >
          {img ? "회원가입" : "프로필 사진 없이 회원가입"}
        </CustomBtn>
      </CustomCenter>
    </CustomCenter>
  );
};

const CustomCenter = styled(Center)`
  flex-direction: column;
`;

const UserImgIcon = styled(BiUserPin)`
  font-size: 30rem;
`;

const FileIcon = styled(AiFillFolderOpen)`
  color: white;
  font-size: 2rem !important;
  margin-left: 1rem;
`;

const FileInput = styled.input`
  display: none;
`;

const FileUploadLabel = styled.label`
  cursor: pointer;
  display: flex;
  font-size: 1.3rem;
  align-items: center;
`;

export default ImgUpload;
