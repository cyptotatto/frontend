import { ethers } from "ethers";
import TattoCollectionAbi from "./abi/TattoCollection.sol/TattoCollection.json";
import TattoCurrencyAbi from "./abi/TattoCurrnency.sol/TattoCurrency.json";
import TattoMarketAbi from "./abi/TattoMarket.sol/TattoMarket.json";
import {
  TattoRoleAddress,
  TattoMarketAddress,
  TattoCurrencyAddess,
  TattoCollectionAddress,
} from "./constant";
import { ContractStructInterface } from "./interface";

export const provider = new ethers.providers.Web3Provider(window.ethereum);

export const signer = provider.getSigner();

export function getContract(_signer: any): ContractStructInterface {
  let currencyControl, market, collection;

  currencyControl = new ethers.Contract(
    TattoCurrencyAddess,
    TattoCurrencyAbi,
    _signer
  );

  market = new ethers.Contract(TattoMarketAddress, TattoMarketAbi, _signer);

  //chizu chizu erc721
  collection = new ethers.Contract(
    TattoCollectionAddress,
    TattoCollectionAbi,
    _signer
  );

  return {
    collection,
    currencyControl,
    market,
  };
}

export const Tatto = getContract(signer);
