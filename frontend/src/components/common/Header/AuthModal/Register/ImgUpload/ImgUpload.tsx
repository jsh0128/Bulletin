import {
  Center,
  CustomBtn,
  CustomImg,
  UserImgIcon,
} from "components/common/Basic/Basic";
import { AiFillFolderOpen } from "react-icons/ai";
// import { BiUser } from "react-icons/Bi";
import styled from "styled-components";

interface ImgUploadProps {
  profileImg: string | ArrayBuffer | null;
  onClickImgUpload: (File) => void;
  onClickRegister: () => void;
}

const ImgUpload = ({
  profileImg,
  onClickImgUpload,
  onClickRegister,
}: ImgUploadProps) => {
  return (
    <CustomCenter>
      {profileImg ? (
        <ImgArea>
          <CustomImg style={{ height: "100%" }} src={profileImg.toString()} />
        </ImgArea>
      ) : (
        <ImgIconArea>
          <UserImgIcon />
        </ImgIconArea>
      )}
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
      <CustomCenter>
        <CustomBtn
          onClick={() => {
            onClickRegister();
          }}
        >
          {profileImg ? "회원가입" : "프로필 사진 없이 회원가입"}
        </CustomBtn>
      </CustomCenter>
    </CustomCenter>
  );
};

const ImgArea = styled.div`
  width: 20rem;
  height: 20rem;
`;

const ImgIconArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 5rem;
`;

const CustomCenter = styled(Center)`
  flex-direction: column;
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
  margin-top: 1rem;
  cursor: pointer;
  display: flex;
  font-size: 1.3rem;
  align-items: center;
`;

export default ImgUpload;
