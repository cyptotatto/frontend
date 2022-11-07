import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import SelectBox from "../atoms/SelectBox";
import SelectImg from "../atoms/SelectImg";
import UploadPrice from "./UploadPrice";
import UploadSell from "./UploadSell";

function UploadImgClassify() {
  const [imgClassify, SetImgClassify] = useState(false);
  const [sellClassify, SetSellClassify] = useState(false);
  const options = [
    { value: ".", name: "도안" },
    { value: ".1", name: "타투 사진" },
  ];

  const options1 = [
    { value: "장르별", name: "도안" },
    { value: "장르별2", name: "타투 사진" },
  ];
  const options2 = [
    { value: "주제별", name: "이레즈미" },
    { value: "주제별2", name: "블랙워크" },
    { value: "주제별3", name: "올드스쿨" },
    { value: "주제별4", name: "뉴스쿨" },
    { value: "주제별5", name: "장르별" },
  ];

  const optionImg = [
    { value: ".", name: "판매 등록 하지 않음" },
    { value: ".1", name: "판매 등록" },
  ];
  useEffect(() => {
    console.log(imgClassify);
  }, [imgClassify]);

  useEffect(() => {
    console.log(sellClassify);
  }, [sellClassify]);

  return (
    <>
      <div>
        <StyledTitle>사진 분류</StyledTitle>
        <SelectImg
          options={options}
          openValue={imgClassify}
          setOpenValue={SetImgClassify}
        />
      </div>
      <div>
        <StyledTitle>카테고리</StyledTitle>
        <SelectBox options={options1} />
        <SelectBox options={options2} />
        {imgClassify ? (
          <>
            <UploadSell
              options={optionImg}
              openValue={sellClassify}
              setOpenValue={SetSellClassify}
            />
            {sellClassify ? <UploadPrice /> : <></>}
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

const StyledTitle = styled.h1`
  font-size: 18px;
`;

export default UploadImgClassify;
