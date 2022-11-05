import { BigNumber, ethers } from "ethers";

export type providerType = ethers.providers.Web3Provider;
export type signerType = ethers.providers.JsonRpcSigner;

export interface ContractStructInterface {
  currencyControl: ethers.Contract;
  market: ethers.Contract;
  collection: ethers.Contract;
}

export interface TxReceiptType {
  accessList: [];
  blockHash: string;
  blockNumber: number;
  chainId: number;
  confirmations: number;
  creates: any;
  data: string;
  from: string;
  to: string;
  gasLimit: BigNumber;
  gasPrice: BigNumber;
  hash: string;
  maxFeePerGas: BigNumber;
  maxPriorityFeePerGas: BigNumber;
  nonce: number;
  r: string;
  s: string;
  v: number;
  transactionIndex: number;
  type: number;
  value: BigNumber;
  wait: () => Object;
}

/**
 * =====================================
 * Struct
 * =====================================
 */

export type BuyInfoStructType = {
  price: BigNumber;
  payHash: string;
  paySignature: string;
};

export type NFTInfoStructType = {
  collectionAddres: string;
  holderAddress: string;
  tokenId: BigNumber;
};

export type LazyNFTInfoStructType = {
  collectionAddress: string;
  creatorAddress: string;
  receiverAddress: string;
  ipfsHash: string;
  mintHash: string;
  mintSignature: string;
};

/**
 * =====================================
 * Event
 * =====================================
 */

// market
export interface BuyLazyNFTEventType {}

export interface BuyNFTEventType {}

// currency
export interface DepositEventType {
  from: string;
  to: string;
  amount: BigNumber;
}

export interface WithdrawEventType {
  from: string;
  to: string;
  amount: BigNumber;
}

export interface ETHTransferEventType {
  from: string;
  to: string;
  amount: BigNumber;
}

// collection
export interface ApprovalEventType {
  owner: string;
  approvedAddress: string;
  tokenId: BigNumber;
}

export interface ApprovalForAllEventType {
  owner: string;
  operator: string;
  approved: boolean;
}

export interface BurnEventType {
  tokenId: BigNumber;
  ipfsHash: string;
}

export interface MintEventType {
  receiverAddress: string;
  tokenId: BigNumber;
  ipfsHash: string;
}

export interface TransferEventType {
  from: string;
  to: string;
  tokenId: BigNumber;
}
