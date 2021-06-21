import {
  Center,
  CustomButton,
  CustomImg,
  CustomInput,
  UserImgIcon,
} from "components/common/Basic/Basic";
import { AiFillFolderOpen } from "react-icons/ai";
import styled from "styled-components";

interface ChangeInfoProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  profileImg: string | ArrayBuffer;
  basicProfileImg: string;
  onClickImgUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  pw: string;
  setPw: React.Dispatch<React.SetStateAction<string>>;
  checkPw: string;
  setCheckPw: React.Dispatch<React.SetStateAction<string>>;
  onClickResetImg: () => void;
  onClickChangeInfo: () => void;
}

const ChangeInfo = ({
  name,
  setName,
  profileImg,
  basicProfileImg,
  onClickImgUpload,
  pw,
  setPw,
  checkPw,
  setCheckPw,
  onClickResetImg,
  onClickChangeInfo,
}: ChangeInfoProps) => {
  const selectImg = () => {
    if (profileImg) {
      return (
        <div style={{ height: "8rem", width: "8rem" }}>
          <CustomImg style={{ height: "100%" }} src={profileImg.toString()} />
        </div>
      );
    } else if (basicProfileImg) {
      return (
        <div style={{ height: "8rem", width: "8rem" }}>
          <CustomImg style={{ height: "100%" }} src={basicProfileImg} />
        </div>
      );
    } else {
      return <CustomUserIcon />;
    }
  };

  return (
    <CustomCenter>
      <div>
        <ChangeInfoInputs>
          <ChangeInfoArea>
            {selectImg()}
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
            <ChangeInfoBtn
              onClick={onClickResetImg}
              style={{ margin: "0", marginTop: ".5rem" }}
            >
              기본 사진으로 변경
            </ChangeInfoBtn>
          </ChangeInfoArea>
          <Inputs>
            <ChangeInfoInput
              placeholder="이름"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <ChangeInfoInput
              type="password"
              placeholder="변경하는 비밀번호(입력 안하셔도 됩니다)"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
            />
            <ChangeInfoInput
              type="password"
              placeholder="변경하는 비밀번호 확인"
              value={checkPw}
              onChange={(e) => setCheckPw(e.target.value)}
            />
          </Inputs>
        </ChangeInfoInputs>
        <BtnArea style={{ display: "flex" }}>
          <ChangeInfoBtn position="absolute" onClick={onClickChangeInfo}>
            프로필 변경
          </ChangeInfoBtn>
        </BtnArea>
      </div>
    </CustomCenter>
  );
};

const CustomUserIcon = styled(UserImgIcon)`
  font-size: 8rem;
`;

const BtnArea = styled.div`
  position: relative;
`;

const ChangeInfoInputs = styled.div`
  display: flex;
`;

const ChangeInfoArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  border-right: 1px solid black;
  padding-right: 2rem;
`;

const Inputs = styled.div`
  padding-left: 2rem;
  width: 70%;
`;

const CustomCenter = styled(Center)`
  height: calc(100vh - 2.5rem);
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: none;
  align-items: center;
  justify-content: center;
`;

const ChangeInfoInput = styled(CustomInput)`
  height: 2.5rem;
  width: 100%;
`;

const ChangeInfoBtn = styled(CustomButton)<{ position?: string }>`
  max-width: 20rem;
  margin-top: 2rem;
  position: ${(props) => (props.position ? props.position : "static")};
  right: 0;
  border: 1px solid #707070;
  margin-right: 2rem;
  &:hover {
    background-color: rgba(0, 0, 0, 0.85);
    color: white;
    border: 1px solid black;
  }
`;

const FileIcon = styled(AiFillFolderOpen)`
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
  transition: 0.2s;
  & :hover {
    color: #343434;
  }
`;

export default ChangeInfo;
