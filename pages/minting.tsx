import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styled from "styled-components";

function Minting() {
  const Ref = useRef<any>();
  const [img, setImage] = useState<any>();
  const [imgSrc, setImgSrc] = useState<any>("");

  const clickInput = () => {
    Ref.current.click();
  };

  const imgUpload = (e: any) => {
    setImage(e.target.files[0]);
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

  return (
    <Wrap>
      <button onClick={clickInput}>사진업로드</button>
      <input
        ref={Ref}
        accept="image/"
        type="file"
        onChange={imgUpload}
        style={{ display: "none" }}
      ></input>
      <button onClick={onSubmit}>보내기</button>
      {imgSrc ? (
        <Image alt="사진" src={imgSrc} width="100" height="100" />
      ) : (
        <div>미리보기</div>
      )}
    </Wrap>
  );
}

export default Minting;

const Wrap = styled.div`
  padding-top: 80px;
`;
