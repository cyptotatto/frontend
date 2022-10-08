import React from "react";
import styled, { css } from "styled-components";
import SelectBox from "../atoms/SelectBox";

function UploadSell() {
  const options = [
    { value: "1", name: "dummy1" },
    { value: "2", name: "dummy2" },
  ];

  return (
    <div>
      <StyledTitle>판매 등록 여부</StyledTitle>
      <SelectBox options={options} />
    </div>
  );
}

const StyledTitle = styled.h1`
  font-size: 18px;
`;

export default UploadSell;
