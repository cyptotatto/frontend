import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import addImage from "../../../../public/assets/add_image.png";
import styled, { css } from "styled-components";

function UploadFileBox({ img, setImage, imgSrc, setImgSrc }: any) {
  const Ref = useRef<any>();
  //const [img, setImage] = useState<any>();
  //const [imgSrc, setImgSrc] = useState<any>("");

  const [uploadFile, setUploadFile] = useState<boolean>(false);

  const clickInput = () => {
    Ref.current.click();
  };

  const imgUpload = (e: any, data: any) => {
    e.preventDefault();
    setUploadFile(true);
    setImage(data.files[0]);
  };

  const onSubmit = () => {};

  const encodeFileToBase64 = (fileBlob: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve: any) => {
      reader.onload = async () => {
        console.log(reader.result);
        setImgSrc(reader.result);
        resolve();
      };
    });
  };

  useEffect(() => {
    img && encodeFileToBase64(img);
  }, [img]);

  useEffect(() => {
    if (!Ref) return;
    Ref.current.addEventListener("dragover", (e: any) => e.preventDefault());
    Ref.current.addEventListener("drop", (e: any) =>
      imgUpload(e, e.dataTransfer)
    );
  }, []);

  return (
    <StyledFileBox>
      <StyledTitle>파일 업로드</StyledTitle>
      <StyledDescript>PNG, GIF, WEBP, MP4 or MP3. 최대 100mb.</StyledDescript>
      {imgSrc ? (
        <Image alt="사진" src={imgSrc} width="100" height="100" />
      ) : (
        <StyledUploadBox ref={Ref}>
          <Image src={addImage} width="40" height="40" layout="fixed" />
          <StyledInput
            accept="image/"
            type="file"
            onChange={(e) => imgUpload(e, e.target)}
          ></StyledInput>
        </StyledUploadBox>
      )}
    </StyledFileBox>
  );
}
const StyledFileBox = styled.div`
  width: 640px;
`;
const StyledTitle = styled.h1`
  font-size: 18px;
`;
const StyledDescript = styled.h1`
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #7a7a7a;
`;
const StyledUploadBox = styled.div`
  width: 464px;
  height: 150px;
  border: 3px dashed #191919;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledInput = styled.input`
  display: none;
  width: 464px;
  height: 150px;
`;

export default UploadFileBox;
