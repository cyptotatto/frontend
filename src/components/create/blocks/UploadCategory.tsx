import React from "react";
import styled, { css } from "styled-components";
import SelectBox from "../atoms/SelectBox";

function UploadCategory() {
  const options = [
    { value: "1", name: "dummy1" },
    { value: "2", name: "dummy2" },
  ];
  const options2 = [
    { value: "1", name: "dummy3" },
    { value: "2", name: "dummy4" },
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
