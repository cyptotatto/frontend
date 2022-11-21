import { ethers, BigNumber } from "ethers";

export function lazyMintHash(
  collectionAddress: string,
  creatorAddress: string,
  receiverAddress: string,
  ipfsHash: string
) {
  const hash = ethers.utils.solidityKeccak256(
    ["uint256", "uint256", "uint256", "string"],
    [
      BigInt(collectionAddress),
      BigInt(creatorAddress),
      BigInt(receiverAddress),
      ipfsHash,
    ]
  );
  return hash;
}

export function payHash(buyerAddress: string, price: BigNumber) {
  const hash = ethers.utils.solidityKeccak256(
    ["uint256", "uint256"],
    [BigInt(buyerAddress), price]
  );
  return hash;
}

export function tradeHash(
  collectionAddress: string,
  sellerAddress: string,
  buyerAddress: string,
  price: BigNumber,
  random: number
) {
  const hash = ethers.utils.solidityKeccak256(
    ["uint256", "uint256", "uint256", "uint256", "uint256"],
    [
      BigInt(collectionAddress),
      BigInt(sellerAddress),
      BigInt(buyerAddress),
      price,
      BigInt(random),
    ]
  );
  return hash;
}
