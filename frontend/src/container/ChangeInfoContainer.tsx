import ChangeInfo from "components/ChangeInfo";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getInfoAsync,
  modifyInfoAsync,
  MODIFY_INFO_FAILURE,
} from "store/actions/UserAction";
import { RootState } from "store/reducers";
import { toast } from "react-toastify";
import { uploadAsync } from "store/actions/UploadAction";
import { useRouter } from "next/router";

const ChangeInfoContainer = () => {
  const router = useRouter();

  const [name, setName] = useState<string>("");
  const [pw, setPw] = useState<string | null>("");
  const [checkPw, setCheckPw] = useState<string | null>("");
  const [profileImg, setProfileImg] = useState<string | ArrayBuffer | null>();
  const [profileUploadImg, setProfileUploadImg] = useState<File | null>();
  const [basicProfileImg, setBasicProfileImg] = useState<string | null>("");
  const [onClickResetImgCheck, setOnClickResetImgCheck] = useState<boolean>(
    false
  );
  const dispatch = useDispatch();
  const { userData, changeInfoData } = useSelector(
    (state: RootState) => state.userReducer
  );
  const [flag, setFlag] = useState<boolean>(false);
  const { uploadData } = useSelector((state: RootState) => state.UploadReducer);

  const onClickChangeInfo = useCallback(() => {
    if (pw !== checkPw) {
      toast.warning("비밀번호가 일치하지 않습니다");
    } else if (!name) {
      toast.warning("이름을 채워주세요");
    } else {
      // 프로필 사진을 변경했을때
      setFlag(true);
      if (profileImg) {
        dispatch(uploadAsync.request({ files: profileUploadImg }));
      }
      // 프로필 사진을 초기화 하였을때
      else if (onClickResetImgCheck) {
        dispatch(
          modifyInfoAsync.request({
            name: name,
            password: pw === "" ? null : pw,
            profile_img: null,
          })
        );
        router.push("/");
      }
      // 프로필 사진 변경을 하지 않았을 때
      else {
        dispatch(
          modifyInfoAsync.request({
            name: name,
            password: pw === "" ? null : pw,
            profile_img: basicProfileImg,
          })
        );
        router.push("/");
      }
    }
  }, [
    name,
    pw,
    checkPw,
    basicProfileImg,
    onClickResetImgCheck,
    profileUploadImg,
    profileImg,
  ]);

  const onClickImgUpload = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      let reader = new FileReader();
      if (e.target.files && e.target.files.length) {
        let file = e.target.files[0];
        setProfileUploadImg(file);
        reader.onloadend = () => {
          setProfileImg(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        setProfileImg("");
      }
    },
    [profileUploadImg, setProfileImg, profileImg]
  );

  const onClickResetImg = useCallback(() => {
    setProfileImg(null);
    setProfileUploadImg(null);
    setBasicProfileImg(null);
    setOnClickResetImgCheck(true);
  }, [profileImg, profileUploadImg, onClickResetImgCheck]);

  useEffect(() => {
    if (!userData) {
      dispatch(getInfoAsync.request());
    }
  }, []);

  useEffect(() => {
    if (changeInfoData) {
      dispatch(getInfoAsync.request());
    }
  }, [changeInfoData]);

  useEffect(() => {
    if (uploadData) {
      if (flag) {
        dispatch(
          modifyInfoAsync.request({
            name: name,
            password: pw === "" ? null : pw,
            profile_img: uploadData.data.files[0],
          })
        );
        router.push("/");
      }
    }
  }, [uploadData]);

  useEffect(() => {
    if (userData) {
      setBasicProfileImg(userData.profileImg);
      setName(userData.name);
      console.log("프로필");
      if (userData.is_github) {
        toast.warning("Github 로그인은 정보를 바꿀 수 없습니다.");
        router.push("/");
      }
    }
  }, [userData]);

  return (
    userData && (
      <ChangeInfo
        name={name}
        setName={setName}
        profileImg={profileImg}
        basicProfileImg={basicProfileImg}
        pw={pw}
        setPw={setPw}
        checkPw={checkPw}
        setCheckPw={setCheckPw}
        onClickImgUpload={onClickImgUpload}
        onClickResetImg={onClickResetImg}
        onClickChangeInfo={onClickChangeInfo}
      />
    )
  );
};
export default ChangeInfoContainer;
