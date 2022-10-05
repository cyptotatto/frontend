import React from "react";
import styled from "styled-components";

const data = null;

function ListBox() {
  if (!data) return <Text>Nothing Found</Text>;
  return <div></div>;
}

export default ListBox;

const Text = styled.h2`
  text-align: center;
  padding: 40px 12px;
  color: #7a7a7a;
  font-weight: 600;
  font-size: 40px;
`;
