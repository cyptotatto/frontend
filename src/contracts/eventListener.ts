import { BigNumber, Contract } from "ethers";

/**
 * ======================================
 * Tatto colletion
 * ======================================
 */

export interface ITattoCollectionListener {
  addMintListener: (contract: Contract, listener: MintListenerType) => void;
  deleteMintListener: (contract: Contract, listener: MintListenerType) => void;
  addTransferListener: (
    contract: Contract,
    listener: TrasnferListenerType
  ) => void;
  deleteTransferListener: (
    contract: Contract,
    listener: TrasnferListenerType
  ) => void;
}

type MintListenerType = (
  address: string,
  tokenId: BigNumber,
  ipfsHash: string
) => void;

type TrasnferListenerType = (
  from: string,
  to: string,
  tokenId: BigNumber
) => void;

function addMintListener(contract: Contract, listener: MintListenerType) {
  contract.on(
    "Mint",
    (receiverAddress: string, tokenId: BigNumber, ipfsHash: string) => {
      listener(receiverAddress, tokenId, ipfsHash);
    }
  );
}

function deleteMintListener(contract: Contract, listener: MintListenerType) {
  contract.removeListener("Mint", listener);
}

function addTransferListener(
  contract: Contract,
  listener: TrasnferListenerType
) {
  contract.on("Transfer", (from: string, to: string, tokenId: BigNumber) => {
    listener(from, to, tokenId);
  });
}

function deleteTransferListener(
  contract: Contract,
  listener: TrasnferListenerType
) {
  contract.removeListener("Transfer", listener);
}

export const TattoCollectionListener: ITattoCollectionListener = {
  addMintListener,
  deleteMintListener,
  addTransferListener,
  deleteTransferListener,
};

/**
 * ======================================
 *  Tatto currency
 * ======================================
 */

export interface ITattoCurrencyListener {
  addETHTransferListener: (
    contract: Contract,
    listener: ETHTransferListenerType
  ) => void;
  deleteETHTransferListener: (
    contract: Contract,
    listener: ETHTransferListenerType
  ) => void;
  addWithdrawListener: (
    contract: Contract,
    listener: WithdrawListenerType
  ) => void;
  deleteWithdrawListener: (
    contract: Contract,
    listener: WithdrawListenerType
  ) => void;
  addDepositListener: (
    contract: Contract,
    listener: DepositListenerType
  ) => void;
  deleteDepositListener: (
    contract: Contract,
    listener: DepositListenerType
  ) => void;
}

type ETHTransferListenerType = (
  from: string,
  to: string,
  amount: BigNumber
) => void;

type WithdrawListenerType = (
  from: string,
  to: string,
  amount: BigNumber
) => void;

type DepositListenerType = (
  from: string,
  to: string,
  amount: BigNumber
) => void;

function addETHTransferListener(
  contract: Contract,
  listener: ETHTransferListenerType
) {
  contract.on("ETHTransfer", (from: string, to: string, amount: BigNumber) => {
    listener(from, to, amount);
  });
}

function deleteETHTransferListener(
  contract: Contract,
  listener: ETHTransferListenerType
) {
  contract.removeListener("ETHTransfer", listener);
}

function addWithdrawListener(
  contract: Contract,
  listener: WithdrawListenerType
) {
  contract.on("Withdraw", (from: string, to: string, amount: BigNumber) => {
    listener(from, to, amount);
  });
}

function deleteWithdrawListener(
  contract: Contract,
  listener: WithdrawListenerType
) {
  contract.removeListener("Withdraw", listener);
}

function addDepositListener(contract: Contract, listener: DepositListenerType) {
  contract.on("Deposit", (from: string, to: string, amount: BigNumber) => {
    listener(from, to, amount);
  });
}

function deleteDepositListener(
  contract: Contract,
  listener: DepositListenerType
) {
  contract.removeListener("Deposit", listener);
}

export const TattoCurrencyListener: ITattoCurrencyListener = {
  addETHTransferListener,
  deleteETHTransferListener,
  addWithdrawListener,
  deleteWithdrawListener,
  addDepositListener,
  deleteDepositListener,
};

/**
 * ======================================
 *  Tatto market
 * ======================================
 */

export interface ITattoMarketListener {
  addBuyLazyNFTListener: (contract: Contract, listener: () => void) => void;
  deleteBuyLazyNFTListener: (contract: Contract, listener: () => void) => void;
  addBuyNFTListener: (contract: Contract, listener: () => void) => void;
  deleteBuyNFTListener: (contract: Contract, listener: () => void) => void;
}

function addBuyLazyNFTListener(contract: Contract, listener: () => void) {
  contract.on("BuyNFT", () => {
    listener();
  });
}

function deleteBuyLazyNFTListener(contract: Contract, listener: () => void) {
  contract.removeListener("BuyNFT", listener);
}

function addBuyNFTListener(contract: Contract, listener: () => void) {
  contract.on("BuyNFT", () => {
    listener();
  });
}

function deleteBuyNFTListener(contract: Contract, listener: () => void) {
  contract.removeListener("BuyNFTWithSignature", listener);
}

export const TattoMarketListener: ITattoMarketListener = {
  addBuyLazyNFTListener,
  deleteBuyLazyNFTListener,
  addBuyNFTListener,
  deleteBuyNFTListener,
};
