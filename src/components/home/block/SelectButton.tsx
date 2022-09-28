import React from "react";
import styled from "styled-components";
import CustomButton from "../../common/CustomButton";

function SelectButton() {
  return (
    <Wrap>
      <CustomButton active="true">Explore NFTs</CustomButton>
      <CustomButton active="false">Create NFTs</CustomButton>
    </Wrap>
  );
}

export default SelectButton;

const Wrap = styled.div`
  display: flex;
  button {
    margin-right: 19px;
  }
`;
