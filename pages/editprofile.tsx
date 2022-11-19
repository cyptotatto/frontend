import React from "react";
import styled from "styled-components";
import EditProfileTemplate from "../src/components/editprofile/templates/EditProfileTemplate";

function Editprofile() {
  // const router = useRouter();
  // const setAccount = useSetRecoilState(accountAtom);

  // const handleLogout = () => {
  //   setAccount("");
  //   router.push("/");
  // };

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
