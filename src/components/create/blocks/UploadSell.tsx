import React from "react";
import styled, { css } from "styled-components";
import SelectBox from "../atoms/SelectBox";

interface IProps {
  options: option[];
}

type option = {
  value: string;
  name: string;
};

function UploadSell({ options }: IProps) {
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
