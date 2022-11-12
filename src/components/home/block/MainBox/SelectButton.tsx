import router from "next/router";
import React from "react";
import styled from "styled-components";
import CustomButton from "../../../common/CustomButton";

function SelectButton() {
  return (
    <Wrap>
      <CustomButton active="true" handleClick={() => router.push("/explore")}>
        Explore
      </CustomButton>
      <CustomButton active="false" handleClick={() => router.push("/create")}>
        Create
      </CustomButton>
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
