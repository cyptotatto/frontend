import React from "react";
import styled from "styled-components";
import SelectButton from "../block/SelectButton";
import Text from "../block/Text";
import Title from "../block/Title";

function MainBox() {
  return (
    <Wrap>
      <Title />
      <Text />
      <SelectButton />
    </Wrap>
  );
}

export default MainBox;

const Wrap = styled.div`
  margin-top: 234px;
  margin-left: 14%;
`;
