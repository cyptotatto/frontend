import React from "react";
import styled from "styled-components";
import SelectButton from "../block/MainBox/SelectButton";
import Text from "../block/MainBox/Text";
import Title from "../block/MainBox/Title";

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
  margin: 200px 10%;
  @media screen and (max-width: 500px) {
    margin-top: 100px;
  }
`;
