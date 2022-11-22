import React from "react";
import styled from "styled-components";
import EditProfileTemplate from "../src/components/editprofile/template/EditProfileTemplate";

function Editprofile() {
  return (
    <Wrap>
      <EditProfileTemplate></EditProfileTemplate>
    </Wrap>
  );
}

export default Editprofile;

const Wrap = styled.div`
  padding-top: 80px;
`;
