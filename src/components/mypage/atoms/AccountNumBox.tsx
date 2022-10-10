import React from "react";
import styled from "styled-components";

import { makeShortAddress } from "../../../utils/transform";
import EthereumIcon from "../../../../public/assets/ethereum.svg";

interface IProps {
  accountNum: string;
}

function AccountNumBox({ accountNum }: IProps) {
  return (
    <Box>
      <EthereumIcon />
      <AccountNum>{makeShortAddress(accountNum)}</AccountNum>
    </Box>
  );
}

export default AccountNumBox;

const Box = styled.div`
  display: flex;
  align-items: center;
`;

const AccountNum = styled.span`
  font-weight: 500;
  color: #7a7a7a;
  margin-left: 5px;
`;
