import React from "react";
import styled from "styled-components";
import ExploreDetailTemplate from "../src/components/exploredetail/template/ExploreDetailTemplate";

function Editprofile() {
  // const router = useRouter();
  // const setAccount = useSetRecoilState(accountAtom);

  // const handleLogout = () => {
  //   setAccount("");
  //   router.push("/");
  // };

  return (
    <Wrap>
      <ExploreDetailTemplate></ExploreDetailTemplate>
    </Wrap>
  );
}

export default Editprofile;

const Wrap = styled.div`
  margin-top: 80px;
`;
