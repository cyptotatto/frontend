import React, { Dispatch, SetStateAction, useState } from "react";
import styled, { css } from "styled-components";
import SelectBox from "../atoms/SelectBox";
import SelectImg from "../atoms/SelectImg";

interface IProps {
  options: option[];
  openValue: boolean;
  setOpenValue: Dispatch<SetStateAction<boolean>>;
}

type option = {
  value: string;
  name: string;
};
function UploadSell({ options, openValue, setOpenValue }: IProps) {
  const [selectedOption, setSelectedOption] = useState("");
  return (
    <div>
      <StyledTitle>판매 등록 여부</StyledTitle>
      <SelectImg
        options={options}
        openValue={openValue}
        setOpenValue={setOpenValue}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
    </div>
  );
}

const StyledTitle = styled.h1`
  font-size: 18px;
`;

export default UploadSell;
