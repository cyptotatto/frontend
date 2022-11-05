import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { makeShortAddress } from "../../../../utils/transform";

interface Props {
  account: string;
}

function WalletUserInfo({ account }: Props) {
  return (
    <Wrap>
      <div className="img">
        <Image
          src="/assets/user_default_img.png"
          alt="user-img"
          width={40}
          height={40}
        />
      </div>
      <div className="account-info">{makeShortAddress(account)}</div>
    </Wrap>
  );
}

export default WalletUserInfo;

const Wrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 40px;
  .img {
    margin-left: 24px;
  }
  .account-info {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    margin-left: 16px;
  }
`;
