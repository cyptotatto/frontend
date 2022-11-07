import React from "react";
import styled, { css } from "styled-components";
import SelectBox from "../atoms/SelectBox";

function UploadCategory() {
  const options = [
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

  return (
    <div>
      <StyledTitle>카테고리</StyledTitle>
      <SelectBox options={options} />
      <SelectBox options={options2} />
    </div>
  );
}

const StyledTitle = styled.h1`
  font-size: 18px;
`;

export default UploadCategory;
