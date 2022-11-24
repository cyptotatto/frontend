import { BigNumber, ethers } from "ethers";
import { arrayify } from "ethers/lib/utils.js";
import React from "react";
import styled from "styled-components";
import { useAccount, useContract, useSigner } from "wagmi";
import { TattoMarketAddress } from "../../../contracts/constant";
import { payHash } from "../../../utils/hash";
import TattoMarketAbi from "../../../contracts/abi/TattoMarket.sol/TattoMarket.json";

interface IProps {
  ownerAccount: string;
  contractAddress: string;
  tokenId: number;
  price: string;
}

const backInfo = {
  salt: 123,
  backAddress: "0x94a4ce1bD7e1ED75Db88313EfD8775bfF9D800Cb",
  tradeHashValue:
    "0xcd88802ef908fba6dca50e81bc23c0df42921f8c50d496b35fd06e158c2b034d",
  tradeSignature:
    "0x252893d332333a636bcff9abd0316a56796d9c881d854f96df53c7d633ac7ed54b12703375ac0246f7372dcf827edd65c0913a1d2c262544c95dcf603d41d26e1c",
};

function BuyBtn({ ownerAccount, contractAddress, tokenId, price }: IProps) {
  const { data: signer } = useSigner();
  const { address } = useAccount();
  const TatooMarket = useContract({
    address: TattoMarketAddress,
    abi: TattoMarketAbi,
  });

  const handleBuy = async () => {
    const parsePrice = ethers.utils.parseEther(price);
    console.log(parsePrice);
    const buyerHash = payHash(address, parsePrice);
    if (buyerHash && signer) {
      const buyerSignature = await signer.signMessage(arrayify(buyerHash));
      TatooMarket &&
        console.log(await TatooMarket.connect(signer).protocolFee());
      console.log(
        [contractAddress, ownerAccount, tokenId],
        [parsePrice, buyerHash, buyerSignature],
        [
          backInfo.salt,
          backInfo.backAddress,
          backInfo.tradeHashValue,
          backInfo.tradeSignature,
        ]
      );
      TatooMarket &&
        (await TatooMarket.connect(signer).buyNFT(
          [contractAddress, ownerAccount, tokenId],
          [parsePrice, buyerHash, buyerSignature],
          [
            backInfo.salt,
            backInfo.backAddress,
            backInfo.tradeHashValue,
            backInfo.tradeSignature,
          ]
        ));
    }
  };
  return <StyledBtn onClick={handleBuy}>Buy Now</StyledBtn>;
}

export default BuyBtn;

const StyledBtn = styled.button`
  height: 70px;
  width: 220px;

  border-radius: 10px;

  font-weight: 700;
  font-size: 18px;
  line-height: 40px;
  color: #7a7a7a;
  background: #191919;
  margin-top: 24px;
  margin-bottom: 32px;

  &:hover {
    color: white;
    background: linear-gradient(45deg, #d13750, #ae2b9e);
  }
`;
