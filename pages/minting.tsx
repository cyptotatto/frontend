import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styled from "styled-components";

//minting
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

  const options = [
    { value: "1", name: "dummy1" },
    { value: "2", name: "dummy2" },
  ];

  return (
    <Wrap>
      <div>
        <h1>파일 업로드</h1>
        <button onClick={clickInput}>파일 업로드</button>

        <input
          ref={Ref}
          accept="image/"
          type="file"
          onChange={imgUpload}
          style={{ display: "none" }}
        ></input>

        {imgSrc ? (
          <Image alt="사진" src={imgSrc} width="100" height="100" />
        ) : (
          <div>미리보기</div>
        )}
      </div>

      <div>
        <h1>제목입력</h1>
        <input placeholder="제목을 입력해주세요"></input>
      </div>

      <div>
        <h1>외부 링크 입력</h1>
        <h2>
          cryptattoo에서는 작업물에 대한 상세페이지 URL를 첨부함으로써 사용자로
          하여금 확인할 수 있도록 합니다.
        </h2>
        <input placeholder="http://yoursite/item/123"></input>
      </div>

      <div>
        <h1>작업 설명 입력</h1>
        <input placeholder="작업에 대해 설명해주세요."></input>
      </div>

      <div>
        <h1>카테고리</h1>
        <select>
          <option selected disabled hidden>
            장르별
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <button onClick={onSubmit}>Create</button>
      </div>
    </Wrap>
  );
}

export default Minting;

const Wrap = styled.div`
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
