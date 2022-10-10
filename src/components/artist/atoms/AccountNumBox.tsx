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
      <span className="text">Create by</span>
      <AccountNum>{makeShortAddress(accountNum)}</AccountNum>
    </Box>
  );
}

export default AccountNumBox;

const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  .text {
    color: #7a7a7a;
    font-size: 15px;
    font-weight: 500;
  }
`;

const AccountNum = styled.span`
  font-weight: 500;
`;
