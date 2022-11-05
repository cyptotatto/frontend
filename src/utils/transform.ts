import { BigNumber, ethers } from "ethers";

export function makeEightDigit(_string: string) {
  if (_string.length >= 9) {
    throw Error("string length must be below 8");
  }
  const stringLength = _string.length;
  return "0".repeat(8 - stringLength).concat(_string);
}

export function protocolFee(price: BigNumber) {
  return price.mul(2).div(100);
}

export function makeEtherFromBigNumber(amount: BigNumber): number {
  const value = Number(ethers.utils.formatEther(amount));
  return Math.floor(value * 10000) / 10000;
}

export function parseEtherFromNumber(value: number): BigNumber {
  return ethers.utils.parseEther(String(value));
}

export function generateRandomString(num: number) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < num; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

export function makeShortAddress(address: string): string {
  const left = address.slice(0, 6);
  const right = address.slice(-4);
  return left + "..." + right;
}

export function makeFormattedNumber(num: number): string {
  return num.toLocaleString("en-US");
}
